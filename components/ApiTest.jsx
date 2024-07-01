import { useEffect, useState } from "react";
import { ApiTestAxio } from "./ApiTest.axio";
import {
  Wrapper,
  List,
  Heading,
  Image,
  ImgWrapper,
  Box,
} from "./ApiTest.styled";
import Cards from "./cardComponent/Card";
export default function ApiTest() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    ApiTestAxio((res) => {
      if (res && Array.isArray(res)) {
        setGetData(res);
      } else if (res && res.data && Array.isArray(res.data)) {
        setGetData(res.data);
      } else {
        console.error("Data received is not an array:", res);
      }
    });
  }, []);

  return (
    <div style={{ backgroundColor: "aqua" }}>
      <ImgWrapper>
        <Box>
          <Heading>Blue Archive</Heading>
        </Box>
        <Image src="/ba.jpg" alt="" />
      </ImgWrapper>
      <ul>
        <Wrapper>
          {Array.isArray(getData) ? (
            getData.map((item, index) => (
              <List key={index}>
                <Cards
                  key={item._id}
                  icon={item.imageSchool}
                  name={item.name}
                  photoUrl={item.photoUrl}
                  school={item.school}
                />
              </List>
            ))
          ) : (
            <p>Data is not available or invalid format.</p>
          )}
        </Wrapper>
      </ul>
    </div>
  );
}
