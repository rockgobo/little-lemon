import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ConfirmBooking from "./pages/ConfirmBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "confirmBooking",
    element: <ConfirmBooking />,
  },
]);

function Main() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default Main;
