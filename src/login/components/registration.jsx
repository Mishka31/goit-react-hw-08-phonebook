import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const Registration = () => {
  const validate = useCallback((values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3) {
      errors.name = "Invalid name. Name should be more 3 symbols";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 7 || values.password.length > 15) {
      errors.password = "Invalid password. Password should be more then 8 and less then 15 symbols";
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = "Required!";
    } else if (values.repeatPassword.length < 8 || values.password.length > 15) {
      errors.repeatPassword = "Invalid password. Password should be more then 8 symbols!";
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "Confirm password should be equal password!";
    }
    return errors;
  }, []);

  const onSubmit = useCallback((values, { setSubmitting }) => {
    console.log("asd");
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  }, []);

  return (
    <div>
      <div>
        <Link to="/">Start Page</Link>
      </div>
      <h1>Registration form!</h1>
      <Formik initialValues={INITIAL_VALUES} validate={validate} onSubmit={onSubmit}>
        {({ isSubmitting, errors, values }) => (
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <br />
            <ErrorMessage name="name" component="div" />
            <br />
            <Field type="email" name="email" placeholder="Email" />
            <br />
            <ErrorMessage name="email" component="div" />
            <br />
            <Field type="password" name="password" placeholder="Password" />
            <br />
            <ErrorMessage name="password" component="div" />
            <br />
            <Field type="password" name="repeatPassword" placeholder="Confirm password" />
            <br />
            <ErrorMessage name="repeatPassword" component="div" />
            <br />

            <button
              type="submit"
              disabled={
                isSubmitting ||
                errors.name ||
                errors.email ||
                !values.email ||
                values.repeatPassword !== values.password ||
                !values.password
              }
            >
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
