import { useContext } from "react";
import { FilterContext } from "../../helpers/filterProvider";
import CategoryFilter from "./category-filter";
import ProductListing from "./product-listing";
import PriceFilter from "./price-filter";
import RatingFilter from "./rating-filter";
import ItemsFoundText from "./item-found-text";
import SortComponent from "./sort-component";
import AppliedFilter from "./applied-filter";
import Grid from "@material-ui/core/Grid";

export default function Collection() {
  const {
    getVisibleProducts,
    selectedCategories,
    onChangeCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    onChangePrice,
    selectedRating,
    setSelectedRating,
    sortBy,
    setSortBy,
    onClearAllHandler,
  } = useContext(FilterContext);
  const products = getVisibleProducts(
    selectedCategories,
    selectedPriceRange,
    selectedRating,
    sortBy
  );

  return (
    <Grid container spacing={1}>
      <Grid item lg={2}>
        <CategoryFilter
          selectedCategories={selectedCategories}
          onChangeCategory={onChangeCategory}
        />
        <PriceFilter
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          onChangePrice={onChangePrice}
        />
        <RatingFilter
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </Grid>
      <Grid item lg={10}>
        <Grid container justify="space-between">
          <Grid item>
            <ItemsFoundText
              total={products.length}
              searchString="Search String"
            />
          </Grid>
          <Grid item>
            <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
          </Grid>
        </Grid>
        <AppliedFilter
          selectedCategories={selectedCategories}
          onChangeCategory={onChangeCategory}
          selectedPriceRange={selectedPriceRange}
          onChangePrice={onChangePrice}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          onClearAll={onClearAllHandler}
        />
        <ProductListing products={products} />
      </Grid>
    </Grid>
  );
}
