import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Rizq Rahi-FYP:(From People to people)',
        description: "”Rizq Rahi,” a mobile and web app connecting surplus food from restaurants to NGOs, reducing food waste and alleviating hunger. Developed features like real-time tracking and secure data management for efficient food donation coordination.",
        tools: ['Express', 'PostgreSql', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Google Maps Api', 'JWT', 'EC2', 'PM2', 'Prizma'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'NetBit',
        description: 'Successfully developed a platform combining features from IMDB and Netflix, utilizing the MERN stack. Tailwind CSS was employed for a polished user interface. The application allows users to browse, search, and interact with a variety of movie and TV show content. Integrated Firebase Storage for primary multimedia storage and Youtube APIs for viewing trailers. Deployed the project on Vercel in its initial phase.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'FleetHub',
        description: 'FleetHub is a comprehensive fleet management application designed to streamline operations and improve efficiency. Built using React, Node.js, Express, PostgreSQL, and Google Maps API, with Material-UI (MUI) for styling, the application enables seamless management of vehicles, drivers, devices, customers, organizations, admins, and vehicle-specific fuel usage. FleetHub incorporates interactive maps for real-time tracking and intuitive user interfaces for efficient workflow management, catering to diverse organizational needs in the logistics and transportation sectors.',
        tools: ['React', 'MUI', 'Node', 'Express', 'TypeScript', 'PostgreSQL', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Lift Service Management system',
        description: 'It is a real-time machine tracking and monitoring application leveraging Firebase for a robust backend and React with Material-UI (MUI) for the frontend. The application provides live updates on machine locations and engine logs, enabling precise tracking and monitoring for enhanced operational efficiency. By utilizing Firebase’s real-time database capabilities, U-Key ensures seamless synchronization of data, making it an ideal solution for industries requiring accurate machine diagnostics and location tracking in real time.',
        tools: ['React', 'MUI', 'JavaScript', 'Maps', 'Firebase'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    

    {
        id: 5,
        name: 'Library Management System:',
        description: 'Implemented using JavaFX with a comprehensive system design, including Sequence diagram, Domain model, and Class diagram. Developed the user interface with a focus on UI/UX design for optimal functionality..',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 6,
        name: 'Food Delivery System:',
        description: "Implemented using Java, employing Object-Oriented Programming principles such as Inheritance, Polymorphism, and Abstraction.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },