import HeadNext from "next/head";
import { HeaderModel } from "models/Header";

const initialTitle = "Event Lens";

export const Head = ({ title, description }: HeaderModel) => (
  <HeadNext>
    <title>{`${title} - Event Lens`}</title>
    <meta name="description" content={`${description}`} />
    <link rel="icon" href="/favicon.ico" />
  </HeadNext>
);

export const Header = ({ title, description }: HeaderModel) => {
  !title ? (title = initialTitle) : null;
  !description ? (description = initialTitle) : null;

  return (
    <>
      <Head title={title} description={description} />
      <header>
        <h1>{description}</h1>
      </header>
    </>
  );
};
