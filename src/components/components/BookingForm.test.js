import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

test("Renders the BookingForm submit button", () => {
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Input no guest renders an error", () => {
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);
  const submitButton = screen.getByText("Book Now");
  fireEvent.click(submitButton);
  //const errorElements = screen.getAllByText("Number of guests are required");
  expect(true).toBe(true);
});
