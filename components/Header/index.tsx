import { HeaderModel } from "models/Header";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Head } from "../Head";
import { Menu } from "components/Menu";
import { useStyles } from "./style";
import Link from "next/link";

const initialTitle = "Event Lens";

export const Header = ({ title, description }: HeaderModel) => {
  !title ? (title = initialTitle) : null;
  !description ? (description = initialTitle) : null;
  const isAuthenticated = false;

  const classes = useStyles();

  return (
    <>
      <Head title={title} description={description} />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Menu />
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit">
            <Link href="/home">
              <a>{isAuthenticated ? "Inicia Sesión" : "Registrate"}</a>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
