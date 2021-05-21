import {
  TableRow,
  TableCell,
  makeStyles,
  ButtonGroup,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    maxWidth: "100%",
    height: "auto",
    maxWidth: "100px",
    margin: "auto",
    height: "92px",
    width: "auto",
    border: "1px solid #ddd",
    padding: "4px",
  },
  quantityStyle: {
    "& .MuiButtonBase-root": {
      border: "1px solid #ddd",
      borderRadius: "5px",
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

  return items.map((item, i) => (
    <TableRow>
      <TableCell id={item.id}> {i + 1}</TableCell>
      <TableCell>
        <img src={item.image} className={classes.imageStyle} />
      </TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>
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
      <TableCell>{item.cartQuantity * item.price}</TableCell>
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
