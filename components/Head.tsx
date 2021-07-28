import HeadNext from "next/head";
import { HeaderModel } from "models/Header";
import theme from "theme";

export const Head = ({ title, description }: HeaderModel) => (
  <HeadNext>
    <title>{`${title} - Event Lens`}</title>
    <meta name="description" content={`${description}`} />
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="theme-color" content={theme.colors.primaryVariant}></meta>
    <link rel="icon" href="/favicon.ico" />
  </HeadNext>
);
