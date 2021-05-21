import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";
import "./banner.css";

let images = [
  "/images/brands/professional-banner-2.jpg",
  "/images/brands/professional-banner-3.jpg",
  "/images/brands/professional-banner-4.jpg",
  "/images/brands/professional-banner-5.jpg",
  "/images/brands/professional-banner-6.jpg",
  "/images/brands/professional-banner-1.jpg",
  "/images/brands/professional-banner-7.jpg",
  "/images/brands/professional-banner-8.jpg",
  "/images/brands/professional-banner-9.jpg",
  "/images/brands/professional-banner-10.jpg",
  "/images/brands/professional-banner-11.jpg",
  "/images/brands/professional-banner-12.jpg",
];

const useStyles = makeStyles((theme) => ({
  bannerStyle: {
    width: "100%",
    height: "400px",
    marginTop: "2px",
  },
}));

const settings = {
  arrow: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 3000,
  className: "slides",
};

export default function Banner() {
  const classes = useStyles();
  return (
    <Slider {...settings} style={{ marginTop: "-30px" }}>
      {images.map((image) => (
        <img className={classes.bannerStyle} src={image} />
      ))}
    </Slider>
  );
}
