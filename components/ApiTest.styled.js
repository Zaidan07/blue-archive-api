import styled from "styled-components";


export const Wrapper = styled.section`
gap: 10px;
width: 100%;
margin: auto;
display: flex;
padding: 38px;
flex-wrap: wrap;
max-width: 1227px;
align-items: center;
justify-content: center;
background-color: aqua;
@media (width <= 400px) {
    padding: 10px 0 0 8px;

    
}
`
export const Image = styled.img`
height: 810px;
width: 1580px;
filter: blur(3px);
@media (width <= 400px) {
    height: 228px;
    width: 366px;
    
}
`
export const ImgWrapper =styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;  
z-index: 1;
/* filter: blur(4px); */
`

export const List = styled.li`
list-style-type: none;
`
export const Heading = styled.h1`
font-family: monospace;
font-weight: bold;
text-align: center;
padding-top: 24px;
z-index: 20;
position: absolute;
color: white;
font-size: 100px;
text-shadow: 0 0 20px lightblue ;
@media (width <= 400px) {
    font-size: 50px;
}

/* top: 10px; */

`

// export const BoxWrapper = styled.div`
// position: relative;
// height: 100%;
// width: 100%;
// `
export const Box = styled.div`
position: absolute;
background-color: rgba(0,0,0,0.3);
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
`
