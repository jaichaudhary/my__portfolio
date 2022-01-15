import React, { useEffect, useState } from "react";
import UserSvgImg from "./UserSvgImg.js";
import "./Home.css";
import "../App.css";

// import Blob from "./Blob.js";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilMouseAlt } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";

import { UilHtml5Alt } from "@iconscout/react-unicons";
import { UilJavaScript } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import { UilReact } from "@iconscout/react-unicons";

import { useSpring, animated, config } from "react-spring";
// import { useTrail, a } from "@react-spring/web";

// const Trail = ({ open, children }) => {
//   const items = React.Children.toArray(children);
//   const trail = useTrail(items.length, {
//     config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
//     // opacity: open ? 1 : 0,
//     // x: open ? 0 : 20,
//     height: open ? 100 : 50,
//     from: { height: 0 },
//   });
//   return (
//     <div>
//       {trail.map(({ height, ...style }, index) => (
//         <a.div key={index} style={height}>
//           {items[index]}
//           {/* <a.div style={{ height }}>{items[index]}</a.div> */}
//         </a.div>
//       ))}
//     </div>
//   );
// };

function Home() {
  const height = window.innerHeight;
  const [open, setOpen] = useState(true);
  const [props, api] = useSpring(() => ({
    // reverse: true,
    // pause: open,
    // delay: 2000,
    // reverse: true,
    // config: { duration: 2000 },
    to: { height: "100vh" },
    from: { height: "100vh" },
  }));

  const [stickyAnimHTML, setStickyAnimHTML] = useSpring(() => ({
    config: { mass: 1, tension: 120, friction: 120 },
    loop: { reverse: true },
    // loop: true,
    from: { x: 0, y: 0, z: 0 },
    to: { x: 10, y: 20, z: 180 },
  }));

  const [stickyAnimCSS, setStickyAnimCSS] = useSpring(() => ({
    config: { mass: 1, tension: 120, friction: 120 },
    loop: { reverse: true },
    from: { x: 0, y: 0 },
    to: { x: 10, y: 30 },
  }));

  const [stickyAnimJS, setStickyAnimJS] = useSpring(() => ({
    config: { mass: 1, tension: 120, friction: 120 },
    loop: { reverse: true },
    from: { x: 0, y: 0 },
    to: { x: -15, y: 25 },
  }));

  const [stickyAnimREACT, setStickyAnimREACT] = useSpring(() => ({
    config: { mass: 1, tension: 120, friction: 120 },
    loop: { reverse: true },
    from: { x: 0, y: 0 },
    to: { x: -20, y: -20 },
  }));

  // if (!open) {
  //   api.start({
  //     reverse: true,
  //     immediate: false,
  //     to: { height: "100vh" },
  //     from: { height: "0vh" },
  //   });
  // }

  useEffect(() => {
    setTimeout(() => {
      // console.log("open", open);
      // setOpen(false);
      api.start({
        reverse: true,
        immediate: false,
        config: config.molasses,
        to: { height: "100vh" },
        from: { height: "0vh" },
      });
    }, 2000);
    return () => {
      clearTimeout();
    };
  }, []);

  // setTimeout(() => {
  //   // console.log("open", open);
  //   // setOpen(false);
  //   api.start({
  //     reverse: true,
  //     immediate: false,
  //     config: config.molasses,
  //     to: { height: "100vh" },
  //     from: { height: "0vh" },
  //   });
  // }, 2000);

  setTimeout(() => {
    console.log("open", open);
    setOpen(false);
  }, 4500);
  return (
    <section style={{ flex: 1 }} className="home section" id="home">
      {open && (
        <animated.div
          style={Object.assign({ overflow: "hidden" }, props)}
          className="home__overlay"
        >
          {/* <animated.h1
            style={Object.assign({
              marginTop: height / 2,
              zIndex: 100,
              position: "fixed",
              mixBlendMode: "difference",
              color: "hsl(250, 69%, 61%)",
            })}
            className="home__title"
          >
            Hello
          </animated.h1> */}
        </animated.div>
      )}
      {/* <Trail open={open}>
        <div className="home__overlay">
          <h1 className="home__title">Hello</h1>
        </div>
      </Trail> */}

      <div
        style={{
          // backgroundColor: "yellow",
          position: "absolute",
          height: "80vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          overflow: "hidden",
          // zIndex: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <animated.div
            style={Object.assign(
              { mixBlendMode: "soft-light" },
              stickyAnimHTML
            )}
          >
            <UilHtml5Alt size={60} color={"#fed9da"} />
          </animated.div>

          <animated.div
            style={Object.assign(
              { mixBlendMode: "soft-light", marginTop: -40 },
              stickyAnimJS
            )}
          >
            <UilJavaScript size={90} color={"#fed9da"} />
          </animated.div>
          {/* <div style={{ mixBlendMode: "soft-light" }}>
            <UilJavaScript size={60} color={"#fed9da"} />
          </div> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <animated.div
            style={Object.assign({ mixBlendMode: "soft-light" }, stickyAnimCSS)}
          >
            <UilCss3Simple size={50} color={"#fed9da"} />
          </animated.div>
          <animated.div
            style={Object.assign(
              {
                mixBlendMode: "soft-light",
                marginBottom: -20,
                marginRight: -20,
              },
              stickyAnimREACT
            )}
          >
            <UilReact size={70} color={"#fed9da"} />
          </animated.div>
          {/* <div style={{ mixBlendMode: "soft-light" }}>
            <UilCss3Simple size={60} color={"#fed9da"} />
          </div>
          <div style={{ mixBlendMode: "soft-light" }}>
            <UilReact size={60} color={"#fed9da"} />
          </div> */}
        </div>
      </div>

      <div
        className="home__container container grid"
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-evenly",
          // height: "90vh",
        }}
      >
        <div
          className="home__content grid"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // backgroundColor: "yellow",
            alignItems: "stretch",
            flex: 1,
          }}
        >
          <div className="home__data">
            <div className="home__heading">
              <h1 className="home__title intergralCF__font">
                {`Hi, I'am Jai`.toUpperCase()}
              </h1>
              <h3 className="home__subtitle intergralCF__font">
                {`Frontend developer`.toUpperCase()}
              </h3>
            </div>
            <p className="home__description">
              Experience in web design and development knowledge, producing
              quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <UilMessage size="1.25rem" className="button__icon" />
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                visibility: "hidden",
              }}
              className="home__social"
            >
              <a
                href="https://www.linkedin.com/in/jai-chaudhary-960a1b205"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilLinkedinAlt color={"#fed9da"} />
              </a>

              <a
                href="https://github.com/jaichaudhary"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilGithubAlt color={"#fed9da"} />
              </a>

              <a
                href="https://www.instagram.com/jaichaudhary___/"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilInstagram color={"#fed9da"} />
              </a>
            </div>

            {/*<Blob />*/}
            <div className="home__imgDiv">
              {/* <UserSvgImg className="home__blob" /> */}
              <img src="./img/home.svg" alt="" className="home__img" />
            </div>
          </div>
        </div>

        {/* <div className="home__scroll">
          <a href="#about" className="home__scroll--button button--flex">
            <UilMouseAlt size="2rem" className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <UilArrowDown size="1.25rem" className="home__scroll-arrow" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Home;
