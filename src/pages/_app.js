import '../styles/globals.css'

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import DefaultLayout from "../components/layouts/DefaultLayout";


function MyApp(props) {
  const { Component, pageProps } = props;
  const Layout = Component.layout || (props => <DefaultLayout>{props.children}</DefaultLayout>);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const apolloClient = useApollo(pageProps.initialApolloState);


  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Reelfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;



MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};