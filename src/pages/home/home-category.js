import { products } from "../../data/featured-products";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    width: "100%",
    boxShadow: "none",
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      height: "290px",
      "& .MuiTypography-root": {
        fontSize: ".8rem",
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "250px",
      "& .MuiTypography-root": {
        fontSize: ".7rem",
      },
    },
  },
  featuredStyling: {
    marginTop: theme.spacing(3),
  },
  reviewStyling: {
    paddingLeft: "5px",
    opacity: "0.6",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    maxWidth: "200px",
    margin: "auto",
    height: "200px",
    width: "auto",
    padding: "4px",
    position: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: "auto",
      maxWidth: "180px",
      margin: "auto",
      height: "150px",
      width: "auto",
      padding: "4px",
      position: "center",
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      height: "auto",
      maxWidth: "120px",
      margin: "auto",
      height: "120px",
      width: "auto",
      padding: "4px",
      position: "center",
      marginTop: theme.spacing(2),
    },
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
  actionArea: {
    padding: theme.spacing(2, 0),
  },
  heading: {
    borderBottom: "2px solid #7bbd42",
    textAlign: "left",
    paddingBottom: ".5rem",
    marginBottom: ".5rem",
  },
  // responsive classes
}));

const FeaturedProducts = (props) => {
  const { id, image, title } = props.product;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea disableRipple>
        <CardContent>
          <Link
            to={`/details/${id}`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            <Typography variant="subtitle2">{title}</Typography>
          </Link>
          <CardMedia image={image} className={classes.image} />
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.actionArea}
          >
            <Typography variant="body1"> Rs. 25,839,00</Typography>
            <IconButton className={classes.shoppigCartIcon}>
              <AddShoppingCartIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function FeatureListing() {
  const classes = useStyles();

  return (
    <Container className={classes.featuredStyling}>
      <Typography variant="h6" className={classes.heading}>
        Featured Products
      </Typography>
      <Grid container spacing={1} style={{ width: "100%" }}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={product}>
            <FeaturedProducts product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
