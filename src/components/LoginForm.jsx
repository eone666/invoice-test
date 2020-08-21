import React from "react";
import { Form } from "formik";
import Button from "./Button";
import TextInput from "./TextInput";

export default function LoginForm({
  handleSubmit,
  errors,
  isError,
  touched,
  isSubmitting,
  errorMessage,
}) {
  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__row">
        <TextInput name="login" placeholder="login" />
      </div>
      <div className="login-form__row">
        <TextInput name="password" type="password" placeholder="password" />
      </div>
      <div className="login-form__row">
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </div>
      <div className="login-form__row errors">
        {errors.login && touched.login ? (
          <div className="errors__item">{errors.login}</div>
        ) : (
          <div className="errors__item"></div>
        )}
        {errors.password && touched.password ? (
          <div className="errors__item">{errors.password}</div>
        ) : (
          <div className="errors__item"></div>
        )}
        {isError ? (
          <div className="errors__item">{errorMessage}</div>
        ) : (
          <div className="errors__item"></div>
        )}
      </div>
    </Form>
  );
}
