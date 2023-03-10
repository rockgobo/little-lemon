import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const initialTimes = fetchAPI(new Date());

  const updateTimes = (state, action) => {
    console.log("reducer called with action", action);
    return state;
  };

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmBooking");
    }
  };

  const [availableTimes] = useReducer(updateTimes, initialTimes);

  return (
    <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
  );
}
