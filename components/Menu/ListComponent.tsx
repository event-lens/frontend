import { ReactComponentElement } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

export default function ListComponent() {
  return (
    <List>
      <ListItemComponent text="Inicio" href="/">
        <MdMenu />
      </ListItemComponent>
    </List>
  );
}

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
