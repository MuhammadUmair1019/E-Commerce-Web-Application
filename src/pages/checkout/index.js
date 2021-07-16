import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { CartContext } from "../../helpers/cartProvider";
import { AuthContext } from "../../helpers/AuthProvider";
import CheckoutForm from "./checkout-form";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CartSummary from "./cart-summary";

const useStyle = makeStyles((theme) => ({
	root: {
		marginLef: "100px",
	},
	defaultMargin: {
		marginTop: "20px",
	},
	typography: {
		marginLeft: "30px",
		borderBottom: "2px solid #7BBD42",
		width: "80%",
		margin: theme.spacing(2),
		paddingBottom: theme.spacing(1),
		borderColor: "",
	},
}));

export default function Checkout() {
	const classes = useStyle();
	const { items, cartTotal } = useContext(CartContext);
	const { values, handleInputChange } = useContext(AuthContext);

	return (
		<Container>
			<Grid container>
				<Grid item lg={7} className={classes.defaultMargin}>
					<Typography
						variant="h5"
						component="h5"
						className={classes.typography}
					>
						Billing & Shipping
					</Typography>
					<CheckoutForm {...{ values, handleInputChange }} />
				</Grid>
				<Grid item lg={5}>
					<CartSummary items={items} total={cartTotal} />
				</Grid>
			</Grid>
		</Container>
	);
}
