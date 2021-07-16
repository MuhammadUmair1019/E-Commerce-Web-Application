import { useHistory, useParams } from "react-router-dom";
import ProductsDetails from "./products-details";
import { getProductsId } from "../../data/products";

export default function Details() {
	const { id } = useParams();
	let history = useHistory();

	const product = getProductsId(id);

	if (!product) {
		history.push("/not-found");
		return null;
	}

	return <ProductsDetails product={product} />;
}
