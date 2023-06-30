import Link from "next/link";

export default function NavBar() {
  return (
      <>
          <Link href='/'>Home</Link><br />
          <Link href='/users'>users</Link>
      </>
  );
}
