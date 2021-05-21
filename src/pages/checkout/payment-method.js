import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "50px",
  },
  heading: {
    margin: theme.spacing(4),
    borderBottom: "2px solid #7BBD42 ",
    paddingBottom: theme.spacing(1),
  },
  paymentMethodStyle: {
    marginLeft: "20px",
  },
  buttonStyle: {
    marginLeft: "30%",
    "& .MuiButtonBase-root": {
      backgroundColor: "#7BBD42",
      borderRadius: "30px",
      padding: "10px 20px 10px 20px",
      margin: "5px",
    },
    "& .MuiButton-label": {
      backgroundColor: "#7BBD42",
      borderRadius: "30px",
      padding: "10px 20px 10px 20px",
    },
    "& .MuiButton-label:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));
const paymentMethods = [
  "Cash on Delivery",
  "Bank Transfer",
  "Easypaisa",
  "JazzCash",
];

export default function PaymentMethod() {
  const classes = useStyles();

  const [selectedPay, setSelectedPay] = useState();

  const handleSelectedPay = (event) => {
    setSelectedPay(event.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h5" component="h5" className={classes.heading}>
          Payment Method
        </Typography>
        <Grid className={classes.paymentMethodStyle}>
          <CardContent>
            <FormControl>
              <RadioGroup value={selectedPay} onChange={handleSelectedPay}>
                {paymentMethods.map((paymentMethod) => (
                  <FormControlLabel
                    value={paymentMethod}
                    control={<Radio />}
                    label={paymentMethod}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Grid>
        <Button className={classes.buttonStyle}>Place Your Order</Button>
      </div>
    </>
  );
}
