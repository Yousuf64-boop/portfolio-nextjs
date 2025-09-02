import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-bold">Hi, I&apos;m <span className="text-blue-600">Yousuf Middya</span></h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A passionate AI/ML and Fullstack Developer. I build modern web apps,
          solve real-world problems with machine learning, and love clean UI/UX.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="px-6 py-2 rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-2 rounded-2xl border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/next.svg"
          alt="Profile picture"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}

