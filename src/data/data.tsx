import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mark Dasco Profile',
  description: "Mark Dasco's profile page",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: ' ',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Dasco.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Australian Sydney based <strong className="text-stone-100">Software Engineering Leader</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">Tennis</strong>,
        coaching <strong className="text-stone-100">badminton</strong>, or simply hanging out with the wife and kids.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi! I'm Dasco, Mark Dasco to be exact, but everyone just calls me by my last name - Dasco. I'm a software engineering leader with over 20 years in the Software
  Industry. \n During my time, I've evolved from cutting code (which I still do in my spare time) towards building awesome engineering cultures. Whether it's small pizza-sized teams
  or multiple teams spanning a department, my core beliefs endure: culture eats strategy for breakfast, quality matters and if nothing changes - nothing changes.
  `,
  aboutItems: [
    {label: 'Location', text: 'Sydney, NSW Australia', Icon: MapIcon},
    {label: 'Nationality', text: 'Australian', Icon: FlagIcon},
    {label: 'Interests', text: 'Tennis, Badminton, Chess, Poker', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Technology Sydney', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking for next opportunity', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Leadership',
    skills: [
      {
        name: 'Engineering Strategy',
        level: 9,
      },
      {
        name: 'Scale',
        level: 8,
      },
      {
        name: 'Thought Leadership',
        level: 7,
      },
    ],
  },
  {
    name: 'Technical Skills',
    skills: [
      {
        name: 'Distributed Architectures',
        level: 9,
      },
      {
        name: '.net C# Development',
        level: 7.5,
      },
      {
        name: 'Node/React',
        level: 4,
      },
    ],
  },
  {
    name: 'Methodologies',
    skills: [
      {
        name: 'Scrum',
        level: 10,
      },
      {
        name: 'Kanban',
        level: 8,
      },
      {
        name: 'Waterfall',
        level: 4,
      },
    ],
  },
  {
    name: 'Communication',
    skills: [
      {
        name: 'Coaching & Mentoring',
        level: 9,
      },
      {
        name: 'Inspiration',
        level: 6,
      },
      {
        name: 'Facilitation',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url:'',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Jun 2004',
    location: 'University of Technology Sydney',
    title: 'Bachelors Degree in Software Engineering Diploma in Engineering Practice',
    content: <p>Learnt the difference between being just a coder vs being an engineer, to create software that endures!</p>,
  },
  {
    date: 'Jun 2004',
    location: 'University of Technology Sydney',
    title: 'Bachelor of Business in Finance',
    content: <p>Learnt all about applied finance as it relates to the corporate world. Didn't end up using it :-).</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2019 - Aug 2023',
    location: 'Elmo Software',
    title: 'Head of Engineering',
    content: (
      <p>
         Oversee strategic and operational initiatives for ELMO's R&D Engineering team, consisting of 80 - 90 
         onshore and offshore engineers distributed across 12+ scrum teams. Accountable for rapid and sustainable, technical delivery of 
         outcomes alongside contemporary engineering processes and practices. Setup the engineering department to operate at scale in terms of people, process
         and technology.
      </p>
    ),
  },
  {
    date: 'Jun 2016 - Sep 2019',
    location: 'nib Travel',
    title: 'Head of Software Development and Applications',
    content: (
      <p>
         Management oversight across 4 development teams and application support team, consisting of 25-30 Permanent Headcount and pool of contractors (5-10).
         Motivate teams and create a strong culture of engineering excellence and continuous improvement. Responsible for the development and execution 
         of 3-5 year cloud-first strategic direction. Act in a technical and process leadership role, mentoring and coaching teams, leaders and individuals 
         towards successful delivery.
      </p>
    ),
  },
  {
    date: 'Apr 2014 – Jun 2016',
    location: 'World Nomads Group',
    title: 'Software Development Manager',
    content: (
      <p>
         Adopted and implemented agile development best-practices across several development teams. Enacted CI/CD and Continous 
         Improvement, cultivated product and technical backlogs, whilst also addressing technical debt. Maintained a continued hands on approach
         with key responsibility collaborating with development teams and chief architect to validate and approve designs and implementation ensuring 
         they fall in-line with the overall solution and enterprise architecture.
      </p>
    ),
  },
  {
    date: 'Apr – Apr 2014',
    location: 'World Nomads Group',
    title: 'Team Lead Software Developer',
    content: (
      <p>
        Responsible for teams delivering high quality code and setting the standard for development teams to follow. 
        Assessing new technologies and providing technical leadership when necessary.
        Key technologies involved: .Net 4.0, C# ASP .net MVC 3.5, ASP .net, Entity Framework, Angular JS\,
        Selenium, Sass, NUnit, Unity 2.0, TFS 2013, Jira, Confluence, Sql Server 2014 Database, Reporting
        Services, Analysis Services, Octopus Deploy, RabbitMq, M-Files, Puppet Enterprise. 
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Faraz Ali Zuberi',
      text: 'Dasco has been one of the most influential and inspiring mentors at ELMO. As Head of Engineering, he\'s overseen a complete transformation of ELMO\'s R&D department with strong focus on high quality engineering. Following his vision, our autonomous teams went from monolith to microservices, introduced trunk-based development, upgraded legacy systems and built critical platform tools that will service our R&D for years to come. He is an excellent communicator and a patient listener. His knack for bringing teams together has seen our department overcome many challenges. He introduced OKRs at ELMO to achieve sustained and measurable outcomes. He\'s proven to be a capable, versatile and transformational leader and his tenacity and vision can take any organization to new heights.',
      image: 'https://media.licdn.com/dms/image/C4D03AQHGfdSopoRs9A/profile-displayphoto-shrink_200_200/0/1516484293739?e=1696464000&v=beta&t=zVpeor38LZMBZbPasiO-LZoeaedEAn9JsTpF9Mw47-I',
    },
    {
      name: 'Dinesh Gurram',
      text: 'Damn he\'s good.',
      image: 'https://media.licdn.com/dms/image/C5103AQHnee3_0hkr_g/profile-displayphoto-shrink_100_100/0/1552312238708?e=1696464000&v=beta&t=GF2_hhme6ViMoKsowzESfHLmu3BjYnBRsmKMaKVKBHAhttps://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Samuel Sun',
      text: 'ToDo',
      image: 'https://www.linkedin.com/in/samuel-sun-sydney?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAH3deEB99_p3FHsykjdZLgi1huOQKKbKTA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhrRQiV3sSximsT%2FuaeTFXg%3D%3D',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Best way to get in touch is to reach out via email!',
  items: [
    {
      type: ContactType.Email,
      text: 'm.dasco@gmail.com',
      href: 'mailto:m.dasco@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Sydney, Australia',
      href: 'https://www.google.com/maps/d/viewer?mid=1Pqm2ziDxO5YoYzFGoqlBoDxTBCs&hl=en&ll=-33.873760049174415%2C151.20918965&z=12',
    },
    {
      type: ContactType.Github,
      text: 'mldasco',
      href: 'https://github.com/mldasco',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mldasco'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://au.linkedin.com/in/mark-dasco-26b7855/'},
];
