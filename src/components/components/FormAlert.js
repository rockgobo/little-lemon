import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

function FormAlert({ children }) {
  return (
    <Alert status="error" mt="1">
      <AlertIcon />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}

export default FormAlert;
