import { ReactComponentElement } from "react";
import Link from "next/link";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

type ListItemModel = {
  children: ReactComponentElement<any>;
  text: string;
  href: string;
};

export const ListItemComponent = ({ children, text, href }: ListItemModel) => {
  return (
    <Link href={href} passHref>
      <ListItem button component="a">
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    </Link>
  );
};
