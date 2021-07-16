import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

let images = [
  "/images/brands/brand-1.png",
  "/images/brands/brand-2.png",
  "/images/brands/brand-3.png",
  "/images/brands/brand-4.png",
  "/images/brands/brand-5.png",
  "/images/brands/brand-6.png",
  "/images/brands/brand-7.png",
  "/images/brands/brand-8.png",
  "/images/brands/brand-9.png",
  "/images/brands/brand-10.png",
  "/images/brands/brand-11.png",
  "/images/brands/brand-12.png",
];
const settings = {
  arrow: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 3000,
  className: "center",
  centerMode: true,
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  heading: {
    borderBottom: "2px solid #7bbd42",
    textAlign: "left",
    paddingBottom: ".5rem",
    marginBottom: ".5rem",
  },
  imageStyle: {
    maxWidth: "135px",
    width: "100%",
    maxHeight: "100px",
    verticalAlign: "center",
  },
}));

export function TopBrand() {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.root}>
        <Typography variant="h6" className={classes.heading}>
          Top Brands
        </Typography>
        <Slider {...settings}>
          {images.map((image) => (
            <Grid container>
              <Grid item style={{ margin: "40px 0px 40px 0px" }}>
                <img className={classes.imageStyle} src={image} />
              </Grid>
            </Grid>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
