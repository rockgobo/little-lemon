import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

function Hero({ children, image }) {
  return (
    <Card>
      <CardBody>
        <Image src={image} mb="4" />
        <Heading size="sm">{children}</Heading>
      </CardBody>
    </Card>
  );
}

export default Hero;
