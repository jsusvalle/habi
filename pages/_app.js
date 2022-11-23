import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "../redux/store";
import Layout from "components/templates/Layout/Layout";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { config } from "utils/configToast";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer {...config} />
    </Layout>
  </ThemeProvider>
);

export default Wrapper.withRedux(MyApp);
