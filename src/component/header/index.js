import React, { useContext } from "react";
import { FilterContext } from "../../helpers/filterProvider";
import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import AppBars from "./app-bar";

const useStyles = makeStyles({
  appBarStyling: {
    marginBottom: "140px",
  },
});

export default function Header() {
  const { searchString, onChangeSearch } = useContext(FilterContext);

  const classes = useStyles();
  return (
    <Grid container className={classes.appBarStyling}>
      <AppBars searchString={searchString} onChangeSearch={onChangeSearch} />
      <CssBaseline />
    </Grid>
  );
}
