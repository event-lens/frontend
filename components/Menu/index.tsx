import { useState } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import ListComponent from "./ListComponent";

export const Menu = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const toggleDrawer = () => {
    setIsDrawing(() => !isDrawing);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => toggleDrawer()}
      >
        <MdMenu />
      </IconButton>
      <Drawer anchor="left" open={isDrawing} onClose={() => toggleDrawer()}>
        <ListComponent />
      </Drawer>
    </>
  );
};
