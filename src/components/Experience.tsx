import Link from "next/link";
import React from "react";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";

const experiences = [
  {
    company: "GreenHouse BrandWorks",
    url: "#",
    location: "Bangalore, India",
    duration: "Feb 2025 - July 2025",
    position: "Full Stack Developer",
    type: "Full Time",
    technologies: [
      "Next.js", "React.js", "Wix", "WordPress", "JavaScript", "Google Analytics"
    ],
    details: [
      "Developed and maintained websites using Next.js, React.js, Wix, and WordPress.",
      "Delivered responsive, SEO-optimized solutions in collaboration with design teams.",
      "Implemented Google Analytics automations for performance and marketing insights.",
      "Managed client deployment, handled technical queries, and feedback.",
    ],
    achievements: [
      "Client deployment and technical support",
      "Performance analytics automation",
      "SEO-optimized web applications",
    ]
  },
  {
    company: "Lokveeraj Tech Solutions",
    url: "#",
    location: "Bangalore, India",
    duration: "Feb 2024 - Dec 2024",
    position: "Software Engineer",
    type: "Full Time / Internship",
    technologies: [
      "Node.js", "Firebase", "Angular", "Next.js", "Postman", "Google Cloud", "Supabase", "Cloudflare"
    ],
    details: [
      "Specialized in Node.js, Firebase, Angular, and Next.js.",
      "Connected and tested APIs, set up environments in Postman, documented architecture.",
      "Developed and deployed Firebase Functions.",
      "Integrated Google Cloud Pub/Sub, Buckets, and Cloud Functions.",
      "Worked with Supabase, Hono.js, and Cloudflare for API hosting.",
    ],
    achievements: [
      "Advanced from intern to Software Engineer",
      "Cloud integration and automation",
      "Robust API development",
    ]
  },
  {
    company: "JustPic",
    url: "#",
    location: "Bangalore, India",
    duration: "May 2023 - July 2023",
    position: "Software Engineer Intern",
    type: "Internship",
    technologies: [
      "Node.js", "React.js", "Next.js", "IoT", "RESTful APIs"
    ],
    details: [
      "Developed and integrated IoT utilities for JustPic platform.",
      "Implemented RESTful APIs in Node.js for device management, user authentication, and secure data exchange.",
      "Enhanced both frontend (React.js/Next.js) and backend systems.",
      "Accelerated feature delivery and improved platform usability.",
      "Collaborated with cross-functional teams to troubleshoot, optimize, and deploy product features.",
    ],
    achievements: [
      "IoT & Smart Device Integration",
      "RESTful API Implementation",
      "Cross-functional Team Collaboration",
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Experience<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl animate-fade-in-up delay-200">
            My professional journey in development, collaborating on scalable projects and digital solutions.
          </p>
        </div>

        {/* Multiple Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Company Info Section */}
                  <div className="lg:w-1/3">
                    <div className="space-y-6">
                      {/* Company Logo/Name */}
                      <div className="space-y-4">
                        <Link
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors duration-300"
                        >
                          {exp.company}
                          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        {/* Position Badge */}
                        <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                          {exp.position}
                        </div>
                      </div>
                      {/* Duration & Location */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin className="w-5 h-5 text-purple-600" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      {/* Skills Used */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tech}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                              style={{ animationDelay: `${400 + tIdx * 100}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Experience Details Section */}
                  <div className="lg:w-2/3">
                    <div className="space-y-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                        {exp.position}{" "}
                        <span className="text-purple-600">@ {exp.company}</span>
                      </h3>
                      <div className="space-y-4">
                        {exp.details.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 group">
                            <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                            <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                      {/* Key Achievements */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-gray-50 rounded-xl border border-purple-100">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                              <span className="text-gray-700">{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
