import { useState, useEffect } from "react";
import headerImg from "../img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.scss";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Web Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prev) => prev / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <section
      className="banner"
      id="home"
      style={{
        padding: "60px 0",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <div className="baner-box">
          <div className="box1">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 style={{ color: "white" }}>
                    Hi! I'm Abhay{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Full-stack web developer skilled in JavaScript, TypeScript,
                    React, Next.js, Node.js, Tailwind CSS, and MongoDB.
                  </p>
                  <button>
                    <a href="#Contact" style={{ display: "flex" }}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </div>

          <div className="astronaut">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
