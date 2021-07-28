import { styled } from "@material-ui/styles";
import { BottomNavigation } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";
import theme from "theme";

export const Nav = styled(BottomNavigation)({
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.colors.primary,
  color: "#fff",
});

export const NavButton = styled(BottomNavigationAction)({
  color: theme.colors.primaryVariant,
  "&.Mui-selected": {
    color: "#fff",
  },
});
