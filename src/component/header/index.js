import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import AppBars from "./app-bar";

const useStyles = makeStyles({
  appBarStyling: {
    marginBottom: "140px",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <Grid container className={classes.appBarStyling}>
      <AppBars />
      <CssBaseline />
    </Grid>
  );
}
