import React, { Fragment } from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Articles from '../components/Articles'
// import Link from 'next/link'


const Home = () => (
  <Fragment>
    <Header />
    <Introduction />
    <Articles />
  </Fragment>
)

export default Home
