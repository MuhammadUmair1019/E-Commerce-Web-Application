import { useState, useContext } from "react";
import { CartContext } from "../../helpers/cartProvider";
import { ButtonGroup, makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ProductCarousal from "./product-carousal";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  imageStyling: {
    marginLeft: "50px",
  },
  listStyling: {
    opacity: "0.8",
    fontSize: theme.spacing(2),
  },
  cardStyling: {
    padding: theme.spacing(0, 4),
    borderRadius: "40px",
    maxWidth: "100%",
    maxHeight: "400px",
    width: "300px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "initial",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginLeft: theme.spacing(2),
      fontSize: ".6rem",
    },
  },
  cardHeaderStyle: {
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(4),
    borderBottom: "1px solid gray",
    opacity: "0.6",
    textAlign: "center",
  },
  cardQuantity: {
    marginTop: theme.spacing(2),
  },
  btn: {
    margin: theme.spacing(2, 0),
    borderRadius: "40px",
    padding: "10px 22px",
    background: "#7BBD42",
    color: "#fff",
    textAlign: "center",
    textTransform: "initial",
    "&:hover": {
      background: "black",
    },
  },
  buttonStyle: {
    display: "block",
  },
  buttonGroupStyle: {
    marginLeft: theme.spacing(1),
  },
  iconStyle: {
    backgroundColor: "transparent",
    "& .MuiButtonBase-root": {
      backgroundColor: "transparent",
    },
    "& .MuiButton-label": {
      "&:hover": {
        backgroundColor: "transparent",

        background: "transparent",
      },
    },
  },
}));

export default function ProductsDetails(props) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  let { product } = props;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div style={{ paddingTop: "20px", paddingBottom: "40px" }}>
      <Container>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <ProductCarousal image={product.image} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <Typography variant="p">
              Components, Computers & Components, Desktop Memory, Memory (RAM)
            </Typography>
            <Typography variant="h6">{product.title}</Typography>
            <ul className={classes.listStyling}>
              {product.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.cardStyling}>
              <CardContent>
                <div className={classes.cardHeaderStyle}>
                  <Typography variant="subtitle2">
                    Availability :{" "}
                    {product.status ? " In stock" : "Out of stock"}
                  </Typography>
                </div>
                <Typography variant="h4">
                  Rs. {product.price * quantity}
                </Typography>
                <div className={classes.cardQuantity}>
                  <Typography variant="subtitle1">
                    Quantity :{" "}
                    <ButtonGroup className={classes.buttonGroupStyle}>
                      <Button
                        onClick={() => setQuantity(quantity - 1)}
                        disabled={quantity === 1}
                      >
                        -
                      </Button>
                      <Button>{quantity}</Button>
                      <Button
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={quantity === 0}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Typography>
                </div>
                <div className={classes.buttonStyle}>
                  <Button
                    startIcon={<AddShoppingCartIcon />}
                    className={classes.btn}
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </Button>
                  <Button
                    className={classes.iconStyle}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <FavoriteBorderIcon fontSize="small" />
                    Add to wishlist
                  </Button>
                  <Button
                    className={classes.iconStyle}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <FavoriteBorderIcon fontSize="small" />
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
