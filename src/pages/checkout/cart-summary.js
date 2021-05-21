import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import PaymentMethod from "./payment-method";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "auto",
    background: "#f4f4f4",
    marginLeft: "-60px",
    borderRadius: "10px",
    marginTop: "30px",
  },
  heading: {
    margin: theme.spacing(4),
    borderBottom: "2px solid #7BBD42 ",
    paddingBottom: theme.spacing(1),
  },
  tableStyle: {
    padding: "0px 10px 0px 20px",
  },
}));

export default function CartSummary(props) {
  const classes = useStyles();
  const { items, total } = props;

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item lg={12}>
            <Typography variant="h5" component="h5" className={classes.heading}>
              Your order
            </Typography>
          </Grid>
          <TableContainer className={classes.tableStyle}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      {item.cartQuantity} x Rs{item.price}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell variant="head">Subtotal</TableCell>
                  <TableCell>{total}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Grand Total</TableCell>
                  <TableCell>{total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid item lg={12}>
            <PaymentMethod />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
