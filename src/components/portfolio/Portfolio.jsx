import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import cinemate from "../img/cinemate.png"
import news from "../img/news.png"
import anime from "../img/anime.png"
import medi from "../img/medi.png"

const items = [
  {
    id: 1,
    title: "CINEMATE",
    img:cinemate,
    desc: "Watch movies for free. CINEMATE is an Ad free responsive web application built with the intention of providing  a pleasant anime viewing experience. This is made purely for education purpose. I made this website as my first big project when i was just a beginner in web development.",
    link: "https://cinemate-world.netlify.app/",
  },
  {
    id: 2,
    title: "ANIME LOVER",
    img: anime,
    desc: "Watch Ad-free Anime, Anime Lover is an Ad free responsive web application built with the intention of providing a pleasant anime viewing experience. User can watch anime and can search their favorite anime for free.",
    link: "https://anime-two-opal.vercel.app/",
  },
  {
    id: 3,
    title: "NewsNow",
    img: news,
    desc: "Welcome to NEWSNOW! This website aims to provide timely and accurate news coverage from around the world.You can browse the website to read the latest news stories and opinion pieces. You can also use the search functionality to find articles on specific topics.",
    link: "https://news-time-ochre.vercel.app/",
  },
  {
    id: 4,
    title: "HealthEase",
    img: medi,
    desc: "HealthEase is a webapp that offers a wealth of information related to different types of diseases, their symptoms, signs, preventions and medications. It provides insure plans and online appointment options too. You can also have a quick health checkup using symptom checker.",
    link: "https://health-ease-rose.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
            <a target="_blank" href={item.link}>
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
