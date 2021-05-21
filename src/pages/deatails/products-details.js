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

const useStyles = makeStyles((theme) => ({
  imageStyling: {
    marginLeft: "50px",
  },
  listStyling: {
    listStyleType: "disclosureClosed",
    opacity: "0.6",
  },
  cardStyling: {
    padding: "0px 24px",
    borderRadius: "40px",
    height: "400px",
  },
  cardHeaderStyle: {
    paddingBottom: "10px",
    marginBottom: "30px",
    borderBottom: "1px solid gray",
    opacity: "0.6",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#7BBD42",
    borderRadius: "40px",
    padding: "10px 22px",
    color: "#fff",
    textAlign: "center",
    margin: "20px 30px",
    textTransform: "initial",
    "& .MuiButtonBase-root": {},
  },
  buttonGroupStyle: {
    marginLeft: "10px",
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
        <Grid container>
          <Grid item lg={5}>
            <img
              src={product.image}
              className={classes.imageStyling}
              width=" 400px"
            />
          </Grid>
          <Grid item lg={4}>
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
          <Grid item lg={3}>
            <Card className={classes.cardStyling}>
              <CardContent>
                <div className={classes.cardHeaderStyle}>
                  <Typography variant="subtitle2">
                    Availability :{" "}
                    {product.status ? " In stock" : "Out of stock"}
                  </Typography>
                </div>
                <Typography variant="h4">
                  Rs{product.price * quantity}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ opacity: "0.8", margin: "20px 0px" }}
                >
                  Quantity :
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
                <Button
                  startIcon={<AddShoppingCartIcon />}
                  className={classes.buttonStyle}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
                <Button
                  variant="p"
                  style={{
                    fontSize: "12px",
                    marginLeft: "30px",
                    textTransform: "initial",
                    opacity: "0.6",
                  }}
                >
                  <FavoriteBorderIcon
                    fontSize="small"
                    style={{ paddingRight: "8px" }}
                  />
                  Add to wishlist
                </Button>
                <Button
                  variant="p"
                  style={{
                    fontSize: "12px",
                    marginLeft: "50px",
                    textTransform: "initial",
                    opacity: "0.6",
                  }}
                >
                  <FavoriteBorderIcon
                    fontSize="small"
                    style={{ paddingRight: "8px" }}
                  />
                  Compare
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
