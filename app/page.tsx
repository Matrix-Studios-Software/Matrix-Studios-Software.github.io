import Image from "next/image";
import logo from "@/public/matrix-studios-logo.png";

export default function Home() {
  return (
    <main className="hero">
      <Image src={logo} alt="Matrix Studios logo" className="logo" priority />
      <h1>Matrix Studios</h1>
      <p className="tagline">
        Huntington Beach, California <span className="divider">|</span> Software
        and Talent
      </p>
    </main>
  );
}
