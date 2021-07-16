import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/Card";

let data = [
  {
    images: "/images/hotcategories/categories-1.jpg",
    title: "Wireless Headsets",
  },
  {
    images: "/images/hotcategories/categories-2.jpg",
    title: "Cases & Covers",
  },
  {
    images: "/images/hotcategories/categories-3.jpg",
    title: "Headsets & Accessories",
  },
  {
    images: "/images/hotcategories/categories-4.jpg",
    title: "Airpods Pro & Apple",
  },
  {
    images: "/images/hotcategories/categories-5.jpg",
    title: "Keyboard & Mice",
  },
  {
    images: "/images/hotcategories/categories-6.jpg",
    title: "Computer Cases",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(3, 0),
    alignItems: "center",
    padding: theme.spacing(1, 3),
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      padding: theme.spacing(1, 4),
    },
  },
  heading: {
    borderBottom: "2px solid #7bbd42",
    textAlign: "left",
    paddingBottom: ".5rem",
    marginBottom: ".5rem",
  },
  fontStyle: {
    borderBottom: "2px solid #7bbd42",
    textAlign: "left",
    paddingBottom: theme.spacing(1.5),
  },
  fontSize: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },
  bannerStyle: {
    widht: "20px",
    height: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    maxWidth: "150px",
    margin: "auto",
    height: "130px",
    width: "auto",
    padding: "4px",
    position: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "140px",
      height: "110px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100px",
      height: "92px",
    },
  },
}));

function HotCategories(props) {
  const { images, title } = props.product;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img src={images} className={classes.image} />
      <CardContent>
        <Typography component="h6" variant="h6" className={classes.fontSize}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function HotCategoriesLisiting() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h6" className={classes.heading}>
        Hot Categories
      </Typography>
      <Grid container clasName={classes.gr}>
        {data.map((product) => (
          <Grid item key={product} xs={6} md={4} lg={4}>
            <HotCategories product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
