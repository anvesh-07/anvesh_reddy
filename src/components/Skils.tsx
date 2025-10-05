import React from "react";
import {
  Code,
  Palette,
  Database,
  Users,
  Cloud,
  Zap,
  BarChart,
  GitBranch,
  Settings,
  LayoutTemplate,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      "Core Java", "Java", "JavaScript", "TypeScript", "C", "Python", "SQL"
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: LayoutTemplate,
    title: "Frameworks & Libraries",
    skills: [
      "Next.js", "React.js", "React Native", "Angular", "Angular CLI",
      "Angular Material", "Node.js", "WordPress"
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "Firebase", "Cloud Firestore", "Google Cloud Platform (GCP)", "Supabase", "Cloudflare Workers", "Cloud Technologies"
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Palette,
    title: "Front-End",
    skills: [
      "HTML", "CSS", "Responsive Design", "UI/UX Design", "Tailwind CSS"
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Database,
    title: "Back-End & Data",
    skills: [
      "API Development & Integration", "PostgreSQL", "Back-End Development", "Databases"
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: BarChart,
    title: "Analytics & Tagging",
    skills: [
      "Google Analytics", "Google Tag Manager"
    ],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: GitBranch,
    title: "Tools & Platforms",
    skills: [
      "Arduino IDE", "GitHub", "Vercel", "Visual Studio Code",
      "Canva", "Microsoft PowerPoint", "Microsoft Word", "Microsoft Excel"
    ],
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware",
    skills: [
      "Internet of Things (IoT)", "Arduino"
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Settings,
    title: "Project & Product Management",
    skills: [
      "Project Management", "Product Management", "Client Communication", "Project Delivery"
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Teamwork & Leadership",
    skills: [
      "Cross-functional Team Leadership", "Collaboration", "Mentorship", "Cross-cultural Teams", "Teamwork", "Leadership"
    ],
    color: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    icon: Zap,
    title: "Other Skills",
    skills: [
      "Analytical Skills", "Problem Solving"
    ],
    color: "from-red-500 to-red-600",
  }
];

const Skils = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Skills<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            My toolkit spans programming languages, frameworks, cloud, analytics, project management, and essential collaboration skills for modern development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="w-12 h-1 bg-white rounded-full opacity-80"></div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-gray-700 group-hover:text-gray-800 transition-colors duration-200"
                      style={{
                        animationDelay: `${500 + index * 100 + skillIndex * 50}ms`,
                      }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`}
                      ></div>
                      <span className="text-sm lg:text-base font-medium">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;
