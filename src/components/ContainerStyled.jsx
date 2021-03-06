import styled from 'styled-components';

// Main wrapper for all pages with list 'card' in the middle.
const ContainerStyled = styled.div `
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

  & > div {
    max-height: 80vh;
    width: 50vw;
    overflow: scroll;
    overflow-x: hidden;
  }
  `

export default ContainerStyled;