const projectsData = [
  {
    id: 1,
    title: "Amdb",
    githubLink: "https://github.com/switch247/amdb",
    demoLink: "https:// ",
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



{
  "id": 2,
  "title": "Blogz",
  "githubLink": "https://github.com/switch247/Blog-App-MERN-frontend/tree/back",
  "demoLink": "https://bloghub-lcpx.onrender.com/",
  "description": "Blogz is a web application designed for bloggers to create and share their content with a wide audience. It provides a user-friendly interface and essential features for managing blog posts. The app is built using modern technologies such as React, Express, MongoDB, and Node.js, ensuring a scalable and efficient platform for bloggers. Blogz includes features like user authentication, post management, search capabilities, and a visually appealing user interface.",
  "ImageSrc": "/Assests/blogz/Screenshot 2023-08-18 135956.png",
  "sections": [
    {
      "title": "Introduction",
      "content": [
        "Blogz is a platform that empowers bloggers to share their thoughts and ideas with the world. It offers a seamless and intuitive experience for both writers and readers. The application is built using a modern tech stack, including Express.js, React.js, Node.js, MongoDB, and more."
      ]
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

  {
    id: 3,
    title: "Bookio",
    githubLink: "https://github.com/switch247/Bookio",
    demoLink: "https://bookio/",
    description: "Introducing the book finder app! Built using NextJs and powered by the Google Books API, this application offers a seamless and engaging experience for searching and exploring books. With its intuitive search function, users can easily find books based on various criteria such as title, author, or publishing date. Clicking on a specific book reveals comprehensive details on the book details page, including the cover image, title, summary, author, and publishing date.  ",
    ImageSrc: `/Assests/bookio/bookio.png`,
    sections: [
      {
        title: "Introduction",
        content: [
          "Introducing the book finder app! Built using NextJs and powered by the Google Books API, this application offers a seamless and engaging experience for searching and exploring books. With its intuitive search function, users can easily find books based on various criteria such as title, author, or publishing date. Clicking on a specific book reveals comprehensive details on the book details page, including the cover image, title, summary, author, and publishing date.  ",
        ],
      },
      {
        title: "Technologies Used",
        content: ["NextJs", "Google books API", "Css", "Vercel","docker"],
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
];

export default projectsData;
