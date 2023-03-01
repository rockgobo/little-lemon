import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import ConfirmBooking from "./components/pages/ConfirmBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "confirmBooking",
    element: <ConfirmBooking />,
  },
]);

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>

      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  );
}

export default App;
