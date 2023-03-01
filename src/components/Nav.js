import { Link } from "@chakra-ui/react";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/booking">Booking</Link>
        </li>
      </ul>
    </nav>
  );
}
