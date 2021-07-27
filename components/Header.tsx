import HeadNext from "next/head";
import { HeaderModel } from "models/Header";

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

  return (
    <>
      <Head title={title} description={description} />
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
};
