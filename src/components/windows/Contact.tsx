import { socials } from "@/constants";
import useWindowsStore from "@/store/windows";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const { updateWindowData } = useWindowsStore();
  return (
    <div className="h-full w-full bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-[#0f0f0f] dark:via-[#111] dark:to-[#0a0a0a] overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* HERO */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative w-48 h-48 mb-6">
            <Image
              src="/images/profile.jpg"
              alt="Pawan Dasila"
              fill
              className="rounded-full object-cover shadow-xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl text-white font-bold tracking-tight">
            Pawan Dasila
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Full Stack Developer, Freelancer
          </p>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
            Uttarakhand, India · Open to Remote Work
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <InfoCard title="About">
            <p>
              4th-year Computer Science Engineering student at{" "}
              <strong>Graphic Era Hill University, Bhimtal</strong>. Always
              excited about building impactful software and elegant user
              experiences.
            </p>
          </InfoCard>

          <InfoCard title="Quick Facts">
            <ul className="space-y-2">
              <li>🎂 Born on December 6, 2004</li>
              <li>📚 CGPA: 7.5 / 10</li>
              <li>💻 Full-Stack Developer</li>
              <li>🌍 Open to Remote Roles</li>
            </ul>
          </InfoCard>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mb-10">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-300 mb-6">
            Connect with Me
          </h2>

          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Image
                  src={social.icon}
                  alt={social.text}
                  width={28}
                  height={28}
                  className="group-hover:scale-110 transition-transform"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Link
              href="mailto:pawandasila06@gmail.com"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-lg hover:scale-[1.03] transition shadow-xl"
            >
              Send me an Email
            </Link>
            <button
              onClick={() =>
                updateWindowData("safari", { view: "chat", isLoading: true })
              }
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-lg hover:scale-[1.03] transition shadow-xl cursor-pointer"
            >
              Chat with me
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
            Lets build something meaningful together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/* ---------------- COMPONENTS ---------------- */

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 shadow-sm">
    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
      {title}
    </h3>
    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </div>
);
