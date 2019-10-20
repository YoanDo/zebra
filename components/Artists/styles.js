import styled from 'styled-components';

export const ArtistsWrap = styled.div`
  align-items: flex-end;
  padding-top: ${props => props.theme.spaceTopBlock};
`;

export const Artist = styled.a`
  height: 5vh;
  width: 100%;
  h2{
    margin: 0 0 0 2rem;
  }
  p{
    margin: 0 2rem 0 0
    }
  img{
    position: absolute;
    z-index: 1;
    max-height: 40vh;
    display: none;
    left: ${props => props.x}%;
    border: 10px white solid;
  }
  li{
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    z-index: 0;
    &:hover h2, p{
      z-index: 99;
    }
    &:hover img{
      display: block;;
    }
  }
`;
