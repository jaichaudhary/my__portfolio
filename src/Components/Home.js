import React, { useEffect, useState } from "react";
import UserSvgImg from "./UserSvgImg.js";
import "./Home.css";
import "../App.css";

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
  const [overlay, setOverlay] = useState(true);
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

  const hgt = "0vh";
  setTimeout(() => {
    setOverlay(false);
  }, 2000);

  // setTimeout(() => {
  //   console.log("open", open);
  //   setOpen(false);
  // }, 4500);
  return (
    <section style={{ flex: 1 }} className="home section" id="home">
      {open && (
        // <animated.div
        //   style={Object.assign({ overflow: "hidden" }, props)}
        //   className="home__overlay"
        // ></animated.div>

        <div style={{ height: !overlay && hgt }} className="home__overlay">
          <div className="home__data">
            <div className="home__heading">
              <h1
                style={{ opacity: !overlay && 0 }}
                className="home__overlayTitle intergralCF__font"
              >
                {`Hi, I'm Jai`.toUpperCase()}
              </h1>
              <h3
                style={{ opacity: !overlay && 0 }}
                className="home__overlaySubtitle intergralCF__font"
              >
                {`Frontend developer`.toUpperCase()}
              </h3>
            </div>
            <p
              style={{ opacity: !overlay && 0 }}
              className="home__overlayDescription"
            >
              Experience in web design and development knowledge, producing
              quality work.
            </p>
          </div>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          height: "80vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          overflow: "hidden",
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
        </div>
      </div>

      <div
        className="home__container container grid"
        style={{
          display: "flex",
          flexDirection: "column",
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
                {`Hi, I'm Jai`.toUpperCase()}
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
              Contact Me
              <UilMessage size="1.25rem" className="button__icon" />
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div className="home__imgDiv">
              {/* <UserSvgImg className="home__blob" /> */}
              <img src="./img/home3D.svg" alt="" className="home__img" />
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
