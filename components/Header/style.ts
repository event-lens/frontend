import { styled } from "@material-ui/styles";
import {
  AppBar as AppBarMaterial,
  Typography as TypographyMaterial,
} from "@material-ui/core";
import theme from "theme";

export const AppBar = styled(AppBarMaterial)({
  backgroundColor: theme.colors.primary,
});

export const Typography = styled(TypographyMaterial)({
  flexGrow: 1,
});
