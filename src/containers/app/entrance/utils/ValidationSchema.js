import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required")
    .test("test-name", "Include spaces", function (value) {
      return /\s/.test(value) ? false : true;
    }),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required")
    .matches(/^(?!\s+$).+/g, "Invalid password")
    .test("test-name", "Include spaces", function (value) {
      return /\s/.test(value) ? false : true;
    })
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  checkPassword: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords doesnt match"),
});

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required")
    .test("test-name", "Include spaces", function (value) {
      return /\s/.test(value) ? false : true;
    }),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required")
    .matches(/^(?!\s+$).+/g, "Invalid password")
    .test("test-name", "Include spaces", function (value) {
      return /\s/.test(value) ? false : true;
    })
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
