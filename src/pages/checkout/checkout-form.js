import { makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "20px",
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
    "& .MuiInputBase-root": {
      borderRadius: "50px",
      padding: "0px 10px 0px 10px",
      height: "45px",
    },
  },
  typography: {
    borderBottom: "2px solid #7BBD42",
    width: "80%",
    marginTop: theme.spacing(5),
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    borderColor: "",
  },
  textAreaStyle: {
    width: "80%",
    height: "100px",
    borderRadius: "30px",
    opacity: "0.6",
  },
}));

export default function CheckoutForm(props) {
  const { values, handleInputChange } = props;
  const classes = useStyles();

  return (
    <>
      <form className={classes.root}>
        <Grid container spacing={10}>
          <Grid item>
            <TextField
              style={{ width: "39%" }}
              variant="outlined"
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
            <TextField
              style={{ width: "39%" }}
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="City"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Phone "
              name="phone"
              value={values.phone}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Email "
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            <Grid container style={{ margin: "10px 0px 0px 10px" }}>
              <CheckBoxOutlineBlankIcon
                fontSize="small"
                style={{ marginRight: "10px", opacity: "0.6" }}
              />
              <Typography variant="subtitle2">Create an account</Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
