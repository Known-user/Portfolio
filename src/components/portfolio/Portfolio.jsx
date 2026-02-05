import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import cinemate from "../img/cinemate.png"
import news from "../img/news.png"
import medi from "../img/medi.png"
import textify from "../img/textify.png"
import thriftbay from "../img/thriftbay.jpeg"
import otakuverse from "../img/otakuverse.jpeg"
import todo from "../img/todo.png"

const items = [
  {
    id: 1,
    title: "CINEMATE",
    img: cinemate,
    desc: "CINEMATE is a fully responsive, ad-free movie and series streaming platform. Built using React, Tailwind CSS, and TMDB API, it offers an intuitive UI with search functionality, infinite scrolling, and YouTube trailers. Developed as a major project to enhance my full-stack skills.",
    link: "https://cinemate2-0.vercel.app/",
  },
  {
    id: 2,
    title: "ThriftBay",
    img: thriftbay,
    desc: "ThriftBay is an online thrift store marketplace where users can buy and sell second-hand items. Featuring a seamless UI, secure transactions, and product listings, it's built with React, Next.js, and MongoDB.",
    link: "https://thriftbay.netlify.app/",
  },
  {
    id: 3,
    title: "HealthEase",
    img: medi,
    desc: "HealthEase is a healthcare web app offering disease insights, symptom checkers, prevention tips, and medication details. It includes online appointment booking and insurance plans, making it a one-stop health companion.",
    link: "https://health-ease-rose.vercel.app/",
  },
  {
    id: 4,
    title: "ToDo App",
    img: todo,
    desc: "A simple yet efficient ToDo app designed to help users organize tasks seamlessly. Built with React and Tailwind CSS, it features task creation, editing, and deletion with a clean UI for easy task management.",
    link: "https://todo-brown-one.vercel.app/",
  },
  {
    id: 5,
    title: "OtakuVerse",
    img: otakuverse,
    desc: "OtakuVerse is a dedicated anime and manga discovery platform. Users can explore trending anime, detailed character info, and community reviews. Built with React, Next.js, and the AniList API for a smooth browsing experience.",
    link: "https://otakuverse-anime.vercel.app/",
  },
  {
    id: 6,
    title: "NewsNow",
    img: news,
    desc: "NewsNow is a modern news platform providing real-time global updates. Users can explore the latest articles, search for specific topics, and read insightful opinion pieces. Built with React and Next.js for a seamless browsing experience.",
    link: "https://news-time-ochre.vercel.app/",
  },
  {
    id: 7,
    title: "Textify",
    img: textify,
    desc: "Textify is a powerful text manipulation tool that allows users to format, analyze, and transform text effortlessly. Built with JavaScript and Tailwind CSS, it provides an interactive UI with various customization options.",
    link: "https://text-util-mu.vercel.app/",
  },
  
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <a target="_blank" rel="noreferrer" href={item.link}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
