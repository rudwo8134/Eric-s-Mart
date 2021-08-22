import Head from 'next/head'
import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

const Layout = ({children}) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Candle market</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Candle Market</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        All rights reserved. Eric.Shin
      </footer>
    </div>
  )
}

export default Layout
