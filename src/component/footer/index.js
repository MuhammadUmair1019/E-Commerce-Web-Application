import { makeStyles } from "@material-ui/core";
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
    marginTop: "50px",
    paddingTop: "60px",
    paddingLeft: "50px",
    "& .MuiSvgIcon-root": {
      opacity: "0.6",
    },
    "& .MuiSvgIcon-root:hover": {
      color: "blue",
    },
  },
  footerIconStyling: {
    marginTop: "-6px",
  },
  listStyle: {
    paddingLeft: "0px",
    textDecoration: "none",
    listStyle: "none",
    "& li": {
      paddingBottom: "5px",
    },
  },
  footerBottom: {
    background: "#ddd",
    padding: "10px 0px 10px 50px",
    opacity: "0.6",
    marginBottom: "0px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.footerStyling}>
        <Grid container spacing={10}>
          <Grid item lg={5}>
            <img src="/images/products/logo.png" />
            <Typography variant="subtitle1"> Contact info</Typography>
            <Typography variant="p">
              {" "}
              4th Floor Naaz Plaza, Building #1, 7 Egerton Rd, Karachi 54000
            </Typography>
            <Grid item style={{ marginTop: "16px" }}>
              <FacebookIcon style={{ paddingRight: "10px" }} fontSize="large" />
              <InstagramIcon
                style={{ paddingRight: "10px" }}
                fontSize="large"
              />
              <TwitterIcon style={{ paddingRight: "10px" }} fontSize="large" />
            </Grid>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h6"> Information</Typography>
            <ul className={classes.listStyle}>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Return & Exchange</li>
              <li>Term & Condition</li>
            </ul>
          </Grid>
          <Grid item lg={4}>
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
        </Grid>
      </Container>
      <div className={classes.footerBottom}>
        <Typography variant="subtitle1">
          CopyRight &copy; 2021 PakDukan. All Right Reversed.
        </Typography>
      </div>
    </div>
  );
}
