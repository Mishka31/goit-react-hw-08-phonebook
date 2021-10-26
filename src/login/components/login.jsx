import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import authOperations from "../../redux/auth/auth-operations.js";
import AppBar from "../../Components/AppBar/AppBar.js";
import Box from "@material-ui/core/Box";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import s from "./login.module.css";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }, []);

  const onSubmit = useCallback(
    (values, { setSubmiting }) => {
      console.log(values);
      dispatch(authOperations.logIn(values));
      setSubmiting(false);
    },
    [dispatch]
  );

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div>
      <AppBar />
      <h1 className={s.title}>Login form!</h1>
      <Formik initialValues={INITIAL_VALUES} validate={validate} onSubmit={onSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={s.container} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
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
            <br />
            <br />
            <Box sx={{ display: "flex" }}>
              <TextField
                fullWidth
                variant="outlined"
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
              <Button onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </Box>
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
    </div>
  );
};

export { Login };
