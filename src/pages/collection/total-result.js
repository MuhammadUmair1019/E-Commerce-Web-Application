import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";

const sortOptions = [20, 40, 60, 80, "All"];

const useStyles = makeStyles((theme) => ({
  root: {
    border: "0.1px solid #ddd",
    borderRadius: "4px",
    padding: theme.spacing(0.2, 1),
    fontSize: "0.9rem",
    marginLeft: theme.spacing(1),
  },
}));

export default function TotalResult(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const { result, setResult } = useState([]);
  return (
    <Box
      display="flex"
      alignItems="center"
      style={{ display: matches ? "none" : false }}
    >
      <Typography variant="subtitle2"> Result Per Page : </Typography>
      <FormControl>
        <Select
          className={classes.root}
          labelId="result-prods"
          value={result || 20}
          onChange={(e) => setResult(e.target.value)}
        >
          {sortOptions.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
