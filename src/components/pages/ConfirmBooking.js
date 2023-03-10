import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const ConfirmBooking = function () {
  return (
    <Alert status="success">
      <AlertIcon />
      <AlertTitle>Booking Confirmed</AlertTitle>
      <AlertDescription>Have a pleasant at Little Lemons.</AlertDescription>
    </Alert>
  );
};

export default ConfirmBooking;
