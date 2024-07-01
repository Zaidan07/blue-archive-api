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
@media (width <= 400px) {
    height: 228px;
    width: 160px;
    gap: 5px;
}

`
export const Image = styled.img`
height: auto;
width: 100%;
max-width: 200px;
object-fit: contain;
border: none;
border-radius: 10px;
@media (width <= 400px) {
    height: 100px;
    width: 100px;
}
`

export const Text = styled.p`
font-size: medium;
font-family: sans-serif;
font-weight: bold;
padding-bottom: 30px;
padding-top: 30px;
z-index: 0;
@media (width <= 400px) {
   font-size: small;
   padding-top: 3px;
}
`
export const H1 = styled.h1`
font-weight: bold;
font-family: sans-serif;
@media (width <= 400px) {
   font-size: medium;
   padding-top: 1px;
}
`

export const ImgSchool = styled.img`
height: auto;
width: 100%;
object-fit: contain;
margin-top: 5px;
max-width: 50px;
@media (width <= 400px) {
   height: 30px;
   width: 30px;
   margin-top: 2px;
   padding-bottom: 2px;
}
`