import { Header } from "components/Header";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <Header title="Home" />
      <p>Esto es una simulación</p>
      <Link href="/">
        <a>/</a>
      </Link>
    </>
  );
};

export default Home;
