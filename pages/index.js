import React, { Fragment } from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Articles from '../components/Articles'
import Artists from '../components/Artists'
import Footer from '../components/Footer'


const Home = () => (
  <Fragment>
    <Header />
    <Introduction />
    <Articles />
    <Artists />
    <Footer />
  </Fragment>
)

export default Home
