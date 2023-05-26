import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { LoginSchema } from "../../utils/validation-schema/field-schema";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { env } from "../../env/env";
import SimpleSnackbar from "../../utils/common/snack-bar";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/user.reducer";
import { redirect, useNavigate } from "react-router-dom";

export const Login = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [snack, setSnack] = React.useState({
    open: false,
    type: "info",
    message: "",
  });
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => onSubmit(values, actions),
  });

  const onSubmit = async (values, actions) => {
    await axios
      .post(`${env.URL_API}/users/login`, values)
      .then((result) => {
        if (result["data"]["success"]) {
          const user = result["data"]["result"]["user"];
          const token = result["data"]["result"]["token"];
          actions.resetForm();
          setSnack({
            open: true,
            type: "success",
            message: result["data"]["message"],
          });
          dispatch(login({ user, token }));
          navigate("/chat");
        } else {
          setSnack({
            open: true,
            type: "warning",
            message: result["data"]["message"],
          });
        }
      })
      .catch((reason) => {
        setSnack({
          open: true,
          type: "error",
          message: reason.message,
        });
      })
      .finally(() => actions.setSubmitting(false));
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
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
            LOG IN
          </LoadingButton>
        </div>
      </form>
    </>
  );
};

export const loginLoader = () => {
  const connected = Boolean(sessionStorage.getItem("Authorization"));
  return connected ? redirect("/chat") : null;
};

export default Login;
