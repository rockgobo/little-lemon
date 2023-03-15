import { Container } from "@chakra-ui/react";
import { Grid, GridItem, Spacer, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={"100px 1fr 200px"}
      gridTemplateColumns={"1fr"}
      h={"100vh"}
      gap="1"
      color="blackAlpha.700"
      pl="20"
      pr="20"
    >
      <GridItem p="10" area={"header"}>
        <Flex>
          <Header />
          <Spacer />
          <Nav />
        </Flex>
      </GridItem>
      <GridItem p="10" area={"main"}>
        <Main />
      </GridItem>
      <GridItem p="10" area={"footer"} bg="var(--highlight)">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
