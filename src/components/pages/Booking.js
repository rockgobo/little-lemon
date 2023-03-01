import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../../utils/api";

export default function Booking() {
  const initialTimes = fetchAPI(new Date());
  const updateTimes = (state, action) => {
    console.log("reducer called with action", action);
    return state;
  };

  const [availableTimes] = useReducer(updateTimes, initialTimes);

  return <BookingForm availableTimes={availableTimes}></BookingForm>;
}
