import { hero } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c2e] py-10 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-8" />
      <p className="text-center text-xs text-[#4a5568] tracking-widest uppercase">
        &copy; {new Date().getFullYear()} {hero.name}. All rights reserved.
      </p>
    </footer>
  );
}
