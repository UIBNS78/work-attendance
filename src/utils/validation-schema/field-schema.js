import * as yup from "yup";

export const SignupSchema = yup.object({
  name: yup
    .string()
    .min(2, "Must be more than 2 characters.")
    .max(50, "Too long, max characters 50.")
    .required("Name is required"),
  firstName: yup
    .string()
    .min(2, "Must be more than 2 characters.")
    .max(70, "Too long, max characters 70.")
    .required("First name is required"),
  username: yup
    .string()
    .min(2, "Must be more than 2 characters.")
    .max(25, "Too long, max characters 25.")
    .required("Username is required"),
  //   email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password too short.")
    /*.matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message: "Password is easy to hack.",
    })*/
    .required("Please fill this field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Please fill this field"),
});
