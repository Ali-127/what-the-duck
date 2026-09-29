import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-10 bg-amber-300">
      <div className="flex gap-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="about" className="hover:underline">
          About
        </Link>
      </div>
      <Link href="/">
        What The Duck
      </Link>
      <div className="flex gap-5">
        <Link href="#" className="hover:underline">
          SignUp
        </Link>
        <Link href="#" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}