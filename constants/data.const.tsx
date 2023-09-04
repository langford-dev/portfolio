import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { motion } from "framer-motion";

export const SOCIALS: {
  label: string;
  link: string;
  icon: JSX.Element;
}[] = [
  {
    label: "github",
    link: "https://github.com/langford-dev",
    icon: <FiGithub size={20} />,
  },
  {
    label: "instagram",
    link: "https://instagram.com/langford_dev",
    icon: <FaInstagram size={20} />,
  },
  {
    label: "x",
    link: "https://x.com/langford_dev",
    icon: <RxTwitterLogo size={20} />,
  },
  {
    label: "mail",
    link: "mailto:langfordquarshie21@gmail.com",
    icon: <HiOutlineMail size={20} />,
  },
  {
    label: "imessage",
    link: "imessage:langfordquarshie@icloud.com",
    icon: <BiMessageRounded size={20} />,
  },
];

export const PROJECTS: {
  title: string;
  image: string;
  description: string;
  link?: string;
}[] = [
  {
    title: "vapourware studios",

    image: "/assets/images/projects/vapourware-studios.png",
    link: "https://www.vapourwarestudios.co/",
    description: "a website for a software and creative design agency",
  },
  {
    title: "wedey",

    image: "/assets/images/projects/wedey.png",
    link: "https://www.wedey.co/",
    description: "we bringing the local markets to you",
  },
  {
    title: "magna nft",

    image: "/assets/images/projects/magna.png",
    link: "https://www.buymagna.com/",
    description:
      "a free mint storytelling nft project aimed at onboarding newbies into the web3 ecosystem",
  },
  {
    title: "brylluslisten",

    image: "/assets/images/projects/byllupslisten.png",
    link: "https://bryllupslisten.no/",
    description:
      "The wedding list is a wishlist that allows you to gather your wishes in one place and easily share the list with the wedding guests",
  },
  {
    title: "waverpass nft",

    image: "/assets/images/projects/waverpass.png",
    link: "https://www.waverpass.com/",
    description:
      "1,000 passes available for mint, owning a Waver Pass grants holders access to products, tools and projects exclusively built and owned by Openwaver for free",
  },
  {
    title: "tv anywhwere africa",

    image: "/assets/images/projects/tv-anywhere-africa.png",
    link: "https://tvanywhereafrica.vercel.app/",
    description:
      "a platform for delivering high-quality, live and on-demand streaming content",
  },
  {
    title: "ordinary strangers nft",

    image: "/assets/images/projects/ordinary-strangers-nft.png",
    link: "https://www.ordinarystrangers.com/",
    description: "an nft project's minting and landing page",
  },
  {
    title: "nft aio",

    image: "/assets/images/projects/nft-aio.png",
    link: "https://nft-aio.vercel.app/",
    description: "a landing page for an nft project",
  },
  {
    title: "mcini tv",

    image: "/assets/images/projects/mcini-tv.png",
    link: "https://mcini.tv/",
    description: "a web app for streaming movies",
  },
  {
    title: "richfaith recruitment agency",

    image: "/assets/images/projects/richfaith-recruitment-agency.png",
    link: "https://richfaithrecruitment.com/",
    description:
      "a company that connects talented individuals to international opportunities in a variety of industries",
  },
];

export const JOB_EXPERIENCE: { companyName: string; jobTitle: string; years: string }[] =
  [
    {
      companyName: "vapourware studios",
      jobTitle: "co-founder & software developer",
      years: "2018",
    },
    {
      companyName: "desense co",
      jobTitle: "software developer",
      years: "2021",
    },
    {
      companyName: "clever programmer",
      jobTitle: "frontend web developer (web3)",
      years: "2022",
    },
    {
      companyName: "openwaver tech ltd",
      jobTitle: "lead frontend developer (web3)",
      years: "2021",
    },
    {
      companyName: "tv anywhere africa",
      jobTitle: "software developer",
      years: "2022",
    },
    {
      companyName: "kabb co",
      jobTitle: "software developer",
      years: "2023",
    },
    {
      companyName: "hashnode",
      jobTitle: "technical writer",
      years: "2022",
    },
    {
      companyName: "klick n build",
      jobTitle: "frontend software developer",
      years: "2022",
    },
  ];

export const SKILLS = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Node.js",
  "JavaScript",
  "Typescript",
  "Flutter",
  "React native",
  "REST APIs",
  "CSS",
  "SaSS",
  "Tailwind CSS",
  "HTML",
  "Web3.js",
  "Ethers.js",
  "Thirdweb",
  "Moralis SDK",
  "Responsive design",
  "Smart contract integration",
];

export const MAIN_CONTENT: { left: JSX.Element; right: JSX.Element }[] = [
  {
    left: (
      <div className="grid gap-2">
        <h2 className="text-xl">langford kwabena</h2>
        <p className="text-textGrey">software developer</p>
      </div>
    ),
    right: (
      <div className="grid gap-5">
        <p>
          i&apos;m langford, a passionate software developer specialized in web and mobile
          app development
        </p>
        <p>
          With a deep love for coding and problem-solving, I thrive on creating innovative
          solutions that address real-world challenges.
        </p>
        <p>
          My journey as a developer has been marked by a commitment to continuous learning
          and a dedication to delivering exceptional results. Let&apos;s connect and
          explore how I can contribute to your next project.
        </p>
        <ul className="flex gap-5">
          {SOCIALS.map((social, index: number) => (
            <li key={index}>
              <Link
                className="w-[30px] h-[30px] transition-all hover:bg-[#f2f2f2] rounded-full p-1 block flex items-center justify-center"
                rel="noreferrer"
                target="_blank"
                href={social.link}
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="flex gap-10 items-center justify-between">
          <div className="flex-1 flex items-center gap-2">
            <input
              className="outline-none border w-full px-2 rounded-md"
              placeholder="send me an email"
            />
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black text-white rounded-full outline-none border-none w-[33px] h-[30px] flex items-center justify-center"
            >
              <FiArrowUpRight />
            </motion.button>
          </div>
          
        </div> */}
      </div>
    ),
  },
  {
    left: <h2 className="text-xl mb-4 md:mb-0">experience &amp; work history</h2>,
    right: (
      <ul className="grid md:grid-cols-2">
        {JOB_EXPERIENCE.map((job, index) => (
          <li key={index} className="pb-5 mb-5 grid gap-2">
            <div>
              <h2>{job.companyName}</h2>
              <h2>{job.jobTitle}</h2>
            </div>
            <p className="text-textGrey">{job.years}</p>
          </li>
        ))}
      </ul>
    ),
  },
  {
    left: <h2 className="text-xl mb-4 md:mb-0">my skills</h2>,
    right: (
      <ul className="grid gap-3 grid-cols-2">
        {SKILLS.map((skill, index) => (
          <li key={index}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    ),
  },
  {
    left: <h2 className="text-xl mb-4 md:mb-0">my works</h2>,
    right: (
      <ul className="grid gap-10">
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <Link
              className="grid gap-3 transition-all"
              href={project.link || ""}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-center">
                <h2 className="mr-2 text-black hover:text-brand transition-all">
                  {project.title}
                </h2>
                <FiArrowUpRight className="ml-1 text-textGrey" />
              </div>

              <Image
                src={project.image}
                alt={`screenshot of ${project.title} project`}
                width={600}
                height={600}
                className="object-contain rounded-2xl bg-[#F2F2F2]"
              />
            </Link>
          </li>
        ))}
      </ul>
    ),
  },
];