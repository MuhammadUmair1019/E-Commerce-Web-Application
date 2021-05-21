import React from "react";
import { reviews } from "../../data/reviews";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {},
  media: {
    height: "300px",
    width: "300px",
  },
  listStyle: {
    paddingLeft: "20px",
    opacity: "0.6",
    fontSize: "0.7rem",
  },
  buttonStyle: {
    "& .MuiButton-root": {
      textTransform: "initial",
      color: "#7BBD42",
    },
  },
  reviewsStyle: {
    paddingLeft: "5px",
    opacity: "0.6",
  },
});

export default function ProductCard(props) {
  const { id, image, title, description, price, rating } = props.product;
  const classes = useStyles();
  const Countreviews = reviews.length;

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ height: "550px" }}>
        <CardContent>
          <Link
            to={`/details/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="subtitle2">{title}</Typography>
          </Link>
        </CardContent>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Grid container>
            <Rating size="small" name="read-only" value={rating} />
            <Typography variant="subtitle2" className={classes.reviewsStyle}>
              ({Countreviews})
            </Typography>
          </Grid>
          {description.map((desc) => (
            <ul className={classes.listStyle}>
              <li>{desc}</li>
            </ul>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonStyle}>
        <Button fullWidth={true}>Rs{price}</Button>
        <Button startIcon={<ShoppingCartIcon />} fullWidth={true}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
