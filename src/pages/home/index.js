import { Box } from "@material-ui/core";
import Banner from "../../component/banner";
import FeatureListing from "./home-category";
import { TopBrand } from "./top-brands";
import { HotCategoriesLisiting } from "./hot-category";

export default function Home() {
  return (
    <Box>
      <Banner />
      <FeatureListing />
      <TopBrand />
      <HotCategoriesLisiting />
    </Box>
  );
}
