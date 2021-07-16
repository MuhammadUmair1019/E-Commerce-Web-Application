import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListIcon from "@material-ui/icons/List";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    border: "0.1px solid #dddd",
    padding: theme.spacing(0.1),
    marginTop: theme.spacing(2.9),
    marginRight: theme.spacing(1),
    fontSize: theme.spacing(4.5),
    color: "#3D4039",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1.4),
      marginLeft: theme.spacing(1),
    },
  },
}));

export default function GridView() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box>
      {matches ? false : <ViewColumnIcon className={classes.iconStyle} />}
      {matches ? false : <ListIcon className={classes.iconStyle} />}
      {matches ? <FilterListIcon className={classes.iconStyle} /> : false}
    </Box>
  );
}
