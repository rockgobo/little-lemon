import { Heading, Stack } from "@chakra-ui/react";
import Chicago from "../components/Chicago";
import Specials from "../components/Specials";

function HomePage() {
  return (
    <Stack gap="10">
      <Heading>Little Lemon</Heading>
      <Specials />
      <Chicago />
    </Stack>
  );
}

export default HomePage;
