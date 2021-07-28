import { ChangeEvent, useState } from "react";
import { MdHome, MdPerson, MdSettings } from "react-icons/md";
import { useRouter } from "next/router";
import { Nav, NavButton } from "./style";

const Footer = () => {
  const [value, setValue] = useState("/");
  const router = useRouter();

  // event: ChangeEvent<{}>
  const handleChange = (_: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };
  return (
    <Nav showLabels value={value} onChange={handleChange}>
      <NavButton label="Inicio" value="/" icon={<MdHome />} />
      <NavButton label="Perfil" value="/profile" icon={<MdPerson />} />
      <NavButton
        label="Configuracion"
        value="/settings"
        icon={<MdSettings />}
      />
    </Nav>
  );
};

export default Footer;
