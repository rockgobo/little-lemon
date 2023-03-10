import { Link, HStack, Button } from "@chakra-ui/react";

export default function Nav() {
  return (
    <nav>
      <HStack>
        <Link href="/" aria-label="Change view to home">
          <Button>Home</Button>
        </Link>
        <Link href="/booking" aria-label="Enter new booking">
          <Button>Booking</Button>
        </Link>
      </HStack>
    </nav>
  );
}
