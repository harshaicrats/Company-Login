import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import dataService from "../services/dataService";
import "./Login.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
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

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  const companyData = useSelector((state) => state.register.companyDetails);
  console.log(companyData);

  const formik = useFormik({
    initialValues: {
      personName: "",
      personPhoneNumber: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.personPhoneNumber) {
        errors.personPhoneNumber = "Phone number is required";
      } else if (!/^[0-9]*$/.test(values.personPhoneNumber)) {
        errors.personPhoneNumber = "Phone number should only contain numbers";
      }
      if (!values.personName) {
        errors.personName = " PersonName is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      // const newArray=companyData.filter((value)=>
      //     (value.personName==values.personName)&&(value.personPhoneNumber==values.personPhoneNumber))
      // console.log(newArray.length);

      //   if(newArray.length!=0){
      //       history.push("/dashboard");
      //   }

      dataService
        .login({
          personName: values.personName,
          personPhoneNumber: values.personPhoneNumber,
        })
        .then((data) => {
          history.push("/dashboard");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon className="LockOutlinedIcon" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
