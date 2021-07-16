import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    background: "#333E48",
    padding: theme.spacing(2, 0),
    color: "#ffff",

    "& .MuiInputBase-root": {
      borderRadius: "25px",
      padding: theme.spacing(0, 3),
      background: "#fff",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
    },
    "& .MuiButtonBase-root": {
      background: "#7BBD42",
      padding: theme.spacing(0.55, 2),
      color: "#ffff",
      textTransform: "initial",
      borderRadius: "25px",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    "& .MuiTypography-root": {
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: ".9rem",
        padding: theme.spacing(1, 0),
      },
    },
  },
  newsLetter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    transform: "rotate(-60deg)",
    marginRight: theme.spacing(1),
  },
}));

export default function NewsLetter() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography variant="h6">
              <span>
                <SendIcon className={classes.icon} />
              </span>
              Sign up to Newsletter
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography variant="h6" style={{ fontWeight: "300" }}>
              ...and receive
              <span style={{ fontWeight: "800" }}>
                {" "}
                exciting discounts and offers!
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box>
              <InputBase placeholder="Email Address" />
              <Button>Subscribe &#8594;</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
