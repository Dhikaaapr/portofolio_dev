import { useState, useEffect, useRef } from "react";
import Filter from "bad-words";
import toast, { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import mail from "./mailer";
import styles from "./Contact.module.scss";
import { MENULINKS, SOCIAL_LINKS } from "../../constants";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "sans-serif",
  },
};

const Contact = () => {
  const initialState = { name: "", email: "", subject: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [mailerResponse, setMailerResponse] = useState("not initiated");
  const [isSending, setIsSending] = useState(false);
  const buttonElementRef = useRef(null);
  const sectionRef = useRef(null);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    value.length === 0 ? setIsSending(false) : setIsSending(true);
    setFormData((prevVal) => {
      if (
        value.trim() !== prevVal[id] &&
        value.trim().length > prevVal[id].trim().length
      ) {
        return { ...prevVal, [id]: filter.clean(value.trim()) };
      } else {
        return { ...prevVal, [id]: value };
      }
    });
  };

  const emptyForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (name === "" || email === "" || message === "") {
      toast.error("Please fill the required fields", { id: "error" });
      return setMailerResponse("empty");
    }

    setIsSending(true);

    const detailedMessage = `Subject: ${subject}\n\n${message}`;

    mail({ name, email, message: detailedMessage })
      .then((res) => {
        if (res.status === 200) {
          setMailerResponse("success");
          emptyForm();
          toast.success("Message sent successfully", { id: "success" });
        } else {
          setMailerResponse("error");
          toast.error("Error sending your message", { id: "error" });
        }
      })
      .catch((err) => {
        setMailerResponse("error");
        toast.error("Error sending your message", { id: "error" });
        console.error(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setMailerResponse("not initiated");
    }, 10000);
  }, [mailerResponse]);

  useEffect(() => {
    const btn = buttonElementRef.current;
    if (!btn) return;

    const clickHandler = (e) => {
      if (!btn.classList.contains("active")) {
        btn.classList.add("active");

        gsap.to(btn, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(btn, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  btn.removeAttribute("style");
                  gsap.fromTo(
                    btn,
                    { opacity: 0, y: -8 },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        btn.classList.remove("active");
                      },
                    },
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(btn, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": "#9f55ff",
              "--right-wing-background": "#9f55ff",
              duration: 0.11,
            },
            {
              "--left-wing-background": "#8b31ff",
              "--right-wing-background": "#8b31ff",
              duration: 0.14,
            },
            {
              "--left-body-background": "#9f55ff",
              "--right-body-background": "#9f55ff",
              duration: 0.25,
              delay: 0.1,
            },
            {
              "--trails-stroke": 171,
              duration: 0.22,
              delay: 0.22,
            },
            {
              "--success-opacity": 1,
              "--success-x": 0,
              duration: 0.2,
              delay: 0.15,
            },
            {
              "--success-stroke": 0,
              duration: 0.15,
            },
          ],
        });
      }
    };

    btn.addEventListener("click", clickHandler);
    return () => btn.removeEventListener("click", clickHandler);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } });

      tl.from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<",
      );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".contact-wrapper"),
        start: "top 60%",
        end: "bottom bottom",
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  const getIcon = (name) => {
    switch (name) {
      case "linkedin":
        return <FaLinkedin className="text-2xl" />;
      case "github":
        return <FaGithub className="text-2xl" />;
      case "instagram":
        return <FaInstagram className="text-2xl" />;
      default:
        return <FaEnvelope className="text-2xl" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="w-full relative select-none bg-black pt-20 pb-20 mt-20"
    >
      <div>
        <Toaster toastOptions={toastOptions} />
      </div>
      <div className="section-container flex flex-col justify-center contact-wrapper relative z-10">
        <div className="flex flex-col mb-12">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            CONTACT
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Get in Touch
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 staggered-reveal">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-[1.65rem] font-medium w-full text-white mb-6">
                Let&apos;s discuss on something{" "}
                <span className="text-purple-400">cool</span> together
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                I&apos;m interested in freelance opportunities. However, if you
                have other request or question, don&apos;t hesitate to use the
                form.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <a
                  href="mailto:andhika0143@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800 transition-colors border border-gray-800 group"
                >
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <FaEnvelope size={20} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-sm">
                    andhika0143@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map(
                (link) =>
                  link.name !== "mail" && (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
                    >
                      {getIcon(link.name)}
                    </a>
                  ),
              )}
            </div>
          </div>

          <form className="bg-gray-900/30 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  className="block w-full h-12 px-4 text-sm font-mono outline-none border border-gray-800 bg-gray-900 rounded-xl transition-all duration-200 focus:border-purple focus:ring-1 focus:ring-purple text-black placeholder:text-gray-600"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  className="block w-full h-12 px-4 text-sm font-mono outline-none border border-gray-800 bg-gray-900 rounded-xl transition-all duration-200 focus:border-purple focus:ring-1 focus:ring-purple text-black placeholder:text-gray-600"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="relative mt-6 group">
              <input
                type="text"
                id="subject"
                className="block w-full h-12 px-4 text-sm font-mono outline-none border border-gray-800 bg-gray-900 rounded-xl transition-all duration-200 focus:border-purple focus:ring-1 focus:ring-purple text-black placeholder:text-gray-600"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>

            <div className="relative mt-6 group">
              <textarea
                id="message"
                className="block w-full h-auto min-h-[10rem] max-h-[20rem] py-4 px-4 text-sm font-mono outline-none border border-gray-800 bg-gray-900 rounded-xl transition-all duration-200 focus:border-purple focus:ring-1 focus:ring-purple text-black placeholder:text-gray-600"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />
            </div>

            <div className="mt-9 link text-center md:text-right">
              <button
                ref={buttonElementRef}
                className={styles.button}
                disabled={
                  formData.name === "" ||
                  formData.email === "" ||
                  formData.message === ""
                }
                onClick={handleSubmit}
              >
                <span>Send Message -&gt;</span>
                <span className={styles.success}>
                  <svg viewBox="0 0 16 16">
                    <polyline points="3.75 9 7 12 13 5"></polyline>
                  </svg>
                  Sent
                </span>
                <svg className={styles.trails} viewBox="0 0 33 64">
                  <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                  <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
                </svg>
                <div className={styles.plane}>
                  <div className={styles.left} />
                  <div className={styles.right} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
