import React from "react";
import { AuthContext } from "../../helpers/AuthProvider";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  menuStyle: {
    width: "220px",
    height: "180px",
    marginRight: "100px",
    marginTop: "12px",
    border: "6px solid balck",
    fontSize: "13px",
    "& .MuiButtonBase-root": {
      borderRadius: "6px",
      fontSize: "11px",
      background: "#7BBD42",
      marginBottom: "6px",
    },
    "& .MuiButtonBase-root:hover": {
      background: "black",
      color: "#ffff",
    },
    "& hr": {
      width: "170px",
    },
    "& .MuiButton-startIcon:hover": {
      color: "none",
      background: "none",
    },
  },
  menuLoginStyle: {
    marginTop: ".8rem",
    marginRight: "3rem",
  },
}));

const Menu = (props) => {
  const classes = useStyles();
  const { onLogout, isLoggedIn } = useContext(AuthContext);

  console.log("Status ", isLoggedIn);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  let history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    handleLogout();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    history.push("/");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <div>
      <PersonOutlineOutlinedIcon
        fontSize="small"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      />
      {!isLoggedIn ? (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.menuStyle}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <p> Returning Customer ?</p>
                    <Link to="/account" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        disableRipple
                        onClick={handleClose}
                        // onClick={() => history.push("/account")}
                      >
                        Sign In
                      </Button>
                    </Link>
                    <hr />
                    <p> Don't have an account</p>
                    <p> Register</p>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      ) : (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={classes.menuLoginStyle}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </div>
  );
};

export default Menu;
