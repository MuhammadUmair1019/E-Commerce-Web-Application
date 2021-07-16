import {
  TableRow,
  TableCell,
  makeStyles,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    maxWidth: "100px",
    height: "auto",
    margin: "auto",
    height: "92px",
    border: "1px solid #ddd",
    padding: "4px",
  },
  quantityStyle: {
    "& .MuiButtonBase-root": {
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
  },
  removeIconStyling: {
    backgroundColor: "#0000",
    "& .MuiButton-startIcon:hover": {
      color: "red",
    },
    "&:hover": {
      background: "none",
    },
  },
}));

export default function CartRow(props) {
  const classes = useStyles();
  const { items, updateQuantity, removeFromCart } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return items.map((item, i) => (
    <TableRow>
      <TableCell style={{ display: matches ? "none" : false }} id={item.id}>
        {" "}
        {i + 1}
      </TableCell>
      <TableCell style={{ display: matches ? "none" : false }}>
        <img
          src={item.image}
          alt="Product image"
          className={classes.imageStyle}
        />
      </TableCell>
      <TableCell>
        <Typography variant="subtitle2">{item.title}</Typography>
      </TableCell>
      <TableCell style={{ display: matches ? "none" : false }}>
        {item.cartQuantity} x Rs {item.price}
      </TableCell>
      <TableCell>
        <ButtonGroup className={classes.quantityStyle}>
          <Button
            disabled={item.cartQuantity === 0}
            onClick={() => updateQuantity(item, -1)}
          >
            -
          </Button>
          <Button>{item.cartQuantity}</Button>
          <Button
            disabled={item.cartQuantity === 5}
            onClick={() => updateQuantity(item, +1)}
          >
            +
          </Button>
        </ButtonGroup>
      </TableCell>
      <TableCell> Rs. {item.cartQuantity * item.price}</TableCell>
      <TableCell>
        <Button
          startIcon={<DeleteIcon />}
          disableRipple="true"
          className={classes.removeIconStyling}
          onClick={() => removeFromCart(item)}
        ></Button>
      </TableCell>
    </TableRow>
  ));
}
