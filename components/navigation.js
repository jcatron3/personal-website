import Link from "next/link";
import ThemeSwitch from "./themeSwitcher";

export default function Navigation() {
  return (
    <div className="sticky top-0 z-20 py-2 bg-gray-50 md:py-6 md:mb-6 dark:bg-gray-900">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Jake Catron
          </a>
        </Link>
        <Link href="/dashboard">
          <a
            className={
              "font-light tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Dashboard
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={
              "font-light tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Contact
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
}
