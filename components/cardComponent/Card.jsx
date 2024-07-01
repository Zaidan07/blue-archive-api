import { Card, Image, Text, ImgSchool, H1 } from "./Card.styled";

export default function Cards ({ name, photoUrl, school, icon }) {
  return (
    <Card>
        <ImgSchool src={icon} alt=""/>
      <H1>{name}</H1>
      <Image src={photoUrl} alt={name} />
      <Text><p>{school}</p></Text>
    </Card>
  );
}

