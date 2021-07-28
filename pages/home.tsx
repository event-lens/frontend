import Link from "next/link";
const Home = () => {
  return (
    <>
      <p>Esto es una simulación</p>
      <Link href="/">
        <a>/</a>
      </Link>
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  return { props: { title: "Home" } };
};
