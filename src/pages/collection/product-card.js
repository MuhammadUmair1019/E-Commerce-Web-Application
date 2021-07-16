import React from "react";
import { reviews } from "../../data/reviews";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    width: "100%",
    boxShadow: "none",
    height: "380px",
    "& .MuiTypography-root": {
      fontSize: ".8rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      "& .MuiTypography-root": {
        fontSize: ".8rem",
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "280px",
      "& .MuiTypography-root": {
        fontSize: ".7rem",
      },
    },
  },
  media: {
    maxWidth: "100%",
    height: "auto",
    maxWidth: "200px",
    margin: "auto",
    height: "200px",
    width: "auto",
    padding: "4px",
    position: "center",
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "180px",
      height: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "120px",
      height: "120px",
    },
  },
  reviewsStyle: {
    paddingLeft: "5px",
    opacity: "0.6",
  },
  actionArea: {
    padding: theme.spacing(2, 0),
  },
  shoppigCartIcon: {
    color: "white",
    background: "#7BBD42",
    padding: ".5rem",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: ".5rem",
    marginTop: "-.5rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export const ProductCard = (props) => {
  const { id, image, title, price, rating } = props.product;
  const classes = useStyles();
  const Countreviews = reviews.length;

  return (
    <Card className={classes.root}>
      <CardActionArea disableRipple>
        <CardContent>
          <Link
            to={`/details/${id}`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            <Typography variant="subtitle2">{title}</Typography>
            <CardMedia image={image} className={classes.media} />
            <Grid container>
              <Rating size="small" name="read-only" value={rating} />
              <Typography variant="subtitle2" className={classes.reviewsStyle}>
                ({Countreviews})
              </Typography>
            </Grid>
          </Link>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.actionArea}
          >
            <Typography variant="body1"> Rs. {price}</Typography>
            <IconButton className={classes.shoppigCartIcon}>
              <AddShoppingCartIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
