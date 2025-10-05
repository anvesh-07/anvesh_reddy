import MyProjects from "@/components/MyProjects";
import { Metadata } from "next";
import { Code, Sparkles, Zap, Shield, Lock } from "lucide-react";
export const metadata: Metadata = {
  title: "Projects | Anvesh Reddy - Full Stack Developer",
  description:
    "Explore scalable web, API, IoT, and HR tech solutions developed by Settipalli Anvesh Reddy, a full stack developer with expertise in Next.js, React.js, Node.js, Firebase, cloud platforms, and embedded systems.",
  keywords: [
    "Web Development Projects",
    "Full Stack Projects",
    "Next.js Portfolio",
    "React.js Developer",
    "Node.js API Integration",
    "Firebase Cloud Functions",
    "IoT Automation Projects",
    "HR Tech Platform",
    "Cloud Integration",
    "Team Collaboration Projects",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Projects = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Enhanced Header Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Icon and Title Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-600 rounded-xl">
              <Code className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
                My <span className="text-purple-600">Scalable</span> Solutions
              </h1>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-4xl">
            <p className="text-gray-800 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-purple-600 mb-8">
              Designing and deploying robust, secure applications—spanning web, cloud, HR tech,
              and IoT—using Next.js, React.js, Node.js, Firebase, Google Cloud, and embedded platforms.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Projects Delivered
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">10+</p>
                <p className="text-sm text-gray-500">Web, API, IoT, HR Tech</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Technologies Mastered
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">12+</p>
                <p className="text-sm text-gray-500">
                  Next.js, React.js, Node.js, Firebase, Angular, IoT/Embedded
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Years Experience
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">2+</p>
                <p className="text-sm text-gray-500">
                  Full Stack & Product Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <MyProjects />

      {/* Professional Note Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-600 rounded-xl">
                <Shield className="text-white" size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                A Note About My Portfolio
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                While I&apos;ve highlighted select scalable solutions here, my complete
                portfolio encompasses high-impact work on web, HR, and IoT platforms. Some
                projects remain confidential for client privacy and ongoing development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Lock
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Client Confidentiality
                    </h3>
                    <p className="text-sm text-gray-600">
                      Several solutions contain proprietary logic or sensitive business requirements,
                      and can only be discussed in a private technical review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Enterprise Security
                    </h3>
                    <p className="text-sm text-gray-600">
                      Robust applications may be under strict NDA or enterprise protocols that limit
                      portfolio demonstration of real-world usage and integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Real-time & Complex Architecture
                    </h3>
                    <p className="text-sm text-gray-600">
                      Modular and interconnected systems—such as IoT, HR platforms, and cloud APIs—
                      are best presented through live demos and engineering conversation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      In-Progress Work
                    </h3>
                    <p className="text-sm text-gray-600">
                      Ongoing products—such as smart automation, advanced analytics, and API
                      platforms—may be available for demonstration upon request.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-purple-600">
                <p className="text-gray-800 font-medium">
                  💡 <strong>Interested in specifics?</strong> I&apos;m ready to share technical
                  case studies and architecture review on request—showcasing scalable
                  solutions with APIs, cloud platforms, data engineering, and IoT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
