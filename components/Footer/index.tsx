import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { MdRecentActors, MdFavorite } from "react-icons/md";

const Footer = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<MdFavorite />}
      />
      <BottomNavigationAction label="Favorites" value="favorites" />
      <BottomNavigationAction label="Nearby" value="nearby" />
      <BottomNavigationAction label="Folder" value="folder" />
    </BottomNavigation>
  );
};

export default Footer;
