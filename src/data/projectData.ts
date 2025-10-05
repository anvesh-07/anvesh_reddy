import grasscutter from "../../public/assets/projects/grasscutter.jpg";
import smartPowerBox from "../../public/assets/projects/smartPowerBox.webp";
import veerians from "../../public/assets/projects/veerians.png";
// Use placeholder images or your own screenshots for these projects if the above paths do not exist.

export const projectData = [
  {
    image: grasscutter,
    title: "Grasscutter Vision-Guided Robotic System",
    description:
      "Developed an autonomous robot for grass cutting, featuring vision-guided navigation and remote live video streaming. Controlled via a web interface for seamless and safe operation from any location.",
    technologies: [
      "C",
      "Arduino",
      "IoT",
      "Embedded Systems"
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
  {
    image: smartPowerBox,
    title: "Just Smart Power Box",
    description:
      "A smart automation system for washing machines, integrating QR-based payment and secure user role management. Includes IoT automation, payment processing, and remote control for enhanced efficiency in shared laundry environments.",
    technologies: [
      "Arduino",
      "Firebase",
      "IoT",
      "Razorpay",
      "Flutter",
      "Firebase Functions"
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
  {
    image: veerians,
    title: "Veerians HR Tech Platform",
    description:
      "Built a full-featured HR management platform with modules for payroll, attendance, onboarding, and performance analytics. Features real‑time dashboards, streamlined team management, and integrated payment gateways.",
    technologies: [
      "Next.js",
      "Firebase",
      "Cloud Functions",
      "TanStack",
      "Tailwind CSS",
      "Stripe",
      "Razorpay",
      "Doppler"
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
];

// You can now use `projectData` as usual in your ProjectBanner component.
