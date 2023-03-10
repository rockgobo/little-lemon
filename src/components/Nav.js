import { Link, HStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <nav>
      <HStack>
        <Link href="/" aria-label="Change view to home">
          Home
        </Link>
        <Link href="/booking" aria-label="Enter new booking">
          Booking
        </Link>
      </HStack>
    </nav>
  );
}
