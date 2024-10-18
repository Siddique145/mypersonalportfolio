/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Siddique",
  title: "Hi all, I'm Muhammad Siddique",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Nextjs / MongoDB and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VlWRGobgiLrSNnOPpn0IxZSOusVNp8hk/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Siddique145/",
  linkedin: "https://www.linkedin.com/in/muhammad-siddique-68b5ab303/",
  gmail: "muhammadsiddique14344@gmail.com",
  gitlab: "https://gitlab.com/users/Muhammad-Siddique145",
  facebook: "https://www.facebook.com/profile.php?id=61550358442636",
  medium: "https://medium.com/@muhammadsiddique14344",
  stackoverflow: "https://stackoverflow.com/users/26364863/muhammad-siddique",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications with best Performance"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ MongoDB"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "fab fa-next"
    }
    ,
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SMIT (Saylani Mass It Training)",
      logo: require("./assets/images/SMITLogo.png"),
      subHeader: "Hybrid Web and APP Development",
      duration: "December 2023 - December 2024 ",
      desc: "Participated and was an active Part of the Class",
      descBullets: [
        "I have fully focused on my learning with the best Practises",
      
      ]
    },
    // {
    //   schoolName: "Great Learning",
    //   logo: require("./assets/images/greatlearninglogo.svg"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2023 – Present",
      desc: "Best Response and Attraction towards to the Clients",
      descBullets: [
        "Web Developer",
        "Creating Charming and Attractive Websites"
      ]
    },
    {
      role: "Front-End Web Developer",
      company: "ZS Design",
      companylogo: require("./assets/images/ZSlogo.png"),
      date: "May 2023 – May 2024",
      desc: "I have Worked with my full Efforts and Collaboration",
      descBullets: [
        "Front-End Developer",
        "Creating Charming and Attractive Websites"
      ]
    },
    {
      role: "Mern Stack Developer ",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "Jan 2023 – Present",
      desc: "Creating Best Websites with complete requirements",
      descBullets: [
        "Mern Stack Developer",
        "Providing Best Solutions To my Clients"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Poslogo.png"),
      projectName: "Pharmacy Point Of Sale",
      projectDesc: "An Point of Sale With Complete CRUD",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mypos-ruby.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bookstorelogo.jpg"),
      projectName: "Noorani Book Store",
      projectDesc: "An Online Book Store",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siddique145.github.io/Noorani-Book-Depot/"
        }
      ]
    },
    {
      image: require("./assets/images/newslogo.jpeg"),
      projectName: "News App",
      projectDesc: "An All Pakistan Current News App ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siddique145.github.io/All-Pakistan-News-App/"
        }
      ]
    },
    {
      image: require("./assets/images/Weatherlogo.jpeg"),
      projectName: "Weather App",
      projectDesc: "All World Current Weather App ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siddique145.github.io/Weather-webapp/"
        }
      ]
    },
    {
      image: require("./assets/images/tasklogo.jpg"),
      projectName: "Task App",
      projectDesc: "Task App , All the Task List of a Day",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siddique145.github.io/Task-App-Firebase/"
        }
      ]
    },
    {
      image: require("./assets/images/Ecommercelogo.jpeg"),
      projectName: "Ecommerce Website",
      projectDesc: "An Online Shopping",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecommercecom.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Marsksheetlogo.jpeg"),
      projectName: "Student Marksheet",
      projectDesc: "Student Marks Management",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://marksheet-nine.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Apilogo.jpeg"),
      projectName: "Products Api Fetched",
      projectDesc: "Api Fetched Products With the Cart Functionality ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-api-serach-web.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3107508919",
  email_address: "muhammadsiddique14344@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
