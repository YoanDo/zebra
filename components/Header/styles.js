import styled from 'styled-components';

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: 30vw;
  }
  @media (max-width: 980px){
    width: 80%;
    height: 90vh;
    margin: auto;
    img{
      width: 80%;
    }
  }
`;

