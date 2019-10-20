import styled from 'styled-components';

export const ArticlesWrap = styled.div`
  align-items: flex-end;
  padding-top: ${props => props.theme.spaceTopBlock};
`;

export const Articles = styled.div`
  overflow: scroll;
  max-height: 72vh;
  border-bottom: solid 0.4rem ${props => props.black};
  border-top: solid 0.4rem ${props => props.black};
  width: 736px;
  margin-left: auto;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  p{
    margin-left: 1rem;
  }
  h3{
    margin-right: 1rem;
  }
`;

export const Article = styled.div`
  display: flex;
  width: 736px;
  height: 224px;
  margin: 2.7rem 0;
  margin-left: auto;
  border-bottom: solid 0.2rem ${props => props.black};
  @media (max-width: 980px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 0;
  }


`;
export const Illustration = styled.img`
  height: 192px;
  width: 274px;
  object-fit: cover;
  @media (max-width: 980px){

  }
`;
export const TextArea = styled.div`
  margin-left: 3.8rem;
   @media (max-width: 980px){
     margin-left: 0;
   }
`;
