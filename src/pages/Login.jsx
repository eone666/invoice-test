import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import LoginForm from "../components/LoginForm";

const LoginSchema = Yup.object().shape({
  login: Yup.string().required("Login required"),
  password: Yup.string()
    .min(8, "Password must be more than 8 characters")
    .matches(
      /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/gm,
      "Password must at least 1 lowercase letter, 1 uppercase letter, and 1 digit."
    )
    .required("Password equired"),
});

export default function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setError] = useState(false);
  const { setUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (values) => {
    const response = await fetch(
      `https://api.github.com/users/${values.login}`
    );
    const data = await response.json();
    if (response.status === 200) {
      const user = {
        login: values.login,
        password: values.password,
        avatarUrl: data.avatar_url,
      };
      setUser(user);
      setLoggedIn(true);
    } else {
      setError(true);
      setErrorMessage(data.message);
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
        {({ errors, touched, isSubmitting, handleSubmit }) => (
          <LoginForm
            handleSubmit={handleSubmit}
            errors={errors}
            isError={isError}
            touched={touched}
            isSubmitting={isSubmitting}
            isError={isError}
            errorMessage={errorMessage}
          />
        )}
      </Formik>
    </div>
  );
}
