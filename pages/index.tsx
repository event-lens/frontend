export default function Home() {
  return <>Hola</>;
}

export const getServerSideProps = async () => {
  return { props: { title: "Inicio" } };
};
