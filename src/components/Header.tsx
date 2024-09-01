import BackToVisuals from "./BackToVisuals";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="top-0 w-full">
      <nav className="flex justify-between items-center p-6 border-b h-[100px]">
        <Logo />
        <BackToVisuals />
      </nav>
    </header>
  );
}
