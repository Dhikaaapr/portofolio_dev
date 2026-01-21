/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        )
        .from(
          sectionRef.current.querySelectorAll(".skill-card"),
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "<+=0.5"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "top bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper z-10 relative">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>

          <div className="mt-10 grid gap-12">
            {SKILLS.map((category) => (
              <div key={category.category} className="staggered-reveal">
                <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-card flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:border-gray-600 hover:shadow-gray-900/50 transition-all duration-300 w-32 h-32 group hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
