import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    widht: "100%",
    margin: theme.spacing(4, 0),
    border: "0.1px solid #ddd",
    padding: theme.spacing(0.8, 2),
    background: "#FBFBFB",
    textDecoration: "none",
  },
}));

export default function MyBreadcrumbs() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Breadcrumbs>
        <Link color="inherit" href="/">
          <Typography variant="subtitle2">Home</Typography>
        </Link>
        <Link color="inherit" href="/collection" aria-current="page">
          <Typography variant="subtitle2">Collection</Typography>
        </Link>
      </Breadcrumbs>
    </Container>
  );
}
