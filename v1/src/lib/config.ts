const CareerPathValue = {
  name: "Career Path",
  items: [
    {
      title: "Future Role at Your Company",
      company: "Your Company",
      position: "Intern/Fresher",
      responsibilities: [
        "Developing and maintaining web applications using modern frameworks.",
        "Collaborating with cross-functional teams to define and implement innovative solutions.",
        "Participating in code reviews and contributing to team knowledge sharing.",
      ],
      date: "2024 - Present",
      logo: "/logo-example.svg",
    },
    {
      title: "College Student",
      company: "Ho Chi Minh University of Science",
      position: "Software Engineering Student",
      responsibilities: [
        "Completed coursework in software development, algorithms, and data structures.",
        "Worked on various team projects and individual assignments to build practical skills.",
        "Engaged in extracurricular activities and tech clubs to enhance learning.",
      ],
      date: "2019 - 2024",
      logo: "/logo-hcmus.svg",
    },
  ],
};

const ProjectsValue = {
  name: "Projects",
  items: [
    {
      name: "PickFood",
      type: "Web",
      image: "https://i.ibb.co/RhhWb8c/Home3d.png",
      description:
        "PickFood is an intelligent app that helps users solve the eternal question 'What to eat today?' by suggesting suitable dishes based on their preferences, location, and current time.",
      link: "https://pickfood.vercel.app/",
      tags: [
        "NextJs",
        "TypeScript",
        "Python",
        "MongoDB",
        "TailwindCSS",
        "NextAuth",
        "Prisma",
      ],
      github: "https://github.com/nx-hanh/pickfood-grab-bootcamp-team16",
    },
    {
      name: "Hellroom",
      type: "Web",
      image: "https://imgur.com/5vgpeBS.png",
      description:
        "A simple classroom with custom and add features, you can create presentation with multiple choice questions and share it with your students.",
      link: "https://hellroom.onrender.com/",
      tags: [
        "React",
        "Redux",
        "ExpressJs",
        "NodeJs",
        "MongoDB",
        "SocketIO",
        "MaterialUI",
      ],
      github: "https://github.com/nx-hanh/custom-classroom",
    },
    {
      name: "Ecommerce API",
      type: "Web",
      image:
        "https://i.ibb.co/b2mfrv3/photo-1674027001840-1a3e834eb73f-q-80-w-1932-auto-format-fit-crop-ixlib-rb-4-0.jpg",
      description:
        "A simple eCommerce API, you can create, update, delete products and orders. I will add more features and the frontend soon.",
      link: "",
      tags: ["ExpressJs", "NodeJs", "MongoDB", "JWT"],
      github: "https://github.com/nx-hanh/eCommerce",
    },
    {
      type: "Web",
      name: "Personal Portfolio",
      image: "https://i.ibb.co/N95hsqH/image.png",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS.",
      link: "https://nx-hanh.vercel.app",
      tags: ["React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/nx-hanh/dev-hank",
    },
    {
      name: "Batch Rename",
      type: "Desktop",
      image:
        "https://i.ibb.co/svknmqf/premium-photo-1677402408071-232d1c3c3787-q-80-w-1780-auto-format-fit-crop-ixlib-rb-4-0.jpg",
      description:
        "A window rename tool to help you rename multiple files or folders at once.",
      link: "",
      tags: ["CSharp", "WPF"],
      github: "https://github.com/nx-hanh/BatchRename",
    },
    {
      name: "CourseMinder",
      type: "Desktop",
      image:
        "https://i.ibb.co/SnSgshH/photo-1546410531-bb4caa6b424d-q-80-w-1771-auto-format-fit-crop-ixlib-rb-4-0.jpg",
      description:
        "A window application to help Teachers manage their courses and students, Students can check in their courses and see their schedule.",
      link: "",
      tags: ["Java Swing", "Hibernate"],
      github: "https://github.com/nx-hanh/Hibernate",
    },
  ],
};

const CV_LINK =
  "https://drive.google.com/file/d/1i2eUqZm8aqLbq9W0zVfrfQjDBPsKAUnC/view?usp=sharing";
const NavItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experiences", href: "#experience" },
  { name: "Projects", href: "/projects" },
];

const GIST_ID = "d717b4db92be677b44cded7b422b0e3c";
const GIST_FILENAME = "nx-hanh.json";

/*
 * Reads the JSON file inside of the gist
 */
export async function getUserData() {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

const NXH = {
  data: {} as Profile,
  async init() {
    this.data = await getUserData();
    return this;
  },
};

// Initialize immediately using an IIFE (Immediately Invoked Function Expression)
void (async () => {
  await NXH.init();
})();

export { CareerPathValue, ProjectsValue, CV_LINK, NavItems, NXH };
