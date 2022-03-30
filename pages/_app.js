import Layout from "../layout/layout";
import "bootstrap/dist/css/bootstrap.css";

//Css
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
