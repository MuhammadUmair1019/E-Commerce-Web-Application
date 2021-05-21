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
import CartRow from "./cart-row";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  checkoutButton: {
    marginTop: theme.spacing(4),
    "& .MuiButtonBase-root": {
      backgroundColor: "#7BBD42",
      borderRadius: "30px",
      padding: "10px 20px 10px 20px",
      margin: "5px",
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default function CartTable(props) {
  const classes = useStyles();
  const { total } = props;

  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <CartRow {...props} />
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        container
        justify="space-between"
        className={classes.checkoutButton}
      >
        <Grid item>
          <Link to="/collection" style={{ textDecoration: "none" }}>
            <Button variant="button">Continue shopping</Button>
          </Link>
        </Grid>
        <Grid item>
          <Button variant="button">
            <Typography variant="subtitle1"> Grand Total : {total} </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <Button variant="button">Proceed to checkout</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
