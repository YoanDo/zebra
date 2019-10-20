import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';
import Meta from '../components/Meta';

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
// variables
const theme = {
  black: '#2B2B2A',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  basicFS: '1.2rem',
  largeFS: '1.8rem',
  largerFS: '4.05rem',
  titleFS: '6.075rem',
  spaceTopBlock: '10vh',
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Brandon Grotesk';
    src: url('static/brandon_grotesk_blk.woff2') format('woff2');
    font-weight: black;
    font-style: normal;
  }

  @font-face {
    font-family: 'Brandon Grotesk';
    src: url('static/brandon_grotesk_bld.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  html{
    font-size: 62.5%;
    box-sizing: border-box;
    color: ${theme.black};
    @media (max-width:980px) {
      font-size: 30%;
    }
    opacity: 0;
    animation: ${appear} 2s ease-in-out;
    animation-delay: .4s;
    animation-fill-mode: forwards;
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    @import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap');
    padding:0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2;
    font-family: 'Space Mono', monospace;
    background-color: #F2F2F2;
     @media (max-width:980px) {
       font-size: 2.2rem !important;
     }
  }
  a{
    text-decoration: none;
    color: ${theme.black};
  }
  h1{
    font-size: ${theme.titleFS};
    font-family: 'Brandon Grotesk';
    text-transform: uppercase;
  }
  h2{
    font-size: ${theme.largerFS}
  }
  h3{
    font-size: ${theme.largeFS};
    font-family: 'Brandon Grotesk';
    font-weight: bold;
    text-transform: uppercase;
  }
`
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
        <GlobalStyle whiteColor />
      </ThemeProvider>
    );
  }
}
export default Page;
