import { useContext } from "react";
import { FilterContext } from "../../helpers/filterProvider";
import MyBreadcrumbs from "../../component/breadcrumbs";
import MyPagination from "../../component/pagination";
import CategoryFilter from "./category-filter";
import ProductListing from "./product-listing";
import PriceFilter from "./price-filter";
import RatingFilter from "./rating-filter";
import ItemsFoundText from "./item-found-text";
import SortComponent from "./sort-component";
import TotalResult from "./total-result";
import AppliedFilter from "./applied-filter";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GridView from "./grid-view";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Collection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
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
    searchString,
  } = useContext(FilterContext);

  const products = getVisibleProducts(
    selectedCategories,
    selectedPriceRange,
    selectedRating,
    sortBy,
    searchString
  );

  return (
    <Box>
      <Container>
        <MyBreadcrumbs />
        <Grid container spacing={1}>
          <Grid
            item
            style={{ display: matches ? "none" : false }}
            sm={12}
            md={12}
            lg={2}
          >
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
                <Grid item>
                  <GridView />
                </Grid>
              </Grid>
              <Grid item>
                <TotalResult sortBy={sortBy} setSortBy={setSortBy} />
                <Grid item>
                  <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
                </Grid>
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
            <MyPagination />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
