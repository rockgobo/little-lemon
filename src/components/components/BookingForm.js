import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../utils/api";
import FormAlert from "./FormAlert";

const BookingForm = function ({ availableTimes, submitForm }) {
  const style = { display: "grid", maxWidth: "400px", gap: "20px" };
  let d = new Date();
  const dateTimeLocalValue = new Date(
    d.getTime() - d.getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, -5);

  const [date, setDate] = useState(dateTimeLocalValue);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    submitForm(data);
  };

  return (
    <form style={style} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="res-date">Choose date</FormLabel>
        <Input
          type="date"
          {...register("date", { required: true })}
          id="res-date"
        />
        {errors.date && <FormAlert>This field is required</FormAlert>}
      </FormControl>

      <FormControl>
        <FormLabel>Choose time</FormLabel>
        <Select {...register("time", { required: true })}>
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </Select>
        {errors.time && <FormAlert>This field is required</FormAlert>}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <Input
          type="number"
          id="guests"
          {...register("guests", { required: true, min: 1, max: 10 })}
        />
        {errors.guests?.type === "required" && (
          <FormAlert>Number of guests are required</FormAlert>
        )}
        {errors.guests?.type === "min" && (
          <FormAlert>Please book at least 1 guest</FormAlert>
        )}
        {errors.guests?.type === "max" && (
          <FormAlert>Booking for more than 10 guests is not possible</FormAlert>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select id="occasion" {...register("occasion", { required: true })}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </Select>
        {errors.occasion && <FormAlert>This field is required</FormAlert>}
      </FormControl>
      <Input type="submit" value="Book Now" aria-label="Submit booking form" />
    </form>
  );
};

export default BookingForm;
