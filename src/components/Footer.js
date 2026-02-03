import { hero } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-500 text-center py-8 px-6 border-t border-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {hero.name}. All rights reserved.
      </p>
    </footer>
  );
}
