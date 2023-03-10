import { Grid } from "@chakra-ui/react";
import i1 from "../../assests/1.jpg";
import i2 from "../../assests/2.jpg";
import i3 from "../../assests/3.webp";
import Hero from "./Hero";

function Specials() {
  const specials = [
    {
      id: 1,
      text: "Tom Ka Gai",
      image: i1,
    },
    {
      id: 2,
      text: "Thai chicken and eggplant yellow curry",
      image: i2,
    },
    {
      id: 3,
      text: "Pad Thai",
      image: i3,
    },
  ];
  return (
    <Grid templateColumns={"1fr 1fr 1fr"} gap="5">
      {specials.map((s) => (
        <Hero key={s.id} image={s.image}>
          {s.text}
        </Hero>
      ))}
    </Grid>
  );
}

export default Specials;
