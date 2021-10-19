import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

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
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <button onClick={togglePassword}>
              {showPassword ? "Hide pasword" : "Show password"}
            </button>
            <br />
            <br />
            <Button
              disabled={isSubmitting || errors.email || !values.email || !values.password}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
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
