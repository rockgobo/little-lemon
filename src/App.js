import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/components/BookingForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import ConfirmBooking from "./components/pages/ConfirmBooking";

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<div />}>
          <Route index element={<Main />} />
          <Route path="confirmBooking" element={<ConfirmBooking />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
