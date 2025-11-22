"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    const fade = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <div>

            <section className="relative min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 -z-10">
                    <img src="/main.jpeg" className="w-full h-full" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    variants={fadeUp}
                    className="text-center px-6">
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-black drop-shadow-2xl">
                        NeoGoth Vogue
                    </h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 0.3 }}
                        variants={fadeUp}
                        className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-black tracking-wide">
                        Тёмная элегантность и мистика
                    </motion.p>
                </motion.div>
            </section>

            <section className="relative min-h-screen bg-white py-20 md:py-24 lg:py-32">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={fadeUp}
                        className="text-center mb-16 lg:mb-24">
                        <h2 className="text-6xl sm:text-7xl md:text-9xl lg:text-10xl font-bold tracking-tight">
                            New Drop
                        </h2>
                        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase text-black/80">
                            autumn – winter 2025
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={fadeUp}
                        className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 xl:gap-28 mb-24 lg:mb-32">
                        <img
                            src="/first.jpeg"
                            className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[440px] rounded-xl shadow-2xl" />

                        <div className="flex-1 text-left lg:text-right">
                            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold tracking-tighter leading-none">
                                Shadows
                            </h2>
                            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-widest leading-tight">
                                descend
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={fadeUp}
                        className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 xl:gap-28">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl font-bold tracking-tighter leading-none">
                                Eclipse
                            </h2>
                            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-light tracking-widest leading-tight">
                                eternal
                            </p>
                        </div>

                        <img
                            src="/second.jpg"
                            className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[440px] rounded-xl shadow-2xl order-1 lg:order-2" />
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={fadeUp}
                    className="mt-30 text-center mb-16 lg:mb-24">
                    <h2 className="text-6xl sm:text-7xl md:text-9xl lg:text-10xl font-bold tracking-tight">
                        New world
                    </h2>
                    <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase text-black/80">
                        full of darkness is waiting for you
                    </p>
                </motion.div>
            </section>

            <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 mt-0 mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {["bags", "jewelry", "clothes"].map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            variants={fadeUp}
                            className="rounded-3xl shadow-xl overflow-hidden bg-white">
                            <img src={`/${item}.jpg`} className="w-full h-[380px] object-cover" />
                            <div className="bg-neutral-900 text-white text-center py-5 text-xl font-semibold tracking-wide">
                                {item === "bags" && "Сумки"}
                                {item === "jewelry" && "Украшения"}
                                {item === "clothes" && "Одежда"}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>

        </div>
    )
}
