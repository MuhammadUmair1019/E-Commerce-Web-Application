import React, { useState, createContext } from "react";
import { products as DBProducts, products } from "../data/products";
import { priceRange } from "../data/products";
import Fuse from "fuse.js";


export const FilterContext = createContext();

export default function FilterProvider(props) {
  //state declare
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: "",
    max: "",
    isApplied: false,
  });
  const [selectedRating, setSelectedRating] = useState();
  const [sortBy, setSortBy] = useState();
  const [searchString, setSearchString] = useState("");

  //chnange categpry
  const onChangeCategory = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
  };



  //change price
  const onChangePrice = (newPriceRange) => {
    if (newPriceRange === "clear") {
      return setSelectedPriceRange({
        min: "",
        max: "",
        isApplied: false,
      });
    }

    if (
      newPriceRange[0] === priceRange.min &&
      newPriceRange[1] === priceRange.max
    )
      setSelectedPriceRange({
        min: newPriceRange[0],
        max: newPriceRange[1],
        isApplied: false,
      });
    else
      setSelectedPriceRange({
        min: newPriceRange[0],
        max: newPriceRange[1],
        isApplied: true,
      });
  };
  //Claer all
  const onClearAllHandler = () => {
    setSelectedCategories([]);
    setSelectedPriceRange({
      min: "",
      max: "",
      isApplied: false,
    });
    setSelectedRating("");
  };

  //   Filter data
  const getFilterData = (
    data,
    selectedCategories,
    selectedPriceRange,
    selectedRating,
  ) => {
    return data.filter((product) => {
      // Filter Category
      let categoryMatch = true;
      if (selectedCategories.length && product.category)
        categoryMatch = selectedCategories.includes(product.category);

      //Price Filter
      let priceMatch = true;
      const { min, max, isApplied } = selectedPriceRange;
      if (isApplied && product.price)
        priceMatch = product.price >= min && product.price <= max;

      //Rating Filter
      let ratingMatch = true;
      if (selectedRating && product.rating)
        ratingMatch = Number(product.rating) >= Number(selectedRating);
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

  const onChangeSearch = (event) => {
    setSearchString(event.target.value);
  }

  const getSearchData = (data, searchString) => {
    const fuse = new Fuse(data, {
      threshold: 0.6,
      minMatchCharLength: 2,
      keys: ["title", "category", "description"],
    });
    const results = fuse.search(searchString); 
    const finalResult = results.map(result => result.item);
    return finalResult;
  };


  const getVisibleProducts = (
    selectedCategories,
    selectedPriceRange,
    selectedRating,
    sortBy,
    searchString,
  ) => {
    let products = DBProducts;

    if(searchString) products = getSearchData(products, searchString)

    products = getFilterData(
      products,
      selectedCategories,
      selectedPriceRange,
      selectedRating,
    );
    products = getSortData(products, sortBy);
    return products;
  };

  return (
    <FilterContext.Provider
      value={{
        ...props,
        selectedCategories,
        setSelectedCategories,
        selectedPriceRange,
        selectedRating,
        searchString,
        sortBy,
        setSortBy,
        setSelectedRating,
        onChangeCategory,
        onChangePrice,
        onChangeSearch,
        onClearAllHandler,
        getVisibleProducts,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
