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
    maxWidth: "100%",
    width: "100%",
    maxWidth: "100%",
    height: "330px",
    marginTop: "2px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
      height: "150px",
    },
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
        <img className={classes.bannerStyle} src={image} alt="Banner Images" />
      ))}
    </Slider>
  );
}
