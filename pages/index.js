import Head from "next/head";
import GlobalStyle from "./styles/globalstyled";

export default function Home() {
  return (
    <>
      <Head>
        <title>SoundLine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon1.ico" type="image/x-icon" />
        <link rel="manifest" href="manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Dosis:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
    </>
  );
}
