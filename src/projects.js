export const items = [
  {
    id: 1,
    title: "Blog Application Using Next js 14",
    img: "blog.png",
    desc: "<b>Next Blog</b> is an application that enables users to explore and comment on others' blogs, while also providing the option to create personalized blogs in different categories. The application is built on the <b>Next 14</b> full-stack framework, utilizing Tailwind for styling, <b>MongoDB</b> for the database, <b>Prisma</b> for ORM (Object Relational Mapping), <b>NextAuth</b> for authentication, and <b>Shadcn</b>. <b>PrimeReact</b> is employed for the development of UI components and themes, ensuring a seamless and feature-rich user experience.",
    git: "https://github.com/Hariharan10202/blog",
    demo: "https://blog-hariharan10202.vercel.app/",
  },

  {
    id: 2,
    title: "Admin Dashboard Using Next js 14",
    img: "admin.png",
    desc: "<b>Next Admin</b> is a dashboard designed for administrators, offering robust management capabilities for users and products, including create, read, update, and delete operations using server actions. The application supports sorting and filtering of users or products. It is built on the <b>Next 14</b> full-stack framework with styling powered by <b>Tailwind</b>. <b>MongoDB</b> serves as the database, <b>NextAuth</b> ensures secure authentication, and <b>PrimeReact</b> is utilized for UI components and themes. Recharts is incorporated for visualizing charts and bars, enhancing the overall functionality and user experience.",
    git: "https://github.com/Hariharan10202/admin-dashboard",
    demo: "https://admin-dashboard-hariharan10202.vercel.app/",
  },
  {
    id: 3,
    title: "Discord Clone Using Next 13",
    img: "discord.svg",
    desc: "This <b>Discord Clone</b> is a comprehensive application developed on the <b>Next</b> full-stack framework with <b>Tailwind</b> for styling and <b>Shadcn</b> for UI components and themes. <b>MongoDB</b> serves as the database, while Clerk handles authentication, and <b>Uploadthing</b> manages storage for <b>images, PDFs, and videos</b>. The clone supports creating, editing, and deleting multiple servers and channels, inviting members, and <b>real-time chat functionality. Additionally, users can engage in video and audio interactions</b> with Livekit integration.",
    git: "https://github.com/Hariharan10202/discord-clone",
    link: "",
  },
  {
    id: 4,
    title: "Spotify Clone Using Next 14",
    img: "spotify.svg",
    desc: "This <b>Spotify Clone</b> is a full-stack application built on <b>Next 14</b> framework, utilizing <b>Tailwind</b> for styling, <b>Shadcn</b> for building UI components and themes, and <b>Supabase</b> for database, storage, and authentication. The clone functionality includes playing songs and uploading new ones, complete with author, title, audio file, and poster image configurations. Users can create their own libraries and manage liked songs for a personalized music experience.",
    git: "https://github.com/Hariharan10202/spotify-clone",
    demo: "https://spotify-clone-l755vlh84-hariharan10202.vercel.app/",
  },
];

export const experience = [
  {
    id: 1,
    title: "UI Library using Vanilla JS",
    img: "ui-library.png",
    desc: "Implemented a UI library using <b>HTML</b>, <b>Sass</b>, and <b>Vanilla JavaScript</b> from scratch is a concept designed to achieve consistency, efficiency, scalability, and maintainability in a product. This UI library encompasses various components, including buttons, icons, radio buttons, dropdowns, multiselects, autocompletes, and more. The primary goal is to establish a cohesive and standardized design language throughout the product, ensuring a consistent user experience. By incorporating reusable components and design patterns, this library promotes efficiency in both the design and development processes.",
  },
  {
    id: 2,
    title: "Enterprise Layout",
    img: "enterprise.png",
    desc: "The Enterprise Layout stands as a pivotal feature within our product architecture, meticulously constructed with cutting-edge technologies such as <b>React</b>, <b>Sass</b>, <b>Redux</b>, and the powerful <b>PrimeReact</b> library. This layout is specifically designed to deliver a meticulous visualization of product details, going beyond the basics to include advanced functionalities. Among its notable capabilities are sophisticated sorting and filtering mechanisms, seamless export of JSON data, and efficient lazy loading for enhanced performance. The implementation of the PrimeReact library significantly contributes to the layout's effectiveness, elevating it to a crucial element within our product offering.",
  },
  {
    id: 3,
    title: "Clone Product",
    img: "clone.png",
    desc: "During the product migration, Did a proof of concept by replicating our exact product using <b>React</b>, <b>Redux</b>, <b>Sass</b> and <b>PrimeReact</b>. This involved integrating the real API of our product. Leveraging reusable components and adopting app-wide state management through Redux significantly enhanced the application's consistency and maintainability, resulting in a notable improvement of 30%.Additionally, we optimized the time complexity of API fetching from <b>O(n^4) to O(n^3)</b> by implementing a hash map in JavaScript. This improvement in data retrieval efficiency contributes to a more responsive and streamlined user experience, aligning with the overall goals of the migration process.",
  },
  {
    id: 4,
    title: "Anchor PDF",
    img: "pdf.svg",
    desc: "Anchor PDF is a feature-rich application built using <b>React</b>, <b>Redux</b>, <b>Framer Motion</b>, and <b>PrimeReact</b>. It facilitates the customization and creation of PDFs from scratch, allowing users to add headers, bodies, and footers. The application supports operations like insertion, deletion, and modification of fields and data points within PDFs. Users can easily customize styling elements such as background color, text color, and border properties. Anchor PDF also enables the management of multiple PDF templates for a single user, Anchor PDF provides a seamless experience for efficient document customization and creation.",
  },
];

export const skills = [
  {
    name: "React js",
    Image: "react.svg",
    skills: [
      "State and Lifecycle",
      "Hooks",
      "Event Handling",
      "Conditional Rendering",
      "Forms in React",
      "Redux",
      "React Hooks for Async Data",
    ],
  },
  {
    name: "Next js",
    Image: "nextjs.svg",

    skills: [
      "App Routing",
      "Dynamic import",
      "Server Components",
      "Server Actions",
      "Pages and Layouts",
      "Event Handling",
      "Error Handling",
      "Promises and async/await",
    ],
  },
  {
    name: "Tailwind",
    Image: "tailwind.svg",
    skills: [
      "Typography",
      "Colors",
      "Flex box",
      "Grid Layouts",
      "Dark Mode",
      "Hover, Focus and etc,.",
      "Spacing Utilities",
      "Responsive Design",
    ],
  },
  {
    name: "Prisma",
    Image: "prisma.svg",
    skills: [
      "Schema",
      "Models",
      "Data Types",
      "Relations",
      "CRUD",
      "Database Connectors",
    ],
  },
  {
    name: "Typescript",
    Image: "typescript.svg",
    skills: [
      "Static Typing",
      "Type Annotations",
      "Interfaces",
      "Enums",
      "Generics",
      "Union and Intersection Types",
    ],
  },
  {
    name: "Next Auth",
    Image: "nextauth.svg",
    skills: [
      "Authentication adn Authorization",
      "Credentials,Google, Github and Facebook",
    ],
  },
  {
    name: "Firebase",
    Image: "firebase.svg",
    skills: ["Authentication adn Authorization", "CRUD", "Cloud Storage"],
  },
];
