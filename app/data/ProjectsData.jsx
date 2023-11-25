const projectsData = [
  // kungfu
  {
    id: 0,
    title: "Fighting Game",
    githubLink: "https://github.com/switch247/Everybody-was-kung-fu-fighting",
    demoLink: "https://loquacious-pithivier-09668b.netlify.app/",
    isFeatured: true,
    description:
      "This is a two-player fighting game built using Vanilla JavaScript and CSS. It offers an engaging gameplay experience with smooth animations and intuitive controls, allowing players to battle against each other in a fun and competitive environment.",
    ImageSrc: `/Assests/Kungfu/kungfufighting.png`,
    sections: [
      {
        title: "Introduction",
        content: [
          "This two-player fighting game is developed using Vanilla JavaScript and CSS, providing an interactive and exciting experience for players. Players can choose their characters and engage in combat, showcasing their skills and strategies.",
        ],
      },
      {
        title: "Technologies Used",
        content: [
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      {
        title: "Key Features",
        content: [
          "1. Two-Player Mode: Players can compete against each other in real-time, controlling their characters with responsive inputs.",
          "2. Character Selection: Players can choose from a variety of characters, each with unique abilities and fighting styles.",
          "3. Health and Score Tracking: The game tracks the health of each player and displays the score, enhancing the competitive aspect.",
          "4. Smooth Animations: The game features smooth animations for character movements, attacks, and special abilities.",
          "5. Responsive Design: The game is designed to work well on both desktop and mobile devices, providing a great user experience on any screen.",
          "6. Special Moves: Each character has special moves that can be executed with specific key combinations, adding depth to the gameplay.",
          "7. Game Over Screen: When a player's health reaches zero, a game over screen is displayed, allowing players to restart the match.",
        ],
        images: [
          "/Assets/kungfu/kungfufighting.png",
          "/Assets/kungfu/kungfufighting.png",
        ],
      },
      {
        title: "Implementation Details",
        content: [
          "The game utilizes Vanilla JavaScript for all game logic, including character movement, collision detection, and health management. CSS is used for styling the game interface and creating smooth animations. The game loop is implemented using `requestAnimationFrame` to ensure a smooth gaming experience.",
        ],
      },
      {
        title: "Lessons Learned",
        content: [
          "Throughout the development of this fighting game, I learned valuable skills in JavaScript, particularly regarding game mechanics and user input handling.",
          "I realized the importance of optimizing performance in games, ensuring smooth animations and responsive controls.",
          "Additionally, I gained experience in structuring code for better readability and maintainability, which is crucial for larger projects.",
        ],
      },
      {
        title: "Future Improvements",
        content: [
          "1. Add more characters and unique abilities to diversify gameplay and enhance user engagement.",
          "2. Implement AI functionality for single-player mode, allowing users to practice against computer-controlled opponents.",
          "3. Introduce additional game modes, such as tournament mode or survival mode, to offer more variety and challenges.",
          "4. Enhance graphics and animations to create a more immersive gaming experience.",
        ],
      },
    ],
  },

  // amdb
  {
    id: 1,
    title: "Amdb",
    githubLink: "https://github.com/switch247/amdb",
    demoLink: "https:// ",
    isFeatured: true,
    description:
      "AMDB is a sleek web application built with Next.js, offering a comprehensive database for anime enthusiasts. It provides detailed information about favorite and trending anime series, all within a seamless and responsive user experience. With its intuitive interface and robust search capabilities, AMDB empowers users to explore a vast collection of anime titles effortlessly.",
    ImageSrc: `/Assests/Amdb/amdb.png`,
    sections: [
      {
        title: "Introduction",
        content: [
          "AMDB is a sleek web application built with Next.js, offering a comprehensive database for anime enthusiasts. It provides detailed information about favorite and trending anime series, all within a seamless and responsive user experience. With its intuitive interface and robust search capabilities, AMDB empowers users to explore a vast collection of anime titles effortlessly.",
        ],
      },
      {
        title: "Technologies Used",
        content: [
          "Next.js",
          // "Express.js",
          // "Node.js",
          // "MongoDB",
          // "Puppeteer",
          "Jikan API",
          "vercel",
        ],
      },
      {
        title: "Key Features",
        content: [
          "1. Manga Reading: The app offers an immersive manga reading experience where users can seamlessly access and enjoy manga chapters. Dive into captivating storylines and stunning artwork as you effortlessly binge through your favorite manga series.",
          '2. Chapter Page: Clicking on a chapter in the manga details page displays the chapter\'s images. Users can easily navigate between chapters using "next chapter" and "previous chapter" buttons, or by selecting a specific chapter from the dropdown menu.',

          "3. User Authentication: The app incorporates NextAuth to facilitate user authentication. This allows users to create accounts, log in, and securely access personalized feautures.",

          "4. Manga Filtering: Users have the ability to filter manga based on various variables such as status (completed/ongoing), popularity, or genres.",

          "5. Bookmarking Manga: Registered users can bookmark manga they enjoy, providing a convenient way to save and access their favorite titles. This feature enhances the user experience by allowing users to easily track and revisit their preferred manga.",

          "6. Manga Details Page: This page provides comprehensive information about a specific manga, including its title, author, genres, manga cover, and a list of chapters. Registered users can also bookmark manga directly from this page.",

          "7. Manga Search: The app provides a search bar in the header, allowing users to search for specific manga. This feature enables quick and convenient discovery of desired manga.",
          "8. New Carousel: The app features a carousel highlighting the newest titles. Users can easily explore and discover trending manga titles in a visually appealing manner.",

          "These key features prioritize the manga reading aspect of the app, ensuring users can enjoy a user-friendly and personalized experience while exploring, filtering, bookmarking, and reading manga chapters effortlessly.",
        ],
        images: [
          "/Assests/Amdb/amdb.png",
          "/Assests/Amdb/amdb2.png",
          "/Assests/Amdb/amdb3.png",
          "/Assests/Amdb/amdb4.png",

        ],
      },
      {
        title: "Implementation Details",
        content: [
          'Manga verse incorprates a microservice architecture with Kian Api and pupperteer. The first part uses Jiakn API to retrieve data. From Jikan API, data like title,author,summary,manga cover, for all manga is retrieved.Using the title retrieved from Jikan Api, the second part of the app "the scraper" runs. The scarper takes the title of the manga and using puppeteer scrapes a specific app and finds and returns a manga with a matching title. The data that is returend from the scarper is only the manga chapter list and the images of each chapter.',
        ],
      },
      {
        title: "Lessons Learned",
        content: [
          "Throughout the course of this project, my primary goal was to learn Next.js. As I dived into the development process, I gained insights and experience using Next.js' dynamic routing, server-side rendering, and API integration features. This allowed me to create a more dynamic and performant application.",

          "One important lesson I learned was the advantage of always utilizing server-side components unless client-side rendering was absolutely necessary, such as for onClick events or other interactive features. Server-side components, with their suspense boundaries, are more efficient and overall more user-friendly.Additionally, in server side components, loading state is eaiser to handle. Sadly, I realsized this towards the end of the project, so most of my components are yet to be server side components.",

          "One of the highlights of this project for me was the manga chapter page, where users can read any chapter of a specific manga. To achieve this functionality, I explored and learned Puppeteer, a tool that surprised me with its beginner-friendly nature.Using Puppeteer allowed me to efficiently scrape and display manga chapters, enriching the user experience and providing the main feature to the app.",

          "Overall, this project provided me with hands-on experience in Next.js, deepening my understanding of its features and benefits. I also gained insights into the importance of server-side components and the potential of tools like Puppeteer to enhance the functionality of web applications.",
        ],
      },
      {
        title: "Future Improvement",
        content: [
          "Based on the lessons learned from this project, there are some improvements I would like to make.",

          " 1. Convert most components to server-side components.By migrating a majority of the components to server-side rendering, I can take advantage of suspense boundaries to enhance the overall performance of the application. Additionally, server-side components provide automatic caching, which further improves performance by reducing unnecessary data fetching.",

          " 2. Enhance dynamic filtering.  Currently, the filtering functionality allows users to filter by only one variable at a time, such as genre, popularity, or status. To enhance the user experience, I plan to implement a more dynamic filtering system that enables users to apply multiple filters simultaneously.",
        ],
      },
    ],
  },
  // blog
  {
    "id": 2,
    "title": "Blogz",
    "githubLink": "https://github.com/switch247/Blog-App-MERN-frontend/tree/back",
    "demoLink": "https://bloghub-lcpx.onrender.com/",
    "description": "Blogz is a web application designed for bloggers to create and share their content with a wide audience. It provides a user-friendly interface and essential features for managing blog posts. The app is built using modern technologies such as React, Express, MongoDB, and Node.js, ensuring a scalable and efficient platform for bloggers. Blogz includes features like user authentication, post management, search capabilities, and a visually appealing user interface.",
    "ImageSrc": "/Assests/blogz/Screenshot 2023-08-18 135956.png",
    isFeatured: true,
    "sections": [
      {
        "title": "Introduction",
        "content": [
          "Blogz is a platform that empowers bloggers to share their thoughts and ideas with the world. It offers a seamless and intuitive experience for both writers and readers. The application is built using a modern tech stack, including Express.js, React.js, Node.js, MongoDB, and more."
        ]
      },
      {
        title: "Technologies Used",
        content: [
          "React.js",
          "Express.js",
          "Node.js",
          "MongoDB",
          "vercel",
        ],
      },
      {
        "title": "Implementation Details",
        "content": [
          "The app follows a modular architecture, with the backend and frontend components neatly organized. The backend, powered by Node.js and Express, handles data management and user authentication. The frontend, built with React, provides a responsive and engaging user interface for creating and consuming blog content."
        ]
      },
      {
        "title": "Key Features",
        "content": [
          "1. User Authentication: Blogz implements secure user authentication using JSON Web Tokens (JWT) and bcrypt for password encryption. This ensures the protection of user accounts and their content.",
          "2. Post Management: Bloggers can create, edit, and delete their blog posts using the intuitive interface provided by Blogz. The app offers a seamless writing and publishing experience.",
          "3. Search Functionality: Readers can easily search for specific blog posts using the search feature, allowing them to discover content based on their interests.",
          "4. Responsive Design: Blogz is designed to provide a consistent and enjoyable experience across various devices, including desktops, tablets, and mobile phones."
        ],
        "images": [
          "/Assests/blogz/Screenshot 2023-08-18 135956.png",
          "/Assests/blogz/Screenshot 2023-08-18 140241.png",
          "/Assests/blogz/Screenshot 2023-08-18 140259.png",
          "/Assests/blogz/Screenshot 2023-08-18 184420.png",
        ]
      },
      {
        "title": "Lessons Learned",
        "content": [
          "Building Blogz was a significant learning experience for me. It allowed me to deepen my understanding of full-stack development, user authentication, and data management. Working on this project also improved my skills in React and Express, enabling me to create a robust and user-friendly application."
        ]
      },
      {
        "title": "Future Improvement",
        "content": [
          "1. Social Sharing: Implement social sharing features to allow readers to easily share their favorite blog posts on social media platforms.",
          "2. Comment System: Introduce a commenting system to enable readers to engage with the content and provide feedback to the authors.",
          "3. Analytics Integration: Incorporate analytics tools to provide bloggers with insights into their audience and content performance.",
          "4. Customization Options: Expand the platform by offering customization options for bloggers to personalize the appearance of their blogs."
        ]
      }
    ]
  },
  // bookio
  {
    id: 3,
    title: "Bookio",
    githubLink: "https://github.com/switch247/Bookio",
    demoLink: "https://bookio/",
    description: "Introducing the book finder app! Built using NextJs and powered by the Google Books API, this application offers a seamless and engaging experience for searching and exploring books. With its intuitive search function, users can easily find books based on various criteria such as title, author, or publishing date. Clicking on a specific book reveals comprehensive details on the book details page, including the cover image, title, summary, author, and publishing date.  ",
    ImageSrc: `/Assests/bookio/bookio.png`,
    isFeatured: true,
    sections: [
      {
        title: "Introduction",
        content: [
          "Introducing the book finder app! Built using NextJs and powered by the Google Books API, this application offers a seamless and engaging experience for searching and exploring books. With its intuitive search function, users can easily find books based on various criteria such as title, author, or publishing date. Clicking on a specific book reveals comprehensive details on the book details page, including the cover image, title, summary, author, and publishing date.  ",
        ],
      },
      {
        title: "Technologies Used",
        content: ["NextJs", "Google books API", "Css", "Vercel", "docker"],
      },
      {
        title: "Implementation Details",
        content: [
          "The app is built using Nextjs and utilizes the Google Books API to fetch book data. NextJs provides a robust framework for building the user interface and managing component states, while the Google Books API serves as the source of book information.",
          "To implement the search function, the app sends search queries to the Google Books API and retrieves the corresponding search results. The search function is designed to allow users to search for books based on various criteria such as book title, author name, or publishing date.",
        ],
      },
      {
        title: "Key Features",
        content: [
          "1. Search Function: Users can utilize the search function to find books based on various criteria such as book title, author name, or publishing date. This feature enables users to easily discover specific books they are looking for.",

          "2. Book Details Page: Clicking on a particular book from the search results or any other section of the application leads to the book details page. On this page, users can view comprehensive information about the book, including the book cover, title, summary, author, and publishing date. This feature provides users with a comprehensive overview of the selected book.",
          "3. Book filtering: filter search results by author title or genres",
          "4. Bookmarking: you can your favorite books to your wishlist/bookmarks",
          "These features contribute to enhancing the user experience by enabling efficient book search and providing comprehensive details for each book within the application.",
        ],
        images: [
          "/public/Assets/bookio/bookio.png",
          "/public/Assets/bookio/bookio1.png",
          "/public/Assets/bookio/bookio2.png",
          "/public/Assets/bookio/bookio3.png",
          "/public/Assets/bookio/bookio4.png",
          "/public/Assets/bookio/bookio5.png",
          "/public/Assets/bookio/bookio6.png",
          "/public/Assets/bookio/bookio7.png",

        ],
      },
      {
        title: "Lessons Learned",
        content: [
          "This React app served as my first introduction to React. Throughout the development process, I gained valuable experience in utilizing React hooks, such as useState and useEffect, to manage state and handle side effects.",

          "Additionally, I learned an important lesson about responsive design. Initially, I approached responsiveness by starting with larger devices. However, I soon realized that this approach led to messy and convoluted CSS code due to the cascading nature of CSS. As a result, I adopted a new approach for future projects, starting with mobile devices and gradually scaling up to larger screens. This change in approach greatly improved the maintainability and cleanliness of my code.",
        ],
      },
      {
        title: "Future Improvement",
        content: [
          "Update CSS: Elevate the user experience by updating the CSS to achieve a more aesthetic and responsive design. Additionally, incorporate CSS modules to improve maintainability and organization.",
          "2. User Authentication: Enhance the app's security and user experience by implementing user authentication using technologies such as JSON Web Tokens (JWT) or passport.js. This will enable registered users to securely log in, access personalized features, and protect their account information.",

          "3. Bookmarking Feature: Provide registered users with the ability to bookmark their favorite books. This feature will allow users to save and easily access their preferred books, enhancing their overall reading experience and providing a convenient way to keep track of their reading list.",
        ],
      },
    ],
  },
  // rentup
  {
    "id": 4,
    "title": "Rent Up",
    "githubLink": "https://github.com/switch247/Full-stack-real-estate",
    "demoLink": "https://full-stack-real-estate-dusky.vercel.app/",
    "description": "Introducing the Rent Up app! Built using the MERN stack, this application provides a seamless experience for browsing, listing, and booking real estate properties. Users can explore multiple properties, view their locations on a map, and save their favorite listings for easy access.",
    ImageSrc: `/Assests/RentUp/rentup.png`,
    isFeatured: true,
    "sections": [
      {
        "title": "Introduction",
        "content": [
          "Introducing the Rent Up app! Built using the MERN stack, this application offers a comprehensive platform for users to browse, list, and book real estate properties. With an intuitive interface, users can easily explore various properties and manage their appointments."
        ]
      },
      {
        "title": "Technologies Used",
        "content": [
          "React.js",
          "Express.js",
          "MongoDB",
          "JWT for Authentication",
          "Google Maps API for location services",
          "Chakra UI for design components"
        ]
      },
      {
        "title": "Implementation Details",
        "content": [
          "The app is built using the MERN stack, allowing for a full-stack solution. It utilizes the Google Maps API to display property locations and facilitate easy navigation.",
          "Users can register and log in to the application, enabling them to save properties to their favorites list. The booking feature allows users to schedule visits to properties directly through the app."
        ]
      },
      {
        "title": "Key Features",
        "content": [
          "1. Property Listings: Users can browse a comprehensive list of available properties with detailed descriptions, images, and locations on the map.",
          "2. Save Properties: Users can save their favorite properties for quick access later, enhancing the user experience.",
          "3. Appointment Booking: The app allows users to book appointments to visit properties they are interested in, ensuring a smooth transition from browsing to booking.",
          "4. User Registration: Users can create accounts to access personalized features, including saved properties and booking history."
        ],
        "images": [
          "/public/Assests/RentUp/rentup1.png",
          "/public/Assests/RentUp/rentup2.png",
          "/public/Assests/RentUp/rentup3.png"
        ]
      },
      {
        "title": "Lessons Learned",
        "content": [
          "This project provided invaluable insights into building a full-stack application. I gained experience in integrating third-party APIs, such as Google Maps, and learned how to manage user authentication effectively.",
          "I also improved my skills in responsive design by ensuring the application works seamlessly across various devices."
        ]
      },
      {
        "title": "Future Improvements",
        "content": [
          "1. Enhanced User Experience: Update UI components to improve aesthetics and usability, ensuring a more engaging experience for users.",
          "2. Advanced Filtering: Implement advanced search and filtering options to help users find properties that best meet their criteria.",
          "3. User Reviews: Add a review feature that allows users to share their experiences with properties, providing valuable feedback for future users."
        ]
      }
    ]
  },

  // overdrive
  {
    "id": 5,
    "title": "Over Drive",
    "githubLink": "https://github.com/switch247/over_drive",
    "demoLink": "https://over-drive.vercel.app/",
    "description": "Over Drive is a cloud storage and file management platform designed to provide users with a seamless experience, replicating core functionalities of Google Drive. It integrates AI-powered features to enhance search and file organization.",
    "ImageSrc": "/Assests/OverDrive/overdrive1.png",
    isFeatured: true,
    "sections": [
      {
        "title": "Introduction",
        "content": [
          "Over Drive is a cloud storage and file management platform that allows users to upload, manage, and organize files efficiently. It enhances the file management experience by incorporating AI features for quick searches and smart organization."
        ]
      },
      {
        "title": "Technologies Used",
        "content": [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "React",
          "Vercel",
          "Firebase",
          "NextAuth.js",
          "SQLite",
          "Prisma ORM"
        ]
      },
      {
        "title": "Implementation Details",
        "content": [
          "The application uses Next.js for server-side rendering and a responsive UI. Firebase is utilized for authentication and real-time database functionalities. The AI-powered search feature allows users to find files quickly, enhancing overall efficiency."
        ]
      },
      {
        "title": "Key Features",
        "content": [
          "1. User Authentication: Secure user accounts managed through NextAuth.js.",
          "2. File Upload and Management: Easy upload and management of files.",
          "3. AI-Powered File Search: Quickly find files by searching through filenames and content.",
          "4. Quick Reorganization: Automatically sorts files by type for easier access.",
          "5. Folder Navigation: Users can create folders and organize files seamlessly.",
          "6. Responsive Design: Fully responsive UI for all devices."
        ],
        "images": [
          "/Assests/OverDrive/overdrive2.png",
          "/Assests/OverDrive/overdrive3.png",
          "/Assests/OverDrive/overdrive4.png"
        ]
      },
      {
        "title": "Lessons Learned",
        "content": [
          "Developing Over Drive provided valuable insights into integrating cloud storage solutions with modern web technologies. I learned the importance of responsive design and effective user authentication."
        ]
      },
      {
        "title": "Future Improvements",
        "content": [
          "1. Enhanced AI Features: Further improve file search capabilities using advanced algorithms.",
          "2. User Experience Enhancements: Refine the UI for better usability.",
          "3. Additional File Formats: Support for more file types and formats for upload."
        ]
      }
    ]
  },

  {
    "id": 6,
    "title": "LinkTree Clone",
    "githubLink": "https://github.com/yourusername/linktree-clone",
    "demoLink": "https://linktree-clone.vercel.app/",
    "description": "A LinkTree clone built with Supabase, Next.js, and Stripe for managing multiple links in one place.",
    "ImageSrc": "/Assets/linktree/logo.png",
    isFeatured: false,
    "sections": [
      {
        "title": "Introduction",
        "content": [
          "This LinkTree clone allows users to create a personalized landing page with multiple links, facilitating easy sharing on social media."
        ]
      },
      {
        "title": "Technologies Used",
        "content": [
          "Next.js",
          "Supabase",
          "Stripe",
          "Tailwind CSS",
          "React"
        ]
      },
      {
        "title": "Implementation Details",
        "content": [
          "The application utilizes Next.js for server-side rendering and Supabase for backend functionalities, including user authentication and database management."
        ]
      },
      {
        "title": "Key Features",
        "content": [
          "1. User Authentication: Secure login with Supabase.",
          "2. Link Management: Easily add, remove, and organize links.",
          "3. Payment Integration: Stripe integration for premium features.",
          "4. Responsive Design: Optimized for both mobile and desktop views."
        ],
        "images": [
          "/Assets/linktree/desktop.png",
          "/Assets/linktree/mobile.png"
        ]
      },
      {
        "title": "Lessons Learned",
        "content": [
          "Building this project enhanced my understanding of integrating payment systems with web applications."
        ]
      },
      {
        "title": "Future Improvements",
        "content": [
          "1. Customizable Themes: Allow users to customize the appearance of their link pages.",
          "2. Analytics Dashboard: Provide users with insights on link performance."
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Twitter Clone",
    "githubLink": "https://github.com/yourusername/twitter-clone",
    "demoLink": "https://twitter-clone.vercel.app/",
    "description": "A real-time Twitter clone built with React, MERN stack, and Socket.io for live interactions.",
    "ImageSrc": "/Assets/twitter/logo.png",
    isFeatured: false,
    "sections": [
      {
        "title": "Introduction",
        "content": [
          "This Twitter clone allows users to post tweets, follow others, and engage in real-time conversations."
        ]
      },
      {
        "title": "Technologies Used",
        "content": [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Socket.io"
        ]
      },
      {
        "title": "Implementation Details",
        "content": [
          "The application uses Socket.io for real-time updates and the MERN stack for managing user data and interactions."
        ]
      },
      {
        "title": "Key Features",
        "content": [
          "1. Real-Time Updates: Immediate updates on tweets and interactions.",
          "2. User Profiles: Create and manage user profiles.",
          "3. Follow System: Follow and unfollow other users.",
          "4. Responsive Design: Optimized for mobile and desktop use."
        ],
        "images": [
          "/Assets/twitter/desktop.png",
          "/Assets/twitter/mobile.png"
        ]
      },
      {
        "title": "Lessons Learned",
        "content": [
          "This project improved my skills in real-time communications and user interface design."
        ]
      },
      {
        "title": "Future Improvements",
        "content": [
          "1. Enhanced Security: Implement more robust security measures.",
          "2. Advanced Features: Explore adding direct messaging between users."
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Medical Appointment Booking",
    "githubLink": "https://github.com/yourusername/medical-appointment-booking",
    "demoLink": "https://medical-appointment.vercel.app/",
    "description": "A medical appointment booking system with admin panels for doctors and administrators, built using Firebase and Next.js.",
    "ImageSrc": "/Assets/medical/logo.png",
    isFeatured: false,
    "sections": [
      {
        "title": "Introduction",
        "content": [
          "This application allows patients to book appointments with doctors, providing a seamless experience for both parties."
        ]
      },
      {
        "title": "Technologies Used",
        "content": [
          "Next.js",
          "Firebase",
          "MongoDB",
          "MERN stack"
        ]
      },
      {
        "title": "Implementation Details",
        "content": [
          "Using Firebase for authentication and real-time data management, the app provides a responsive UI for easy navigation."
        ]
      },
      {
        "title": "Key Features",
        "content": [
          "1. User Authentication: Secure login for patients and doctors.",
          "2. Appointment Management: Easy booking and management of appointments.",
          "3. Admin Panels: Admin functionalities for managing doctors and appointments.",
          "4. Responsive Design: User-friendly experience across devices."
        ],
        "images": [
          "/Assets/medical/desktop.png",
          "/Assets/medical/mobile.png"
        ]
      },
      {
        "title": "Lessons Learned",
        "content": [
          "This project taught me the importance of user-centered design and efficient data management in healthcare applications."
        ]
      },
      {
        "title": "Future Improvements",
        "content": [
          "1. Notification System: Implement reminders for upcoming appointments.",
          "2. Telemedicine Features: Explore adding video consultation options."
        ]
      }
    ]
  },


];

export default projectsData;
