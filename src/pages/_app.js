import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Router from 'next/router';
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import GlobalContextProvider from "./../context/GlobalContext"




function MyApp(props) {
  const { Component, pageProps } = props;
  const Layout = Component.layout || (props => <DefaultLayout>{props.children}</DefaultLayout>);

  const [loading, setLoading] = useState(true);
const [user, setUser] = useState(null);
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(async () => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

     setLoading(false);

  }, []);



  return (
          <GlobalContextProvider user={user}>
                      <StyledThemeProvider theme={theme}>
                          <MuiThemeProvider theme={theme}>
                              <ApolloProvider client={apolloClient}>
                                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                                      <Head>
                                        <title>Proper Dashboard</title>
                                        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                                      </Head>
                                      <CssBaseline/>
                                      {!loading &&
                                          <Layout>
                                            <Component {...pageProps} />
                                          </Layout>
                                      }
                                  </LocalizationProvider>
                              </ApolloProvider>
                          </MuiThemeProvider>
                      </StyledThemeProvider>
          </GlobalContextProvider>
  );
}

export default MyApp;



MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};