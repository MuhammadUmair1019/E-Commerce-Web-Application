import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const initialFieldValue = {
  email: "",
  password: "",
};

const Login = (props) => {
  const { onLogin, user, onLoginWIthGoogle } = props;
  const [inputValue, setInputValue] = useState(initialFieldValue);

  //useHistoryFromReactRouterDom
  const history = useHistory();

  // loginWithEmailAndPassword
  const handleLogin = () => {
    onLogin(inputValue.email, inputValue.password);
    // if (user) {
    //   history.push("/collection");
    // }
    setInputValue(initialFieldValue);
  };

  // loginWithGoogle
  const handleLoginWithGoogle = () => {
    onLoginWIthGoogle();
    if (user) {
      history.push("/collection");
    }
  };

  //InputHandle
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <Typography variant="h5" component="h5">
        Login
      </Typography>
      <p>Welcome back! Sign in to your account.</p>
      <form autoComplete="off">
        <h3> Username or email address *</h3>
        <TextField
          variant="outlined"
          name="email"
          value={inputValue.email}
          onChange={handleInputChange}
        />
        <h3> Password *</h3>
        <TextField
          variant="outlined"
          name="password"
          type="password"
          value={inputValue.password}
          onChange={handleInputChange}
        />
      </form>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Button variant="contained" onClick={handleLoginWithGoogle}>
        Login With Google
      </Button>
    </div>
  );
};

export default Login;
