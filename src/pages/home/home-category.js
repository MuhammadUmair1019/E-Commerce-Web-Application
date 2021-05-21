import { products } from "../../data/featured-products";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Slider from "react-slick";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    width: "290px",
  },
  featuredStyling: {
    marginTop: theme.spacing(7),
  },
  reviewStyling: {
    paddingLeft: "5px",
    opacity: "0.6",
  },
  buttonStyle: {
    "& .MuiButton-root": {
      textTransform: "initial",
      color: "#7BBD42",
    },
  },
  bannerStyle: {
    widht: "20px",
    height: "20px",
  },
  root2: {
    marginTop: "40px",
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    alignContent: "center",
  },
  cover: {
    width: 140,
  },
}));

const FeaturedProducts = (props) => {
  const { id, image, title } = props.product;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Link
            to={`/details/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="subtitle2">{title}</Typography>
          </Link>
          <CardMedia image={image} />
          <img src={image} />
          <Typography variant="h6"> Rs25,839,00</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonStyle}>
        <Button startIcon={<FavoriteBorderIcon />} fullWidth={true}>
          Add to fav
        </Button>
        <Button startIcon={<ShoppingCartIcon />} fullWidth={true}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default function FeatureListing() {
  const classes = useStyles();

  return (
    <Container className={classes.featuredStyling}>
      <Typography
        variant="h5"
        style={{
          borderBottom: "2px solid #ddd",
          textAlign: "center",
          borderColor: "#7bbd42",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        Featured Products
      </Typography>
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid item key={product}>
            <FeaturedProducts product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

let images = [
  "/images/brands/brand-1.png",
  "/images/brands/brand-2.png",
  "/images/brands/brand-3.png",
  "/images/brands/brand-4.png",
  "/images/brands/brand-5.png",
  "/images/brands/brand-6.png",
  "/images/brands/brand-7.png",
  "/images/brands/brand-8.png",
  "/images/brands/brand-9.png",
  "/images/brands/brand-10.png",
  "/images/brands/brand-11.png",
  "/images/brands/brand-12.png",
];
const settings = {
  arrow: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 3000,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
};

export function TopBrand() {
  const classes = useStyles();

  return (
    <Container className={classes.featuredStyling}>
      <Typography
        variant="h5"
        style={{
          borderBottom: "2px solid #ddd",
          textAlign: "left",
          borderColor: "#7bbd42",
          paddingBottom: "10px",
        }}
      >
        Top Brands
      </Typography>
      <Slider {...settings}>
        {images.map((image) => (
          <Grid container>
            <Grid item style={{ margin: "40px 0px 40px 0px" }}>
              <img
                style={{
                  maxWidth: "150px",
                  maxHeight: "30px",
                  justifyItems: "center",
                }}
                src={image}
              />
            </Grid>
          </Grid>
        ))}
      </Slider>
    </Container>
  );
}

let data = [
  {
    images1: "/images/hotcategories/categories-1.jpg",
    title: "Wireless Headsets",
  },
  {
    images1: "/images/hotcategories/categories-2.jpg",
    title: "Cases & Covers",
  },
  {
    images1: "/images/hotcategories/categories-3.jpg",
    title: "Headsets & Accessories",
  },
  {
    images1: "/images/hotcategories/categories-4.jpg",
    title: "Airpods Pro & Apple",
  },
  {
    images1: "/images/hotcategories/categories-5.jpg",
    title: "Keyboard & Mice",
  },
  {
    images1: "/images/hotcategories/categories-6.jpg",
    title: "Computer Cases",
  },
];

function HotCategories(props) {
  const { images1, title } = props.product;
  const classes = useStyles();
  return (
    <div className={classes.root2}>
      <img className={classes.cover} src={images1} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {title}
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}

export function HotCategoriesLisiting() {
  const classes = useStyles();
  return (
    <Container className={classes.featuredStyling}>
      <Typography
        variant="h5"
        style={{
          borderBottom: "2px solid #ddd",
          textAlign: "left",
          borderColor: "#7bbd42",
          paddingBottom: "10px",
        }}
      >
        Hot Categories
      </Typography>
      <Grid container spacing={10}>
        {data.map((product) => (
          <Grid item key={product}>
            <HotCategories product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
