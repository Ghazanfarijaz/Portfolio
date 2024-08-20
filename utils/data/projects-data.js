import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Rizq Rahi-FYP:(From People to people)',
        description: "”Rizq Rahi,” a mobile and web app connecting surplus food from restaurants to NGOs, reducing food waste and alleviating hunger. Developed features like real-time tracking and secure data management for efficient food donation coordination.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
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
        name: 'Library Management System:',
        description: 'Implemented using JavaFX with a comprehensive system design, including Sequence diagram, Domain model, and Class diagram. Developed the user interface with a focus on UI/UX design for optimal functionality..',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
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