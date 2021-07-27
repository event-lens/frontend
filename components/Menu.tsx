import { useState } from "react";
import { Button, Drawer, IconButton } from "@material-ui/core";
import { MdMenu } from "react-icons/md";

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
        Hola
      </Drawer>
    </>
  );
};
