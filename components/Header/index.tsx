import { useState } from "react";
import { HeaderModel } from "models/Header";
import { Button, Toolbar } from "@material-ui/core";
import { Head } from "../Head";
import { Menu } from "components/Menu";
import { AppBar, Typography } from "./style";
import Link from "next/link";

const initialTitle = "Event Lens";

export const Header = ({
  title = initialTitle,
  description = initialTitle,
}: HeaderModel) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Head title={title} description={description} />
      <AppBar position="static">
        <Toolbar>
          <Menu />
          <Typography variant="h5">{title}</Typography>
          <Button color="inherit">
            <Link href="/home">
              <a>{isAuth ? "Inicia Sesión" : "Registrate"}</a>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
