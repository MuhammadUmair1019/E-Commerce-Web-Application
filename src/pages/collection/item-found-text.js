import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function ItemsFoundText(props) {
  const { total, searchString } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {matches ? (
        false
      ) : (
        <Typography variant="subtitle2">
          Showing 1- {total}
          {searchString && ` for "${searchString}"`}
        </Typography>
      )}
    </>
  );
}
