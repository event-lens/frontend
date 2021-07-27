import HeadNext from "next/head";
import { HeaderModel } from "models/Header";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const initialTitle = "Event Lens";

export const Head = ({ title, description }: HeaderModel) => (
  <HeadNext>
    <title>{`${title} - Event Lens`}</title>
    <meta name="description" content={`${description}`} />
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    <link rel="icon" href="/favicon.ico" />
  </HeadNext>
);

export const Header = ({ title, description }: HeaderModel) => {
  !title ? (title = initialTitle) : null;
  !description ? (description = initialTitle) : null;
  const isAuthenticated = false;

  const classes = useStyles();

  return (
    <>
      <Head title={title} description={description} />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MdMenu />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit">
            {isAuthenticated ? "Inicia Sesión" : "Registrate"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
