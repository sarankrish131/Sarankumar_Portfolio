// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import SwaggerLogo from './assets/tech_logo/Swagger.png';
import figmaLogo from './assets/tech_logo/figma.png';
import Nifilogo from './assets/tech_logo/apache_nifi.png';
import KafkaLogo from './assets/tech_logo/Apache Kafka.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import ASpNetLogo from './assets/tech_logo/NET core.png';


// Experience Section Logo's
import MentheeLogo from './assets/company_logo/Menthee_logo.png';
import ConpreqLogo from './assets/company_logo/Conpreq_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';

// Project Section Logo's
import DatamigrationLogo from './assets/work_logo/Uncia_DataMigration.png';
import TVSLogo from './assets/work_logo/TVS_logo.png';
import ApachenifiLogo from './assets/work_logo/Apachenifi_DataMig.png';
import RmkvLogo from './assets/work_logo/Rmkv_logo.png';
import CloudLogo from './assets/work_logo/Menthee_Cloud.png';
import ManpowerLogo from './assets/work_logo/Manpower_Hrms.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
       { name: 'MySQL', logo: mysqlLogo },
      // { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MicroSoft ASP.NetCore', logo: ASpNetLogo },

    ],
  },
  {
    title: 'Languages',
     skills: [
    //   { name: 'C', logo: cLogo },
    //   { name: 'C++', logo: cppLogo },
    //   { name: 'Java', logo: javaLogo },
    //   { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
       { name: 'Swagger', logo: SwaggerLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Apache Nifi', logo: Nifilogo },
      { name: 'Apache Kafka', logo: KafkaLogo },

    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: MentheeLogo,
      role: "Junior Fullstack Developer",
      company: "Menthee Technologies Private Limited",
      date: "February 2024 - Present",
      desc: "As a Junior Full Stack Developer at Menthee Technologies Private Limited, I was responsible for developing and maintaining a scalable web application utilizing Angular for the frontend, ASP.NET Core for the backend, and SQL Server for the database layer. My role included implementing responsive and user-friendly UI components, integrating RESTful APIs, and managing server-side logic to ensure smooth data communication between client and server. I collaborated closely with cross-functional teams to deliver features aligned with business requirements, performed unit testing, and contributed to debugging and performance tuning. Additionally, I was actively involved in client-side project development and support for Uncia Technologies Private Limited and TVS Credit, where I contributed to UI enhancements, data integration, and end-to-end deployment support.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Node JS",
        "C#",
        "ASP.NET Core",
        "SQL",
        "Apache Nifi",
        "PostgreSQL",
        "Oracle",
      ],
    },
    {
      id: 1,
      img: ConpreqLogo,
      role: "Fullstack Engineer",
      company: "Conpreq Technologies Private.Limited",
      date: "Octomber 2022 - January 2024",
      desc: "I began my career as a Full Stack Developer at CONPRG Technologies (OPC) Pvt Ltd, where I was actively involved in designing, developing, and maintaining robust web applications for the client RMKV Silks Private Limited. My responsibilities included building responsive front-end interfaces using Angular, developing scalable backend services with ASP.NET Core, and managing data persistence and optimization using SQL Server. I collaborated closely with UI/UX designers, backend engineers, and client stakeholders to ensure the application met business goals and performance standards. This role helped me gain hands-on experience in full stack development, enhance my problem-solving skills, and deliver efficient, maintainable code in a production environment.",
      skills: [
        "HTML",
        "CSS",
        "TypeScript",
        "C#",
        "ASP.NET Core",
        "SQL",
        "PostgreSQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Sasurie College Of Engineering",
      date: "Sept 2012 - July 2018",
      grade: "6.24 CGPA",
      desc: "Completed a comprehensive undergraduate program in Mechanical Engineering at Sasurie College of Engineering. The curriculum provided a strong foundation in core engineering principles including thermodynamics, fluid mechanics, and manufacturing processes. Throughout the course, I developed analytical thinking, problem-solving abilities, and a disciplined approach to engineering challenges. My time at Sasurie College also instilled teamwork and technical communication skills, which I later transitioned into the software development industry through self-driven learning and project work.",
      degree: "Bachelor of Mechanical Engineering",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Sri Vinayaga Matric Higher Secondary School",
      date: "Sept 2010 - Aug 2012",
      grade: "73.2%",
      desc: "Pursued higher secondary education with a focus on Biology and Mathematics, providing a balanced foundation in both life sciences and analytical reasoning. This combination strengthened my logical problem-solving abilities through mathematics while also enhancing my understanding of biological concepts. The Bio-Maths stream fostered discipline, critical thinking, and a versatile academic approach, which later supported my transition into the engineering and software development field.",
      degree: "12th Grade – Bio-Mathematics",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Data Migration Flow in SCF and LMS",
      description:
        "Worked on the end-to-end development of a Data Migration module for integrating SCF (Supply Chain Finance) and LMS (Loan Management System) platforms. The project involved building a secure and scalable migration pipeline to extract, validate, transform, and load large volumes of structured data between legacy systems and modern applications.",
      image: DatamigrationLogo,
      tags: ["HTML", "CSS", "Typescript", "ASP.Net Core", "SQL"],
      webapp: "https://unciaflow-dev.uncia.ai/",
    },
    {
      id: 1,
      title: "Gold Auction Module Management - TVS Credit",
      description:
        "Contributed to the design and development of a comprehensive Gold Auction Management Module to streamline the auction process for pledged gold assets within TVS Credit's financial services ecosystem. This project aimed to digitize and automate workflows for managing gold loan defaults and asset liquidation, ensuring regulatory compliance and operational transparency.",
      image: TVSLogo,
      tags: ["HTML", "CSS", "Typescript", "ASP.Net Core", "SQL"],
      webapp: "https://webonelmsqa.tvscredit.com/auth/login",
    },
    {
      id: 2,
      title: " Data Migration Core Tool Setup - TVS Credit",
      description:
        "Developed a robust Data Migration Core Tool for TVS Credit to facilitate seamless and secure migration of enterprise data across core platforms such as SCF (Supply Chain Finance) and LMS (Loan Management System). This tool was designed to handle complex data flows, validations, and transformation processes between legacy and new systems.Using a new techology specification of data processing and Quick Analatics of data Integration apply Datamigration",
      image: ApachenifiLogo,
      tags: ["HTML", "CSS", "Typescript", "ASP.Net Core","Apache Nifi", "SQL"],
      //github: "https://github.com/codingmastr/Movie-Recommendation-App",
      //webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Menthee Website & Cloud Development",
      description:
        "Led the design and development of Menthee's official web platform and integrated cloud-based subscription services for its proprietary digital products. This project aimed to provide a seamless experience for users to explore Menthee's offerings, subscribe to pricing plans, and manage their usage through a centralized dashboard.",
      image: CloudLogo,
      tags: ["HTML", "CSS", "Typescript", "ASP.Net Core","Razorpay", "SQL"],
      // github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://menthee.com/index.html",
    },
    {
      id: 4,
      title: "RMKV Pvt Ltd – Billing & Silk Wrap Trading System",
      description:
        "Developed a comprehensive billing and inventory management system, integrating modules for inventory tracking, barcode-based billing, GST compliance, and silk wrap trading. Implemented real-time stock updates and designed dynamic sales and inventory dashboards using FastReport for actionable business insights.",
      image: RmkvLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      // github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "https://rmkv.com/pages/about-us",
    },
    {
      id: 5,
      title: "Southern Manpower Management - HRMS",
      description:
        "Designed and developed core HRMS modules including employee onboarding, payroll processing, and leave management. Implemented custom workflow automation, role-based access control (RBAC), and dynamic payroll and attendance reporting using FastReport to enhance operational efficiency and data security.",
      image: ManpowerLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      // github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://hrms.manpoweronline.in/Login.aspx",
    }
    
  ];  