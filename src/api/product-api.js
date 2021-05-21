import { products as DBProducts } from "../data/products";
import Fuse from "fuse.js";

const getSearchData = (data, searchString) => {
  const fuse = new Fuse(data, {
    threshold: 0.6,
    minMatchCharLength: 2,
    keys: ["title", "category", "description"],
  });
  return fuse.search(searchString);
};

const getFilterData = (
  data,
  selectedCategories,
  selectedPriceRange,
  selectedRating
) => {
  return data.filter((product) => {
    // Filter Category
    let categoryMatch = true;
    if (selectedCategories.length && product.category)
      categoryMatch = selectedCategories.includes(product.category);

    let priceMatch = true;
    const { min, max, isApplied } = selectedPriceRange;
    if (isApplied && product.price)
      priceMatch = product.price >= min && product.price <= max;

    //Rating Filter
    let ratingMatch = true;
    if (selectedRating && product.rating)
      ratingMatch = Number(product.rating) >= Number(selectedRating);
    //sorting Filter

    return categoryMatch && priceMatch && ratingMatch;
  });
};

const getSortData = (data, sortBy) => {
  return data.sort((product1, product2) => {
    if (sortBy === "PriceHighToLow") {
      return product1.price > product2.price ? -1 : 1;
    } else if (sortBy === "PriceLowToHigh") {
      return product1.price < product2.price ? -1 : 1;
    } else if (sortBy === "RatingLowToHigh") {
      return product1.rating < product2.rating ? -1 : 1;
    } else {
      return product1.rating > product2.rating ? -1 : 1;
    }
  });
};

export const getVisibleProducts = (
  selectedCategories,
  selectedPriceRange,
  selectedRating,
  sortBy,
  searchString
) => {
  let products = DBProducts;

  if (searchString) products = getSearchData(products, searchString);

  products = getFilterData(
    products,
    selectedCategories,
    selectedPriceRange,
    selectedRating
  );
  products = getSortData(products, sortBy);
  return products;
};
