import styled from "styled-components";

export const Card = styled.div`
height: 280x;
width: 280px;
gap: 10px;
background-color: pink;
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
border-radius: 10px;
box-sizing: border-box;
`
export const Image = styled.img`
height: auto;
width: 100%;
max-width: 200px;
object-fit: contain;
`

export const Text = styled.p`
font-size: small;
font-family: sans-serif;
font-weight: bold;

z-index: 0;
`
export const ImgSchool = styled.img`
height: auto;
width: 100%;
object-fit: contain;
margin-top: 5px;
max-width: 50px;
`