"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const categories = [
        { key: "clothes", title: "Одежда", url: "https://pin.it/3eK0vXJMV", img: "/clothes.jpg" },
        { key: "bags", title: "Сумки", url: "https://pin.it/2lQZrVo1D", img: "/bags.jpg" },
        { key: "jewelry", title: "Украшения", url: "https://pin.it/7aXcAKD23", img: "/jewelry.jpg" },
    ];

    return (
        <div>
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 -z-10">
                    <img src="/main.jpeg" alt="NeoGoth Vogue" className="w-full h-full object-cover" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 1 }}
                    className="text-center px-6"
                >
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-black drop-shadow-2xl">
                        NeoGoth Vogue
                    </h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-black tracking-wide"
                    >
                        Тёмная элегантность и мистика
                    </motion.p>
                </motion.div>
            </section>

            <section className="bg-white py-24 lg:py-32">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight">
                            New Drop
                        </h2>
                        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase text-black/70">
                            autumn – winter 2025
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-center gap-16 mb-32"
                    >
                        <img src="/first.jpeg" alt="Shadows descend" className="w-full max-w-lg rounded-xl shadow-2xl" />
                        <div className="text-right">
                            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold leading-none">Shadows</h2>
                            <p className="text-6xl sm:text-7xl md:text-8xl font-light tracking-widest">descend</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col lg:flex-row-reverse items-center gap-16"
                    >
                        <img src="/second.jpg" alt="Eclipse eternal" className="w-full max-w-lg rounded-xl shadow-2xl" />
                        <div>
                            <h2 className="text-8xl sm:text-9xl md:text-10xl font-bold leading-none">Eclipse</h2>
                            <p className="text-7xl sm:text-8xl md:text-9xl font-light tracking-widest">eternal</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-32 text-center"
                    >
                        <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight">
                            New world
                        </h2>
                        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase text-black/70">
                            full of darkness is waiting for you
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        {categories.map((item, i) => (
                            <motion.a
                                key={item.key}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                variants={fadeUp}
                                className="rounded-3xl shadow-xl overflow-hidden bg-white block cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-[380px] object-cover"
                                />
                                <div className="bg-neutral-900 text-white text-center py-5 text-xl font-semibold tracking-wide">
                                    {item.title}
                                </div>
                            </motion.a>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
}