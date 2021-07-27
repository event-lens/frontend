import HeadNext from "next/head";
import { HeaderModel } from "models/Header";

export const Head = ({ title, description }: HeaderModel) => (
  <HeadNext>
    <title>{`${title} - Event Lens`}</title>
    <meta name="description" content={`${description}`} />
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    <link rel="icon" href="/favicon.ico" />
  </HeadNext>
);
