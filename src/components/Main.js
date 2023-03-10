import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";
import ConfirmBooking from "./pages/ConfirmBooking";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="booking" element={<Booking />} />
          <Route path="confirmBooking" element={<ConfirmBooking />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;
