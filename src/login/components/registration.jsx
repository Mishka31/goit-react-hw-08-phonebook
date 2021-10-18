import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

// values = {
//   name: "",
//   email: "",
//   repeatPassword: "",
//   password: "",
// };

const INITIAL_VALUES = {
  name: "",
  email: "",
  repeatPassword: "",
  password: "",
};

const Registration = () => {
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
      <h1>Registration form!</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="password" name="passwordRepead" />
            <ErrorMessage name="passwordRepead" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/login">Do you already have an account? Login</Link>{" "}
    </div>
  );
};

export { Registration };
