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
  color: "#ddd",
  "&.Mui-selected": {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});
