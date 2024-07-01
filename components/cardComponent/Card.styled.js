import styled from "styled-components";

export const Card = styled.div`
height: 280x;
width: 280px;
gap: 10px;
background-color: lightblue;
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 0 0 20px gray;

`
export const Image = styled.img`
height: auto;
width: 100%;
max-width: 200px;
object-fit: contain;
border: none;
border-radius: 10px;
`

export const Text = styled.p`
font-size: small;
font-family: sans-serif;
font-weight: bold;
padding-bottom: 30px;
padding-top: 30px;
z-index: 0;
`
export const H1 = styled.h1`
font-weight: bold;
font-family: sans-serif;
`

export const ImgSchool = styled.img`
height: auto;
width: 100%;
object-fit: contain;
margin-top: 5px;
max-width: 50px;
`