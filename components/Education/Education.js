import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(sectionRef.current.querySelectorAll(".staggered-reveal"), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none bg-black pt-20 pb-10">
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col mb-12 items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 staggered-reveal opacity-0 translate-y-8">
            Education
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Degree Card */}
          <div className="w-full bg-gray-900/40 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm staggered-reveal opacity-0 translate-y-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="white"/>
               </svg>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                <div>
                     <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-black bg-white rounded-md uppercase">
                        still ongoing
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Bachelor of Information Technology
                    </h2>
                    <p className="text-gray-400 text-lg">University Paramadina</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            Sep 2023 - Jan 2026
                        </span>
                        <span className="flex items-center gap-2">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Jakarta, Indonesia
                        </span>
                    </div>
                </div>
                
                 <div className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shrink-0">
                    <span className="text-2xl font-bold text-black">3.85</span>
                    <span className="text-xs font-medium text-gray-500">GPA / 4.00</span>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overview */}
            <div className="bg-black p-8 rounded-3xl border border-gray-800 staggered-reveal opacity-0 translate-y-8 h-full">
                <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    Overview
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    Focused on Software Engineering, Human-Computer Interaction (HCI), and Full-Stack Web Development.
                    Specialized in building robust software systems and user-centered applications. Completed a capstone project
                    involving full-stack web development using modern technologies and industry best practices.
                </p>
            </div>

            {/* Key Achievements */}
             <div className="flex flex-col gap-4">
                 <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-2 staggered-reveal opacity-0 translate-y-8">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                     <span className="text-white">Key Achievements</span>
                </h3>
                
                {/* Achievement 1 */}
                <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 hover:bg-gray-900/50 transition-colors staggered-reveal opacity-0 translate-y-8">
                    <h4 className="font-bold text-white mb-2">Data Classification and Summarization Using IBM Granite (2025)</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Mengikuti proyek pembelajaran yang berfokus pada pemanfaatan teknologi AI IBM Granite untuk melakukan klasifikasi data dan pembuatan ringkasan otomatis (summarization). Dalam proyek ini, saya mempelajari cara kerja model language AI dalam memahami, mengelompokkan, dan menyederhanakan informasi berbasis teks.
                    </p>
                </div>

                {/* Achievement 2 */}
                 <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 hover:bg-gray-900/50 transition-colors staggered-reveal opacity-0 translate-y-8">
                    <h4 className="font-bold text-white mb-2">Beasiswa PSR (Paramadina Social Responsibility) (2023)</h4>
                     <p className="text-gray-400 text-xs leading-relaxed">
                        program beasiswa yang diselenggarakan oleh Universitas Paramadina untuk memberikan akses pendidikan tinggi bagi mereka yang berhak tetapi memiliki keterbatasan ekonomi. Beasiswa ini ditujukan untuk jenjang S1 di Universitas Paramadina, dengan fokus pada warga sekitar kampus atau mereka yang direkomendasikan oleh mitra universitas.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
