import Head from "next/head";

export function Seo(props) {
  const {
    title = "Manos maravillosas",
    description = "Asociacion de artesanas del ariari",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}
