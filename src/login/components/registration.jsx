import React, {useCallback} from "react";
import { Formik } from "formik";

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

const Registration = () => (
    const validate = useCallback((values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            values.email
          )
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }, []);

      return ()

  <div>
    <h1>Registration form!</h1>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password &&
            touched.password &&
            errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export { Registration };
