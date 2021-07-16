import { Box, makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TotalResult from "./total-result";

const sortOptions = [
  { value: "RatingHighToLow", title: "Rating High - Low" },
  { value: "RatingLowToHigh", title: "Rating Low - High" },
  { value: "PriceHighToLow", title: "Price High - Low" },
  { value: "PriceLowToHigh", title: "Price Low - High" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    border: "0.1px solid #ddd",
    borderRadius: "4px",
    padding: theme.spacing(0.2, 1),
    fontSize: "0.9rem",
  },
  margin: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
  },
}));

export default function SortComponent(props) {
  const classes = useStyles();
  const { sortBy, setSortBy } = props;
  return (
    <Box className={classes.margin}>
      <FormControl>
        <Select
          className={classes.root}
          labelId="sort-prods"
          value={sortBy || "RatingHighToLow"}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
