import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Chip";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  allFilter: {
    margin: "0px 10px 10px 10px",
  },
});

export default function AppiedFilter(props) {
  const {
    selectedCategories,
    onChangeCategory,
    selectedPriceRange,
    onChangePrice,
    selectedRating, 
    setSelectedRating,
    onClearAll,
  } = props;

  const classes = useStyles();

  if (
    selectedCategories.length +
      (selectedPriceRange.isApplied ? 1 : 0) +
      (selectedRating ? 1 : 0) ===
    0
  )
    return null;

  return (
    <Grid
      container
      alignItems="center"
      spacing={1}
      className={classes.allFilter}
    >
    <Grid item>
    <Chip
      label={"Filter By"}
      variant="outlined"
    />
    </Grid>
      {selectedCategories.length &&
        selectedCategories.map((item) => (
          <Grid item>
            <Chip
              key={item}
              label={item}
              onDelete={() => onChangeCategory(item, false)}
            />
          </Grid>
        ))}

      {selectedPriceRange.isApplied && (
        <Grid item>
          <Chip
            label={`Price ${selectedPriceRange.min}- ${selectedPriceRange.max}`}
            onDelete={() => onChangePrice("clear")}
          />
        </Grid>
      )}

      {selectedRating && (
        <Grid item>
          <Chip
            label={` Rating ${selectedRating} ${
              selectedRating == 5 ? "" : "& Up"
            }`}
            onDelete={() => setSelectedRating("")}
          />
        </Grid>
      )}

      <Grid item>
        <Chip
          label="Clear All"
          onDelete={onClearAll}
          color="secondary"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
