import { makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    boxShadow: "none",
    borderBottom: "01px solid #ddd",
  },
  typography: {
    padding: theme.spacing(0.5),
  },
}));

export default function RatingFilter(props) {
  const { selectedRating, setSelectedRating } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="button">Rating</Typography>
        {[5, 4, 3, 2, 1].map((rating) => (
          <Grid
            container
            key={rating}
            onClick={() => setSelectedRating(rating)}
          >
            <Rating
              value={rating}
              readonly
              style={{ color: rating === selectedRating ? "red" : "" }}
            />
            <Typography className={classes.typography}>
              {rating === 5 ? 5.0 : rating.toFixed(1) + "+"}
            </Typography>
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
}
