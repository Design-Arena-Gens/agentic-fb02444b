import Link from "next/link";
import { Button } from "./Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-500" />
          <span className="text-sm font-semibold tracking-wide">Aurora</span>
        </Link>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#get-started" className="hover:text-white">Get started</Link>
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:text-white">Docs</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
