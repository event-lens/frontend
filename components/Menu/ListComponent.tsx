import { MdMenu, MdPortrait } from "react-icons/md";
import { List } from "@material-ui/core";
import { ListItemComponent } from "./ListItemComponent";

const list = [
  { text: "inicio", href: "/", children: <MdMenu /> },
  { text: "Acerca de", href: "/about", children: <MdPortrait /> },
];

export default function ListComponent() {
  return (
    <List>
      {list.map((c) => (
        <ListItemComponent key={c.href} {...c}>
          {c.children}
        </ListItemComponent>
      ))}
    </List>
  );
}
