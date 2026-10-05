import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between bg-secondary p-5 text-secondary-foreground">
      <Link href="/">
        <Image src="/duck-logo.png" width={40} height={80} alt="duck-logo" className="h-auto w-auto pl-5"/>
      </Link>
      <div className="flex gap-5">
        <Link href="about">
          About
        </Link>
        <Link href="about">
          Cart
        </Link>
        <Link href="#">
          Login | SignUp
        </Link>
      </div>
    </nav>
  );
}
