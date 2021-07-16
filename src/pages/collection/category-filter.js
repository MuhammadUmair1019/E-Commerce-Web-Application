import { categoryTitles } from "../../data/category";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    borderBottom: "0.1px solid #ddd",
    "& .MuiTypography-root": {
      fontSize: ".9rem",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#7BBD42",
    },
    "& .MuiButtonBase-root:hover": {
      background: "none",
    },
  },
  checkBox: {
    width: "100%",
  },
}));

export default function CategoryFilter(props) {
  const classes = useStyles();
  const { selectedCategories, onChangeCategory } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="button">Category </Typography>
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
          />
        ))}
      </CardContent>
    </Card>
  );
}
