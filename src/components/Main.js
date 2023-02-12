import React, { useReducer } from "react";
import BookingForm from "./components/BookingForm";

export default function Main() {
  const initialTimes = ["16:00", "16:30", "17:00", "18:00", "18:30"];
  const updateTimes = (state, action) => {
    console.log("reducer called with action", action);
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={dispatch}
      ></BookingForm>
    </main>
  );
}
