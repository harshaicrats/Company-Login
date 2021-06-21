import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import { login } from "../features/loginSlice";
import "./Login.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.login);
  const formik = useFormik({
    initialValues: {
      companyName: "",
      personName: "",
      personPhoneNumber: "",
      personEmailId: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.companyName) {
        errors.companyName = "Company Name is required";
      }
      if (!values.personPhoneNumber) {
        errors.personPhoneNumber = "Phone number is required";
      } else if (!/^[0-9]*$/.test(values.personPhoneNumber)) {
        errors.personPhoneNumber = "Account number should only contain numbers";
      }
      if (!values.personName) {
        errors.personName = " PersonName is required";
      }
      if (!values.personEmailId) {
        errors.personEmailId = " PersonName is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      dispatch(
        login({
          companyName: values.companyName,
          personName: values.personName,
          personPhoneNumber: values.personPhoneNumber,
          personEmailId: values.personEmailId,
        })
      );
      history.push("/dashboard");
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" className="heading">
          iCrats Technologies
        </Typography>

        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            label="Company Name"
          />
          <div className="errors">{formik.errors.companyName}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="personName"
            value={formik.values.personName}
            onChange={formik.handleChange}
            label="Contact Person Name"
          />
          <div className="errors">{formik.errors.personName}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="personPhoneNumber"
            value={formik.values.personPhoneNumber}
            onChange={formik.handleChange}
            label="Contact Person Phone Number"
          />
          <div className="errors">{formik.errors.personPhoneNumber}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="personEmailId"
            value={formik.values.personEmailId}
            onChange={formik.handleChange}
            label="Contact Person Email Id"
          />
          <div className="errors">{formik.errors.personEmailId}</div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
