import React from "react";
import Login from "./login";
import Register from "./register";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../helpers/AuthProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.5rem",
    padding: "1.5rem",
    position: "relative",
    "& .MuiTypography-root": {
      borderBottom: "3px solid #7BBD42",
      width: "80%",
      paddingBottom: ".9rem",
      marginBottom: "1rem",
    },
    "& .MuiFormControl-root": {
      width: "80%",
      margin: "1rem 0",
    },
    "& .MuiInputBase-root": {
      borderRadius: "25px",
      height: "50px",
      padding: "0 10px",
    },
    "& h3 ": {
      marginBottom: "-.5rem",
      marginLeft: ".4rem",
    },
    "& p ": {
      margin: "2rem 0",
      fontSize: "1rem",
    },
    "& .MuiButtonBase-root": {
      display: "inlineBlock",
      margin: ".5rem",
      borderRadius: "20px",
      padding: ".8em 2em",
      background: "#7BBD42",
      fontWeight: "600",
    },
    "& .MuiButtonBase-root:hover": {
      background: "black",
      color: "#ffff",
    },
  },
  ore: {
    border: "1px solid #ddd",
    height: "100%",
    position: "absolute",
    content: " ",
    right: "55%",
    top: "0",
    background: "black",
  },
}));

const Account = () => {
  const classes = useStyles();
  // ----------Onlogin & OnRegister function from AuthProvider---------------
  const { onLogin, onRegister, onLoginWIthGoogle, user, error } =
    useContext(AuthContext);

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item md={6}>
          <Login
            onLogin={onLogin}
            user={user}
            error={error}
            onLoginWIthGoogle={onLoginWIthGoogle}
          />
        </Grid>
        <Grid className={classes.ore}></Grid>
        <Grid item md={6}>
          <Register onRegister={onRegister} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
