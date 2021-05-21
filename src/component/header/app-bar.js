import React, { useContext, useState } from "react";
import { CartContext } from "../../helpers/cartProvider";
import { menuTitles } from "../../data/category";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffff",
  },
  inputStyle: {
    width: "600px",
    border: "2px solid #7BBD42",
    margin: " 5px auto",
    borderRadius: "50px",
  },
  inputBaseStyle: {
    paddingLeft: "16px",
    "& .MuiSvgIcon-root": {
      color: "#7BBD42",
      paddingRight: "10px",
    },
  },
  badgeStyle: {
    "& .MuiBadge-badge": {
      background: "#7BBD42",
    },
  },
  navBarStyle: {
    width: "100%",
    height: "50px",
    background: "#7BBD42",
  },
  listStyle: {
    display: "flex",
    listStyleType: "none",
  },
  listChildStyle: {
    padding: " 0 10px",
    fontWeight: "700",
    fontSize: "15px",
  },
  buttonStyle: {
    "& .MuiButton-root": {
      textTransform: "initial",
      color: "#ffff",
      marginTop: "8px",
      disableRipple: true,
    },
  },
}));

export default function AppBars() {
  const classes = useStyles();
  const { totalCartItems } = useContext(CartContext);

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Container>
            <Grid container alignItems="center">
              <Grid item>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img src="/images/products/logo.png" />
                </Link>
              </Grid>
              <Grid item sm>
                <div className={classes.inputStyle}>
                  <InputBase
                    startAdornment={<SearchOutlinedIcon />}
                    className={classes.inputBaseStyle}
                    placeholder="Search for Products"
                  />
                </div>
              </Grid>
              <Grid item>
                <IconButton>
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <PersonOutlineOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Badge
                      badgeContent={totalCartItems}
                      className={classes.badgeStyle}
                    >
                      <LocalMallOutlinedIcon fontSize="small" />
                    </Badge>
                  </Link>
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        <Grid container className={classes.navBarStyle}>
          <Container className={classes.buttonStyle}>
            <Link to="/collection" style={{ textDecoration: "none" }}>
              <Button> All Department</Button>
            </Link>
            {menuTitles.map((title) => (
              <Button key={title.id}>{title}</Button>
            ))}
          </Container>
        </Grid>
      </AppBar>
    </>
  );
}
