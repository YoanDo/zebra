import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    opacity: 0;
    animation: ${appear} 2s ease-in-out;
    animation-delay: .4s;
      animation-fill-mode: forwards;
  }
`

