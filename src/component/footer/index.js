import NewsLetter from "./newsletter";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f4f4f4",
    marginBottom: "-20px",
  },

  footerStyling: {
    paddingTop: theme.spacing(9),
    paddingLeft: theme.spacing(3),
    "& .MuiSvgIcon-root": {
      opacity: "0.6",
    },
    "& .MuiSvgIcon-root:hover": {
      color: "blue",
    },
  },
  listStyle: {
    paddingLeft: "0px",
    textDecoration: "none",
    listStyle: "none",
    "& li": {
      paddingBottom: "5px",
    },
  },
  socialIcon: {
    paddingRight: theme.spacing(1),
  },
  footerBottom: {
    background: "#ddd",
    padding: "10px 0px 10px 50px",
    opacity: "0.6",
    marginBottom: "0px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <div className={classes.root}>
        <NewsLetter />
        <Container className={classes.footerStyling}>
          <Grid container>
            <Grid item xs={12} sm={5} lg={3}>
              <img src="/images/products/logo.png" alt="Logo" />
              <Typography variant="subtitle1"> Contact info</Typography>
              <Typography variant="p">
                4th Floor Naaz Plaza, Building #1,
                <br />7 Egerton Rd, Karachi 54000
              </Typography>
              <Grid item style={{ marginTop: "16px" }}>
                <FacebookIcon className={classes.socialIcon} fontSize="large" />
                <InstagramIcon
                  className={classes.socialIcon}
                  fontSize="large"
                />
                <TwitterIcon className={classes.socialIcon} fontSize="large" />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Typography variant="h6"> Information</Typography>
              <ul className={classes.listStyle}>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Return & Exchange</li>
                <li>Term & Condition</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={3} lg={3}>
              <Typography variant="h6"> Categories</Typography>
              <ul className={classes.listStyle}>
                <li>Laptops</li>
                <li>Monitors</li>
                <li>Graphics Card</li>
                <li>Mobile Phones</li>
                <li>Memory (RAM)</li>
                <li>SSDs</li>
                <li>Hard Drives (HDD)</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4} lg={3}>
              <Typography variant="h6"> Account</Typography>
              <ul className={classes.listStyle}>
                <li>My Acccount</li>
                <li>Shopping Cart</li>
                <li>Sign Up</li>
                <li>Login In</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.footerBottom}>
          <Typography variant="subtitle2">
            CopyRight &copy; 2021 Umair. All Right Reversed.
          </Typography>
        </div>
      </div>
    </Box>
  );
}
