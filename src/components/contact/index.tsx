import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandLeetcode
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src="assets/images/author2.jpg"
          alt="Header background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Profile Picture */}
        <div className="absolute left-8 top-24">
          <img
            src="logo/profile.png"
            alt="Anupriya Saini"
            className="size-32 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
          />
        </div>
        {/* Name */}
        <h1 className="absolute bottom-6 left-44 text-5xl font-bold text-white drop-shadow-lg">
          Anupriya Saini
        </h1>
      </div>

      {/* Social Links */}
      <div className="mt-24 px-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/anupriyasaini21/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-5 py-3 text-[#0A66C2] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
        >
          <IconBrandLinkedin className="size-5" stroke={2} />
          <span className="font-semibold">LinkedIn</span>
        </a>

        <a
          href="https://github.com/anupriyasaini21"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-5 py-3 text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
        >
          <IconBrandGithub className="size-5" stroke={2} />
          <span className="font-semibold">GitHub</span>
        </a>

        <a
          href="https://leetcode.com/u/anupriyasaini21/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-5 py-3 text-[#FFA116] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
        >
          <IconBrandLeetcode className="size-5" stroke={2} />
          <span className="font-semibold">LeetCode</span>
        </a>

        <a
          href="mailto:anupriyasaini2110@gmail.com"
          className="group flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-5 py-3 text-[#EA4335] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
        >
          <IconMail className="size-5" stroke={2} />
          <span className="font-semibold">Email</span>
        </a>
      </div>

      {/* About Section */}
      <div className="px-8 py-8 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Hello! I'm{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Anupriya Saini
              </span>
              , a passionate software developer with a strong foundation in computer
              science and a keen interest in building innovative solutions. I hold a
              Bachelor's degree in Computer Science and Engineering from Galgotia College
              of Engineering and Technology, where I honed my skills in programming, data
              structures, and algorithms.
            </p>

            <p>
              Over the years, I've gained hands-on experience in various technologies,
              including
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {" "}
                JavaScript
              </span>
              ,
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                {" "}
                React
              </span>
              ,
              <span className="font-semibold text-green-600 dark:text-green-400">
                {" "}
                Node.js
              </span>
              , and
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                {" "}
                Python
              </span>
              . I'm particularly enthusiastic about web development and enjoy creating
              user-friendly applications that solve real-world problems.
            </p>

            <p>
              My journey in the tech world has been driven by a constant desire to learn
              and grow. I actively participate in coding challenges on platforms like
              LeetCode to sharpen my problem-solving skills and stay updated with the
              latest industry trends.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "Next.js",
                "TailwindCSS",
                "MongoDB",
                "PostgreSQL",
                "Git"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
