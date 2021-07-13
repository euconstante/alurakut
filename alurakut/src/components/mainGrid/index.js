import styled from "styled-components";

const MainGrid = styled.main `
width:100%;
display:grid;
grid-gap:0.7rem;
padding: 1rem;
margin-left: auto;
margin-right:auto;
max-width: 32rem;
.profileArea {
  display:none;
  @media(min-width:860px) {
    display: block;
  }
}

@media(min-width: 860px){
  max-width:1110px;
  display:grid;
  grid-template-areas: "profileArea welcomeArea profileRelationsArea";
                      
  grid-template-columns: 160px 1fr 312px;
}

`;
export default MainGrid;