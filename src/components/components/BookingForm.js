import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = function ({ availableTimes }) {
  const style = { display: "grid", maxWidth: "200px", gap: "20px" };
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

  const navigate = useNavigate();

  return (
    <form style={style} onSubmit={navigate("/confirmBooking")}>
      {date}
      {time}
      {guests}
      {occasion}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
        }}
        id="res-date"
      />
      {date}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={time}
        onChange={(event) => setTime(event.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Book Now" />
    </form>
  );
};

export default BookingForm;
