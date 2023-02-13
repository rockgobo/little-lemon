import React, { useReducer } from "react";
import BookingForm from "./components/BookingForm";
import { fetchAPI } from "../utils/api";

export default function Main() {
  const initialTimes = fetchAPI(new Date());
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
