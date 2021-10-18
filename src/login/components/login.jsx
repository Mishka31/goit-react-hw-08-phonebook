import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const Login = () => {
  const validate = useCallback((values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }, []);

  const onSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }, []);

  return (
    <div>
      <div>
        <Link to="/">Start Page</Link>
      </div>
      <h1>Login form!</h1>
      <Formik initialValues={INITIAL_VALUES} validate={validate} onSubmit={onSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter email..."
            />
            <br />
            {errors.email && touched.email && errors.email}
            <br />
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Enter password..."
            />
            <br />
            {errors.password && touched.password && errors.password}
            <br />
            <br />
            <button
              type="submit"
              disabled={isSubmitting || errors.email || !values.email || !values.password}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <br />
      <div>
        <Link to="/registration">Does not have an account? Register </Link>
      </div>
    </div>
  );
};

export { Login };
