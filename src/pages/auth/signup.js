import React from "react";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { SignupSchema } from "../../utils/validation-schema/field-schema";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { env } from "../../env/env";
import SimpleSnackbar from "../../utils/common/snack-bar";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/user.reducer";

export const Signup = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [snack, setSnack] = useState({
    open: false,
    type: "info",
    message: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      firstName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, actions) => onSubmit(values, actions),
  });

  const onSubmit = async (values, actions) => {
    await axios
      .post(`${env.URL_API}/users/signup`, values)
      .then((result) => {
        if (result["data"]["success"]) {
          const user = result["data"]["result"]["user"];
          const token = result["data"]["result"]["token"];
          dispatch(login({ user, token }));
          actions.resetForm();
          setSnack({
            open: true,
            type: "success",
            message: result["data"]["message"],
          });
          navigate("/chat");
        } else {
          setSnack({
            open: true,
            type: "warning",
            message: result["data"]["message"],
          });
        }
      })
      .catch((reason) =>
        setSnack({ open: true, type: "error", message: reason.message })
      )
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <>
      <SimpleSnackbar
        open={snack.open}
        type={snack.type}
        message={snack.message}
      />
      <h3>{title}</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="field-item">
          <TextField
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="field-item">
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </div>
        <div className="field-item">
          <TextField
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </div>
        <div className="field-item">
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div className="field-item">
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>
        <div className="buttons">
          <LoadingButton
            type="submit"
            loading={formik.isSubmitting}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            SIGN UP
          </LoadingButton>
        </div>
      </form>
    </>
  );
};

export const signupLoader = () => {
  const connected = Boolean(sessionStorage.getItem("Authorization"));
  return connected ? redirect("/chat") : null;
};

export default Signup;
