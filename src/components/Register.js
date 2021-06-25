import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import { register } from "../features/loginSlice";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import "./Register.css";
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

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
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
        errors.personPhoneNumber = "Phone number should only contain numbers";
      }
      if (!values.personName) {
        errors.personName = " PersonName is required";
      }
      if (!values.personEmailId) {
        errors.personEmailId = " PersonEmail Id is required";
      }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.personEmailId)){
        errors.personEmailId = "Invalid Email format";
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(
        register({
          companyName: values.companyName,
          personName: values.personName,
          personPhoneNumber: values.personPhoneNumber,
          personEmailId: values.personEmailId,
        })
      );
      history.push("/login");
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
          <ContactPhoneRoundedIcon className="ContactPhoneRoundedIcon " />
        </Avatar>
        <Typography component="h1" variant="h4" className="heading">
          iCrats Technologies
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
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
              {"Already have an account? Sign In"}
              </Link>
            </Grid>
     </Grid>
        </form>
      </div>
    </Container>
  );
}
