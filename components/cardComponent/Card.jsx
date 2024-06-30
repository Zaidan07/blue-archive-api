import { Card, Image, Text, ImgSchool } from "./Card.styled";

export default function Cards ({ name, photoUrl, school, icon }) {
  return (
    <Card>
        <ImgSchool src={icon} alt=""/>
      <h2>{name}</h2>
      <Image src={photoUrl} alt={name} />
      <Text><p>{school}</p></Text>
    </Card>
  );
}

