import Banner from "../../component/banner";
import FeatureListing, {
  HotCategoriesLisiting,
  TopBrand,
} from "./home-category";

export default function Home() {
  return (
    <>
      <Banner />
      <FeatureListing />
      <TopBrand />
      <HotCategoriesLisiting />
    </>
  );
}
