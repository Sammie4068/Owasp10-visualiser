import BackToVisuals from "./BackToVisuals";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="top-0 w-full">
      <nav className="flex justify-between items-center p-2 md:p-6 md:h-[100px]">
        <Logo />
        <BackToVisuals />
      </nav>
    </header>
  );
}
