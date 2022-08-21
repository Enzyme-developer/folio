import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          opacity: 0,
          y: 350,
        },
        {
          duration: 0.6,
          autoAlpha: 1,
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=300",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    // ref={headerRef}
    <div id="about" className="overflow-hidden mt-16 p-4 w-full">
      <div>
        <p ref={addToRefs} className="text-gray-400 text-2xl w-full">
          <span className="text-gray-100">
            I'm Ayo, a passionate Software Engineer (Frontend) who loves building things.{" "}
          </span>
          I love the process of discovery, and I love the thrill of solving
          problems. I'm also excited about the possibility of creating new tools
          to help people work more efficiently by tranforming designs and ideas,{" "}
          <span className="text-gray-100">pixel perfectly</span>, to code. I
          constantly seeks out innovative solutions to everyday problems. {" "}
          While other people dabble in real estate, I have dabbled
          into quite a number of technologies (including Blockchain) among which
          I have acquired proficiency in a handful of them. I work with{" "}
          <span className="text-gray-100">
            Javascript, Typescript, React Js, Next Js
          </span>{" "}
          and much more on the client side. I Gather and refine specifications
          and requirements based on technical requirements or UX design . More ? I'm a{" "}
          <span className="text-gray-100">
            {" "}
            good team player & a fast learner
          </span>
          .
          <span className="text-gray-100">
          {" "}I love taking on new challenges.
          </span> {" "}
          I recently started exploring{" "}
          <span className="text-gray-100">Backend development.</span>{" "}I also
          write <span className="text-gray-100">technical articles</span> so as
          to clearly and effectively explain technical topics and to reinforce
          my knowledge. When I'm not{" "}
          <span className="text-gray-100">striking a balance</span> between
          functionality and aesthetic design or writing technical articles, you
          can find me catching up on my favorite movies.
        </p>

        <p ref={addToRefs} className="mt-12 rounded-lg inline-block ">
          <a
            className="text-white p-2 mt-10 rounded text-xl font-bold border-2 border-white"
            href="https://drive.google.com/file/d/1Yq4Ede1dBpif4_u3hStkVFHRulKkKc4g/view?usp=sharing"
          >
            My Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
