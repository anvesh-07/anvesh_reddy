import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const Myplace = () => {
  return (
    <section className="pb-20">
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">My Stack.</h3>
          <div className="flex flex-col flex-nowrap justify-center gap-5 items-baseline w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg bg-[#b8b8b8]">
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Next.js / React.js / Angular
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Node.js / Firebase / Supabase
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Cloud Functions / API Engineering
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Responsive & SEO-Optimized Solutions
                </div>
                <Star className="text-purple-600" />
              </div>
            </Marquee>
            <Marquee direction="right" speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  IoT / Embedded Systems / Arduino
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Google Cloud / Cloudflare
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Team Collaboration / Project Management
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Problem Solving / Technical Excellence
                </div>
                <Star className="text-purple-600" />
              </div>
            </Marquee>
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  RESTful APIs / Secure Integrations
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Cross-functional Teamwork
                </div>
                <Star className="text-purple-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Real-time Applications
                </div>
                <Star className="text-purple-600" />
              </div>
            </Marquee>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            My Special Place.
          </h3>
          <div className="relative w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.45399469586!2d77.6998299!3d13.0480496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae114dbeec1e39%3A0x5fa504eaa18db43a!2sPWD%20Rd%2C%20B%20Narayanapura%2C%20Bengaluru%2C%20Karnataka%20560016!5e0!3m2!1sen!2sin!4v1733097078955!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myplace;
