import { categoryTitles } from "../../data/category";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  checkBox: {
    width: "100%",
  },
}));

export default function CategoryFilter(props) {
  const classes = useStyles();
  const { selectedCategories, onChangeCategory } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Category </Typography>
        {categoryTitles.map((category) => (
          <FormControlLabel
            className={classes.checkBox}
            key={category}
            label={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={(e) => onChangeCategory(category, e.target.checked)}
              />
            }
            label={category}
          />
        ))}
      </CardContent>
    </Card>
  );
}
