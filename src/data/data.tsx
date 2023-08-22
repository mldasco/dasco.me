import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  //CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
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
import profilepic from '../images/profilepicture.jpg';
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
  Portfolio: 'portfolio',
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
        I'm an Australian Sydney based <strong className="text-stone-100">Software Engineering Leader</strong> with over
        20 years experience in the software industry and specialisations in HR Tech, Travel Tech, Insurance, Gaming and
        Finance. I'm a big believer that creating well-engineered software solutions is primarily a people problem,
        hence my philosophy that great tech requires the right people operating in the right culture.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">tennis</strong>, coaching{' '}
        <strong className="text-stone-100">badminton</strong>, or simply hanging out with the wife and kids.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      target: '_blank',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      target: '',
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
    title: 'DevOps for the win',
    description: `Fast software release cycles are a critical component for high performing agile teams.
    Whether dealing with microservices or monoliths, this is a non-negotiable. 
    With modern approaches such as trunk-based development, feature flagging and backwards compatible DB migrations, alongside key technologies like K8s, Jenkins etc, with hard work - I've found it's always possible!
    I've lead multiple teams and organisations on complex projects that have reduced release cycle times from monthly deploys to multiple deploys per day!`,
    image: porfolioImage1,
  },
  {
    title: 'Leaders create leaders',
    description: `As a software leader, it's been a great privilege for me to coach and mentor staff under my remit to grow and develop to be their own leaders.
    From engineering managers to heads of departments, tech leads to architects and junior devs to senior devs, I'm proud of a track record of empowering and growing more leaders.
    A key philosophy I mention to team members I coach/mentor, "We're not here to keep you, we're here to make you ready for your next role."`,
    image: porfolioImage2,
  },
  {
    title: 'Data-informed Cultures',
    description: `Whether it's a sweeping change to introduce OKRs to the organisation, tracking key departmental metrics, or simply making it a habit to review key metrics during retrospectives within teams, I lean heavily towards data-informed decisions.
    I have clear track record in empowering and enabling teams with data. Time and time again I've found it leads to better ideas, ensures buy-in from stakeholders and biases individuals and teams towards action.`,
    image: porfolioImage3,
  },
  {
    title: 'Developer Productivity',
    description: `Enabling and measuring Developer Productivity is a very tricky problem I've always wanted to solve. An engaged and productive work-force can be the difference towards successful result-driven teams.
    I've introduced frameworks, such as SPACE and DevXP to get better measures and a better handle on productivity on the ground. I've found that a focus on flow, reducing cognitive load and faster feedback loops to be the key determinants of developer productivity.
    I've managed to push through multiple initiatives to improve developer productivity such as Focus-Time, no meeting days, root-cause analysis of developer pain points, as well as commencing the introduction of AI into the developer experience.`,
    image: porfolioImage4,
  },
  {
    title: 'Microservice Migrations',
    description: `I've had numerous experiences with monolith to microservice re-platforms during my career, both as an engineer and as a software leader. I've seen great success but also several failures.
    These migrations can be extremely difficult and are fraught with complexity. Over the years, I've become less dogmatic and have leant towards pragmatism and simplicity in making these decisions.
    I encourage teams to carefully scrutinise their need for these migrations. Data integrity, engineering experience and operational concerns are often overlooked in making these assessments.`,
    image: porfolioImage5,
  },
  {
    title: 'Offshore Dev Hubs',
    description: `I've had multiple experiences in setting up and operating overseas development hubs (Ukraine & the Philippines), hiring offshore developers to augment local on-shore capabilities. Although, not without its challenges, such as timezone and cultural differences, I've proven every time that the model works.
    I've found that ensuring we treat off-shore staff equally, embedding within teams, investing in their growth and over-communicating as the key determinating factors for success!`,
    image: porfolioImage6,
  },
  {
    title: 'Budgets and Cents',
    description: `I've often been charged with both CAPEX and OPEX budgets for teams and departments. This responsibility can range into the millions, as such, careful consideration as to how the invesment is spent requires a great deal of thought and consideration.
    Allocating resource and investment is often a non-trivial exercise, and has direct impact on the bottom line, but also team morale and engagement. My philosophy when it comes to budgets and resource allocation, is one centred on long term ROI and global optimisation.`,
    image: porfolioImage7,
  },
  {
    title: 'Employee Experience',
    description: `From hiring to offboarding, a key emphasis I've focused on lately is the overall employee experience.
    At the recruitment phase, my aim is to create advocates for the company whether candidates are successful or not. With the right tooling, we ensure that our people have an excellent onboarding experience and contribute within their teams as quickly as possible. 
    During their time with the company, staff should be engaged, empowered and productive. They should have a clear picture of what success looks like and have unambigous career pathways within the organisation.`,
    image: porfolioImage8,
  },
  {
    title: 'Badminton Coaching',
    description: `After obtaining my BWF (Badminton World Federation) Coaching credentials in 2015, I went on to coach several juniors to win the Australian Junior National Championships 3 years in a row!
    I continue to coach juniors and adults, although more for social play in a less competitive environment.
    I also run a community social badminton club, which has been going strong for over 15 years.`,
    image: porfolioImage9,
  },
  {
    title: 'Organisational Redesigns',
    description: `Towards functional, cross-functional, product, capability, platform, value-stream-based teams, you name it, I've seen it. I've often been the catalyst for multiple organisational redesigns that strongly aligns business and customer outcomes to how teams operate and what they are responsible for.
    Org changes are HARD and incredibly disruptive. Without the buy-in from our people on the ground, and clear unambigous roles and responsibilities at an individual and team level, it simply doesn't work.
    I find that over-communicating a clear rationale, accepting and inviting the need for feedback and iteration, as well as identifying and utilising champions are key factors in successful org restructures`,
    image: porfolioImage10,
  },
  {
    title: 'QHPonds-Tennis',
    description: `As a side hustle, I lease out tennis courts on behalf of my local council. To automate the process efficiently, I integrated several SAAS providers for booking systems, SMS notification providers, no-code workflow platforms alongside my own custom built .net lambda functions.
    These lambda functions are invoked via webhooks and used to control IOT locks and IOT light switches via API or SMS commands.
    All in all, the customer receives lock-codes to the padlock via SMS before their booking commences and lights automatically turn on at the right time if they have a night booking.
    Check it out at www.qhponds.tennis`,
    image: porfolioImage11,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Jun 2004',
    location: 'University of Technology Sydney',
    title: 'Bachelors Degree in Software Engineering Diploma in Engineering Practice',
    content: (
      <p>Learnt the difference between being just a coder vs being an engineer, to create software that endures!</p>
    ),
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
    title: 'Head of Engineering / Engineering Manager',
    content: (
      <p>
        Oversee strategic and operational initiatives for ELMO's R&D Engineering team, consisting of 80 - 90 onshore and
        offshore engineers distributed across 12+ scrum teams. Concurrently acted as an Engineering Manager for 2 scrum
        teams. Accountable for rapid and sustainable, technical delivery of outcomes alongside contemporary engineering
        processes and practices. Setup the engineering department to operate at scale in terms of people, process and
        technology.
      </p>
    ),
  },
  {
    date: 'Jun 2016 - Sep 2019',
    location: 'nib Travel',
    title: 'Head of Software Development and Applications',
    content: (
      <p>
        Management oversight across 4 development teams and an application support team, consisting of 25-30 Permanent
        Headcount and pool of contractors (5-10). Motivate teams and create a strong culture of engineering excellence
        and continuous improvement. Responsible for the development and execution of 3-5 year cloud-first strategic
        direction. Act in a technical and process leadership role, mentoring and coaching teams, leaders and individuals
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
        Adopted and implemented agile development best-practices across several development teams. Enacted CI/CD and
        Continous Improvement, cultivated product and technical backlogs, whilst also addressing technical debt.
        Maintained a continued hands on approach with key responsibility collaborating with development teams and chief
        architect to validate and approve designs and implementation ensuring they fall in-line with the overall
        solution and enterprise architecture.
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
        Assessing new technologies and providing technical leadership when necessary. Key technologies involved: .Net
        4.0, C# ASP .net MVC 3.5, ASP .net, Entity Framework, Angular JS\, Selenium, Sass, NUnit, Unity 2.0, TFS 2013,
        Jira, Confluence, Sql Server 2014 Database, Reporting Services, Analysis Services, Octopus Deploy, RabbitMq,
        M-Files, Puppet Enterprise.
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
      name: 'Faraz Ali Zuberi (Solutions Architect)',
      text: "Dasco has been one of the most influential and inspiring mentors at ELMO. As Head of Engineering, he's overseen a complete transformation of ELMO's R&D department with strong focus on high quality engineering. Following his vision, our autonomous teams went from monolith to microservices, introduced trunk-based development, upgraded legacy systems and built critical platform tools that will service our R&D for years to come. He is an excellent communicator and a patient listener. His knack for bringing teams together has seen our department overcome many challenges. He introduced OKRs at ELMO to achieve sustained and measurable outcomes. He's proven to be a capable, versatile and transformational leader and his tenacity and vision can take any organization to new heights.",
      image:
        'https://media.licdn.com/dms/image/C4D03AQHGfdSopoRs9A/profile-displayphoto-shrink_200_200/0/1516484293739?e=1696464000&v=beta&t=zVpeor38LZMBZbPasiO-LZoeaedEAn9JsTpF9Mw47-I',
    },
    {
      name: 'Dinesh Gurram (Head of Engineering)',
      text: 'My career has been closely intertwined with Dasco’s. I’ve worked closely with him in a number of roles over the years and witnessed his growth into an astute, practical and down-to-earth technology leader. He is as comfortable guiding and debating architecture, as he is presenting fearlessly to the C suite, as he is building up talented teams. Definitely one of a kind.',
      image:
        'https://media.licdn.com/dms/image/C5103AQHnee3_0hkr_g/profile-displayphoto-shrink_100_100/0/1552312238708?e=1696464000&v=beta&t=GF2_hhme6ViMoKsowzESfHLmu3BjYnBRsmKMaKVKBHA',
    },
    {
      name: 'Samuel Sun (CTO)',
      text: 'Dasco has demonstrated exemplary leadership as the Head of Development at ELMO. His expansive knowledge base and profound experience in engineering have been instrumental in delivering tremendous benefits to our team. During the scale-up phase, his significant contributions to research and development have played a crucial role in shaping the direction and success of the company. As an adept and humble leader, Dasco has nurtured and grown a cadre of reliable leaders within the team, fostering an environment of collaboration and excellence. By implementing robust engineering practices and processes, he guided us seamlessly through the critical 1 to N growth phase at ELMO. It was an honour to work alongside him on this journey, witnessing firsthand his impact on our organisation. His leadership continues to resonate as a hallmark of professionalism and innovation.',
      image:
        'https://media.licdn.com/dms/image/C4E03AQEVY4F1WIZsXg/profile-displayphoto-shrink_100_100/0/1516350099420?e=1697068800&v=beta&t=pEy_XeiDGK0LDv3BCaXtg1Z56fDiHD34A9xwLtgRNC0',
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
