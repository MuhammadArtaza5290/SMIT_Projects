import authorPic from "../../assets/author.png"
import blog2 from "../../assets/blog-2.png"
import blog3 from "../../assets/blog-3.png"
import blog4 from "../../assets/blog-4.png"
import blog5 from "../../assets/blog-5.png"
import blog6 from "../../assets/blog-6.png"
import blog7 from "../../assets/blog-7.png"
import blog8 from "../../assets/blog-8.png"
import blog9 from "../../assets/blog-9.png"
import blog10 from "../../assets/blog-10.png"






let cardData = [
  {
    id: 1,
    cardImg: blog2,
    cardWrapper: "database",
    cardTitle: "Database Management",
    cardInfo:
      "I am a full stack developer with experience in MongoDB, Firebase, and AWS.",
    authorData: {
      authorImg : authorPic,
      authorName: "John Doe",
      authorDate: "Dec 10, 2021",
      authorTime: "2 min",
    },
  },
  {
    id: 2,
    cardImg:blog3,
    cardWrapper: "Web Performance",
    cardTitle: "Fast web page loading on a $20 feature phone",
    cardInfo:
      "Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light version of a smart phone.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Dec 10, 2021",
      authorTime: "2 min",
    },
  },
  {
    id: 3,
    cardImg: blog4,
    cardWrapper: "Accessibility",
    cardTitle: "Accessibility Tips for Web Developers",
    cardInfo:
      "It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual, hearing, mobility, cognition, speech and neural.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Nov 28, 2021",
      authorTime: "4 min",
    },
  },
  {
    id: 4,
    cardImg: blog5,
    cardWrapper: "Database",
    cardTitle: "Dynamically Securing Databases using Hashicorp Vault",
    cardInfo:
      "It's hard to talk about security in the IT industry, as it has to be considered on many levels: from securing code chunks, containers, to infrastructures, with strong authentication policies across enterprises.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Nov 20, 2021",
      authorTime: "4 min",
    },
  },
  {
    id: 5,
    cardImg: blog6,
    cardWrapper: "Web Performance",
    cardTitle:
      "Adaptive Loading - Improving Web Performance on low-end devices",
    cardInfo:
      "Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. In a world with widely varying device capabilities, a 'one-size' fits all experience may not work.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Nov 10, 2021",
      authorTime: "3 min",
    },
  },
  {
    id: 6,
    cardImg: blog7,
    cardWrapper: "Accessibility",
    cardTitle:
      "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
    cardInfo:
      "We, as developers, tend to develop sites unconsciously for people like ourselves. Without active attention, sites may become accessible only for specific types of users, leaving many behind.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Oct 25, 2021",
      authorTime: "7 min",
    },
  },
  {
    id: 7,
    cardImg: blog8,
    cardWrapper: "Database",
    cardTitle: "Building a Restful CRUD API with Node JS, Express, and MongoDB",
    cardInfo:
      "API stands for Application Programming Interface, a software interface that enables communication between two apps. It acts as a messenger, delivering requests and responses between systems.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Oct 15, 2021",
      authorTime: "5 min",
    },
  },
  {
    id: 8,
    cardImg: blog9,
    cardWrapper: "Web Performance",
    cardTitle: "Monitoring Performance with the PageSpeed Insights API",
    cardInfo:
      "The PageSpeed Insights API offers free access to performance monitoring for web pages, returning data along with suggestions for improvement, utilizing both Lighthouse and Chrome User Experience Report (CrUX).",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Oct 3, 2021",
      authorTime: "5 min",
    },
  },
  {
    id: 9,
    cardImg: blog10,
    cardWrapper: "Accessibility",
    cardTitle: "The best web accessibility tools for developers in 2021",
    cardInfo:
      "The quality of tools you use determines how quickly you can diagnose and resolve problems. The landscape of web technologies, including accessibility tools, changes dramatically each year.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Sep 13, 2021",
      authorTime: "7 min",
    },
  },
  {
    id: 10,
    cardImg:blog2,
    cardWrapper: "Database",
    cardTitle: "How to connect a React frontend with a NodeJS/Express backend",
    cardInfo:
      "The MERN (MongoDB, Express, React, NodeJS) stack is popular for full stack applications, utilizing Javascript for both backend and frontend, and MongoDB, a document-oriented database structured like JSON.",
    authorData: {
      authorImg : authorPic,
      authorName: "Julia Walker",
      authorDate: "Sep 21, 2021",
      authorTime: "4 min",
    },
  },
];

export default cardData;