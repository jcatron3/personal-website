import Link from "next/link";
import ThemeSwitch from "./themeSwitcher";

export default function Navigation() {
  return (
    <div className="sticky top-0 z-20 py-2 bg-gray-50 md:py-6 md:mb-6 dark:bg-gray-900">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link
          href="/"
          className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
        >
          Jake Catron
        </Link>
        <Link
          href="/dashboard"
          className="font-light tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
        >
          Dashboard
        </Link>
        <Link
          href="/contact"
          className="font-light tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
        >
          Contact
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
}
