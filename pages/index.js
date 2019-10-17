import React, { Fragment } from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Articles from '../components/Articles'
import Artists from '../components/Artists'
// import Link from 'next/link'


const Home = () => (
  <Fragment>
    <Header />
    <Introduction />
    <Articles />
    <Artists />
  </Fragment>
)

export default Home
