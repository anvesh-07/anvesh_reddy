import { Download } from "lucide-react";
import Link from "next/link";
import Skils from "@/components/Skils";
import Experience from "@/components/Experience";
import ProjectBanner from "@/components/ProjectBanner";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anvesh Reddy | Full Stack Web Developer Portfolio",
  description:
    "Full Stack Developer specializing in Next.js, React.js, and Node.js. Skilled in designing scalable applications, building robust APIs, and integrating cloud platforms such as Firebase and Google Cloud. Innovative creator of responsive, SEO-optimized websites and advanced IoT solutions.",
  keywords: [
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Specialist",
    "Node.js Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Firebase Integration",
    "Google Cloud Developer",
    "API Development",
    "IoT Solutions",
    "Project Management",
    "Frontend Developer",
    "Backend Developer",
    "Modern Web Applications",
    "Responsive Web Design"
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};


const Home = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Hero Section with Enhanced Design */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Section with Enhanced Typography */}
            <div className="text-center lg:text-left lg:w-1/2 space-y-8">
              {/* Greeting with Animation */}
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-gray-800 font-medium animate-fade-in-up">
                  Hey, {"I'm"} Settipalli Anvesh Reddy{" "}
                  <span className="inline-block animate-bounce">👋🏻</span>
                </p>

                {/* Main Heading with Gradient */}
                <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent animate-fade-in-up delay-200">
                    Full Stack
                  </span>
                  <span className="text-gray-800 animate-fade-in-up delay-300">
                    Developer
                  </span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                  I&#39;m a Bengaluru-based developer skilled in building scalable web applications using <span className="text-purple-600 font-semibold">Node.js, Next.js, and modern JavaScript frameworks</span>. Experienced with robust API development, cloud integrations with Firebase and Google Cloud, and collaborating with cross-functional teams for high-quality software delivery.
                </p>

                {/* Key Highlights */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-600">
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    JavaScript / TypeScript
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Next.js & React.js Expert
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Firebase & GCP
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    API Engineering
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    IoT Integration
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Project Management
                  </span>
                </div>
              </div>
              
              {/* Enhanced Button Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-700">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold transition-all duration-300 transform hover:shadow-lg flex items-center gap-2"
                >
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>

                <Link
                  href="/anvesh_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-xl hover:border-purple-600 hover:text-purple-600 font-semibold transition-all duration-300 transform  flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </Link>
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative flex items-center justify-center w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 animate-fade-in-up delay-300">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-purple-300 shadow-xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Anvesh - Full Stack Developer"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  width={48}
                  height={48}
                />

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience, Projects, Skills, Story - retain these as separate components */}
      <Experience />
      <ProjectBanner />
      <Skils />
    </main>
  );
};



export default Home;
