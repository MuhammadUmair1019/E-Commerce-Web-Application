import Grid from "@material-ui/core/Grid";
import ProductCard from "./product-card";

export default function ProductListing(props) {
  const { products } = props;

  return (
    <>
      <hr />
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
