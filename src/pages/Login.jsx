import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

const LoginSchema = Yup.object().shape({
  login: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Min length: 8")
    .matches(
      /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/gm,
      "Password must at least 1 lowercase letter, 1 uppercase letter, and 1 digit."
    )
    .required("Required"),
});

export default function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setUser } = useAuth();

  const submitHandler = async (values) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${values.login}`
      );
      const data = await response.json();
      setLoggedIn(true);
      const user = {
        login: values.login,
        password: values.password,
        avatarUrl: data.avatar_url,
      };
      setUser(user);
      setLoggedIn(true);
    } catch (error) {
      setIsError(true);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="page login">
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field name="login" />
            {errors.login && touched.login ? <div>{errors.login}</div> : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {isError ? "Непредвиденная ошибка" : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}
