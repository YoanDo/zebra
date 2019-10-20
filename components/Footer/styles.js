import styled from 'styled-components';

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20%;
  /* margin-top: ${props => props.theme.spaceTopBlock}; */
  margin-top: 20vh;
  margin-bottom: 10vh;
  width: 100%;
  border-top: 0.2rem solid ${props => props.theme.black};
  border-bottom: 0.2rem solid ${props => props.theme.black};
`;
