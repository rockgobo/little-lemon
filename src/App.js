import "./App.css";
import BookingForm from "./components/components/BookingForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main>
        <BookingForm></BookingForm>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
