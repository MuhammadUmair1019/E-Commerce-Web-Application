import React, { useContext, useState } from "react";
import { CartContext } from "../../helpers/cartProvider";
import { menuTitles } from "../../data/category";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Menu from "./menu";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// ------------toogle-------------------

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffff",
  },
  inputStyle: {
    width: "600px",
    border: "2px solid #7BBD42",
    margin: " 5px auto",
    borderRadius: "50px",
    [theme.breakpoints.down("xs")]: {
      border: "1.8px solid #7BBD42",
      margin: " 5px auto",
      marginBottom: ".8rem",
      borderRadius: "10px",
    },
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

  // ---------------------------
  // responsive classes
  badges: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  subMenu: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  searchBar: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  subMenu2: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline",
      color: "black",
      alignSelf: "flex-end",
      alignItems: "left",
    },
  },
  hamburger: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline",
    },
  },
}));

export default function AppBars(props) {
  const classes = useStyles();
  const { totalCartItems } = useContext(CartContext);
  const { searchString, onChangeSearch } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  let history = useHistory();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={6} sm={3} md={3} lg={2} className={classes.logo}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img src="/images/products/logo.png" />
                </Link>
              </Grid>
              <Grid item xs={2} className={classes.subMenu2}></Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.subMenu2}
              >
                <IconButton style={{ backgroundColor: "transparent" }}>
                  <Menu />
                </IconButton>
                <IconButton style={{ backgroundColor: "transparent" }}>
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Badge
                      badgeContent={totalCartItems}
                      className={classes.badgeStyle}
                    >
                      <LocalMallOutlinedIcon fontSize="small" />
                    </Badge>
                  </Link>
                </IconButton>
                <IconButton style={{ backgroundColor: "transparent" }}>
                  <MenuIcon fontSize="medium" style={{ color: "green" }} />
                </IconButton>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={7}
                lg={7}
                className={classes.inputStyle}
              >
                <InputBase
                  value={searchString}
                  onChange={onChangeSearch}
                  startAdornment={<SearchOutlinedIcon />}
                  className={classes.inputBaseStyle}
                  placeholder="Search for Products"
                />
              </Grid>

              <Grid item sm={3} md={2} lg={2} className={classes.badges}>
                <IconButton style={{ backgroundColor: "transparent" }}>
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
                <IconButton style={{ backgroundColor: "transparent" }}>
                  <Menu />
                </IconButton>
                <IconButton style={{ backgroundColor: "transparent" }}>
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
        <Grid container className={`${classes.navBarStyle} ${classes.subMenu}`}>
          <Container className={classes.buttonStyle}>
            <div className={classes.subMenu}>
              <Link to="/collection" style={{ textDecoration: "none" }}>
                <Button> All Department</Button>
              </Link>
              {menuTitles.map((title) => (
                <Button key={title.id}>{title}</Button>
              ))}
            </div>
          </Container>
        </Grid>
      </AppBar>
    </>
  );
}
