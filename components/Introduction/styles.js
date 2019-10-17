import styled from 'styled-components';

export const IntroductionWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;


export const TextWrap = styled.div`
  font-size: ${props => props.theme.basicText};
  flex-basis: 50%;
`;



