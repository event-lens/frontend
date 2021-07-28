import { Header } from "components/Header";

export default function Home({ title }: any) {
  return (
    <>
      <Header title={title} />
    </>
  );
}

export const getServerSideProps = async () => {
  return { props: { title: "Inicio" } };
};
