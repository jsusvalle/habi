import React from 'react';
import PropTypes from "prop-types";
import { wrapper } from '../redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  
  return process.browser ? (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  ) : (
    <PersistGate persistor={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default wrapper.withRedux(MyApp);