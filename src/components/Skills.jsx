import skills from "./skillsData";
import SliderButtons from "./SliderButtons"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useState, useEffect } from "react";


function Skills() {

    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(4);
            }

        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const pages = [];

    for (let i = 0; i < skills.length; i += itemsPerPage) {
        pages.push(skills.slice(i, i + itemsPerPage));
    }

    return (
        <section
            id="skills"
            className="py-32 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div className="text-center">

                    <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-medium">
                        Technical Expertise
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Front-End Skills
                    </h2>

                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-5"></div>

                    <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-8">
                        The front-end technologies I use to build modern,
                        responsive web experiences.
                    </p>

                </div>

                {/* Slider */}

                <div className="relative mt-20">

                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        spaceBetween={40}
                        loop={true}
                    >

                        <SliderButtons />

                        {pages.map((page, index) => (

                            <SwiperSlide key={index}>

                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-16 gap-x-10 place-items-center px-6 lg:px-16 py-5">

                                    {page.map((skill) => {

                                        const size = 180;
                                        const strokeWidth = 12;
                                        const radius = (size - strokeWidth) / 2;
                                        const circumference = 2 * Math.PI * radius;
                                        const offset =
                                            circumference -
                                            (skill.percentage / 100) * circumference;

                                        return (

                                            <div
                                                key={skill.name}
                                                className="flex flex-col items-center group"
                                            >

                                                <div
                                                    className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                                    style={{
                                                        width: size,
                                                        height: size,
                                                    }}
                                                >

                                                    <svg
                                                        width={size}
                                                        height={size}
                                                        className="-rotate-90"
                                                    >

                                                        {/* Background */}

                                                        <circle
                                                            cx={size / 2}
                                                            cy={size / 2}
                                                            r={radius}
                                                            fill="none"
                                                            stroke="#374151"
                                                            strokeWidth={strokeWidth}
                                                        />

                                                        {/* Progress */}

                                                        <circle
                                                            cx={size / 2}
                                                            cy={size / 2}
                                                            r={radius}
                                                            fill="none"
                                                            stroke={skill.color}
                                                            strokeWidth={strokeWidth}
                                                            strokeLinecap="round"
                                                            strokeDasharray={circumference}
                                                            style={{
                                                                "--circumference": circumference,
                                                                "--offset": offset,
                                                                strokeDashoffset: circumference,
                                                                filter: `drop-shadow(0 0 2px ${skill.color})`,
                                                                animation: "progress 2.5s ease forwards",
                                                            }}
                                                        />
                                                    </svg>

                                                    {/* Percentage */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span
                                                            className="text-3xl font-bold"
                                                            style={{
                                                                color: skill.color,
                                                            }}
                                                        >
                                                            {skill.percentage}%
                                                        </span>
                                                    </div>

                                                </div>

                                                <h3 className="mt-6 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                                                    {skill.name}
                                                </h3>

                                            </div>

                                        );

                                    })}

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            </div>

        </section>
    );
}

export default Skills;
