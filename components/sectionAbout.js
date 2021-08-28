import Image from "next/image";
import Link from "next/link";

export default function SectionAbout() {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey there!
          </h1>
          <div className=" mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I'm Jake, a Computer Science & Mathematics student at the University
              of Maryland.
            </p>
            <p className="mb-4">
              I will be graduating in May 2022 and am looking for full-time employment as a software engineer.
            </p>
            <p className="mb-4">
              This is my personal website to experiment with web development, and show off my projects as I complete them.
              Check out <Link href='/dashboard'> my personal dashboard </Link> for now.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src='/profile.png'
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}