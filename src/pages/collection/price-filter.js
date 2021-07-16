import { priceRange } from "../../data/products";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1.5),
    boxShadow: "none",
    borderBottom: "01px solid #ddd",
    "& .MuiSlider-root": {
      color: "#7BBD42",
    },
  },
}));

export default function PriceFilter(props) {
  const { selectedPriceRange, onChangePrice } = props;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="button"> Price</Typography>
        <Slider
          className={classes.slider}
          min={priceRange.min}
          max={priceRange.max}
          value={[
            selectedPriceRange.min || priceRange.min,
            selectedPriceRange.max || priceRange.max,
          ]}
          step={(priceRange.max - priceRange.min) / 8}
          valueLabelDisplay="auto"
          onChange={(event, newPriceRange) => onChangePrice(newPriceRange)}
          onChangeCommitted={(event, newPriceRange) =>
            onChangePrice(newPriceRange)
          }
        />
      </CardContent>
    </Card>
  );
}
