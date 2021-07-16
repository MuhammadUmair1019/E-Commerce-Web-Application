import { makeStyles } from "@material-ui/core";
import Magnifier from "react-magnifier";
import Slider from "react-slick";
import "./customPaging.css";

const myImages = [
  "/images/products/image-1.png",
  "/images/products/image-2.png",
  "/images/products/image-3.png",
  "/images/products/image-4.png",
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
  media: {
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      border: "1px solid #dddd",
      transform: "scale(1.1, 1.1)",
    },
  },
  // smallImages: {
  //   maxWidth: "100%",
  //   height: "auto",
  //   maxWidth: "100px",
  //   margin: "auto",
  //   height: "92px",
  //   width: "auto",
  //   border: "1px solid #ddd",
  //   padding: "4px",
  // },
}));

export default function ProductCarousal(props) {
  const classes = useStyles();

  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
  };

  return (
    <Slider {...settings}>
      <div className={classes.root}>
        <Magnifier src={props.image} className={classes.media} />
      </div>
    </Slider>
  );
}
