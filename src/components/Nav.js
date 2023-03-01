import { Link, HStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <nav>
      <HStack>
        <Link href="/">Home</Link>
        <Link href="/booking">Booking</Link>
      </HStack>
    </nav>
  );
}
