import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../utils/api";

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

  const onSubmit = async (event) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <form style={style} onSubmit={onSubmit}>
      <FormControl>
        <FormLabel htmlFor="res-date">Choose date</FormLabel>
        <Input
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
            return false;
          }}
          id="res-date"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Choose time</FormLabel>
        <Select value={time} onChange={(event) => setTime(event.target.value)}>
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <Input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </Select>
      </FormControl>
      <Input type="submit" value="Book Now" />
    </form>
  );
};

export default BookingForm;
