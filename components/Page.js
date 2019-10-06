import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import Header from '../components/Header';
import Meta from '../components/Meta';


// variables
const theme = {
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  basicText: '1.4rem',
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
  html{
    font-size: 62.5%;
    box-sizing: border-box;
    color: ${theme.black};
    height: 1200vh; //todo
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
  }
  a{
    text-decoration: none;
    color: ${theme.black};
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
