import styled from 'styled-components';

export const IntroductionWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 980px){
    height: auto;
  }
`;
export const Illustrations = styled.div`
  height: 100%;
  max-height: 80vh;
  flex-basis: 50%;
  position: relative;
  margin-right: 30px;
  .line{
    opacity: .9;
    background: ${props => props.theme.black};
  }
  @media (max-width: 980px){
    display: none;
  }
`;

export const TextWrap = styled.div`
  font-size: ${props => props.theme.basicText};
  flex-basis: 50%;
  @media (max-width: 980px){
    width: 100%;
    flex-basis: 100%;
  }
`;

export const Rectangle = styled.div`
  height: 270px;
  width: 27px;
  background-color: ${props => props.theme.black}
`

