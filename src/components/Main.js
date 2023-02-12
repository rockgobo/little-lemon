import React, { useState } from "react";
import BookingForm from "./components/BookingForm";

export default function Main() {
  const [availableTimes] = useState([
    "16:00",
    "16:30",
    "17:00",
    "18:00",
    "18:30",
  ]);

  return (
    <main>
      <BookingForm availableTimes={availableTimes}></BookingForm>
    </main>
  );
}
