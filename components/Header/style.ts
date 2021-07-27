import { makeStyles } from "@material-ui/styles";
import theme from "theme";

export const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: theme.colors.primary,
  },
  title: {
    flexGrow: 1,
  },
}));
