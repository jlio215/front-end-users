import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  // Usa el layout definido en la página, o usa el FullLayout por defecto
  const getLayout = Component.getLayout || ((page) => <FullLayout>{page}</FullLayout>);

  return getLayout(
    <>
      <Head>
        <title>Parqueadero IU Digital</title>
        <meta name="description" content="Monster Free Next Js Dashboard Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {<Component {...pageProps} />}
    </>
  );
}

export default MyApp;
