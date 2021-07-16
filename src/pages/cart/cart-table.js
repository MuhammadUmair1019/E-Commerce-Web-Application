import {
  Container,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CartRow from "./cart-row";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(0.5),
    borderBottom: "2px solid #7BBD42",
  },
  checkoutButton: {
    marginTop: theme.spacing(4),
    "& .MuiButtonBase-root": {
      backgroundColor: "#7BBD42",
      borderRadius: "30px",
      padding: "10px 20px 10px 20px",
      margin: "5px",
      color: "white",
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default function CartTable(props) {
  const classes = useStyles();
  const { cartTotal } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h6"> Shopping Cart</Typography>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ display: matches ? "none" : false }}>
                #{" "}
              </TableCell>
              <TableCell style={{ display: matches ? "none" : false }}>
                Image
              </TableCell>
              <TableCell>Product</TableCell>
              <TableCell style={{ display: matches ? "none" : false }}>
                Price
              </TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell style={{ display: matches ? "none" : false }}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <CartRow {...props} />
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ display: matches ? "none" : false }}
              ></TableCell>
              <TableCell
                style={{ display: matches ? "none" : false }}
              ></TableCell>
              <TableCell>Garand Total</TableCell>
              <TableCell></TableCell>
              <TableCell
                style={{ display: matches ? "none" : false }}
              ></TableCell>
              <TableCell> Rs. {cartTotal}</TableCell>
              <TableCell
                style={{ display: matches ? "none" : false }}
              ></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Grid
        container
        justify="space-between"
        className={classes.checkoutButton}
        style={{ justifyContent: matches ? "center" : "space-between" }}
      >
        <Grid item>
          <Link to="/collection" style={{ textDecoration: "none" }}>
            <Button variant="button">Continue shopping</Button>
          </Link>
        </Grid>
        <Grid item>
          <Button variant="button">Grand Total : {cartTotal}</Button>
        </Grid>
        <Grid item>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <Button variant="button">Proceed to checkout &#8594;</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
