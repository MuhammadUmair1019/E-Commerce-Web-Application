import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
const useStyles = makeStyles((theme) => ({
  root: {
    "& h2": {
      fontSize: "1.3rem",
      fontWeight: "400",
    },
    "& li": {
      listStyle: "none",
      marginLeft: "-2rem",
      fontSize: "1rem",
    },
    "& .MuiSvgIcon-root": {
      paddingRight: "5px",
      paddingTop: "1rem",
      color: "#7BBD42",
      fontSize: "2rem",
    },
  },
}));

const InputFieldValues = {
  email: "",
  password: "",
  repeatPassword: "",
};

const Register = (props) => {
  const { onRegister } = props;
  const classes = useStyles();
  const [inputValues, setInputValues] = useState(InputFieldValues);

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleRegister = () => {
    onRegister(
      inputValues.email,
      inputValues.password,
      inputValues.repeatPassword
    );
    setInputValues(InputFieldValues);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h5">
        Register
      </Typography>
      <p>
        Create new account today to reap the benefits of a personalized shopping
        experience.
      </p>
      <form autoComplete="off">
        <h3> Email address *</h3>
        <TextField
          variant="outlined"
          name="email"
          value={inputValues.email}
          onChange={handleInputValues}
        />
        <h3> Password *</h3>
        <TextField
          variant="outlined"
          name="password"
          value={inputValues.password}
          onChange={handleInputValues}
        />
        <h3> Repeat Password *</h3>
        <TextField
          variant="outlined"
          name="repeatPassword"
          value={inputValues.repeatPassword}
          onChange={handleInputValues}
        />
        <p style={{ margin: "1rem" }}>
          A password will be sent to your email address.
        </p>
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </form>
      <h2>Sign up today and you will be able to :</h2>
      <ul>
        <li>
          <DoneIcon /> Speed your way through checkout
        </li>
        <li>
          <DoneIcon />
          Track your orders easily
        </li>
        <li>
          <DoneIcon />
          Keep a record of all your purchases
        </li>
      </ul>
    </div>
  );
};

export default Register;
