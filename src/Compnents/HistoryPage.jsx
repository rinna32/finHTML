"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" }
    }
};

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-white py-24 lg:py-32">

            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="text-center text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-bold tracking-tighter mb-32">
                Наша история
            </motion.h1>

            <div className="max-w-7xl mx-auto px-6 space-y-32 lg:space-y-48">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <img
                        src="images\Goth_Shop.png"
                        alt="2018"
                        className="w-full lg:w-1/2 h-96 lg:h-[560px] object-cover rounded-3xl shadow-2xl" />
                    <div className="w-full lg:w-1/2 bg-gray-100 rounded-3xl p-12 lg:p-20 flex items-center justify-center">
                        <div className="max-w-lg text-center">
                            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                                2018
                            </h2>
                            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-black/80">
                                Москва. Тверская. Мастерская.
                            </p>
                            <p className="mt-6 text-lg lg:text-xl font-light leading-relaxed">
                                Рождение чистой готической эстетики — тяжёлая кожа, латунь, чёрное кружево.
                                Первая коллекция взрывает московский андерграунд.
                            </p>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
                    <img
                        src="images\1 (1).png"
                        alt="2021"
                        className="w-full lg:w-1/2 h-96 lg:h-[560px] object-cover rounded-3xl shadow-2xl" />
                    <div className="w-full lg:w-1/2 bg-gray-100 rounded-3xl p-12 lg:p-20 flex items-center justify-center">
                        <div className="max-w-lg text-center">
                            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                                2021
                            </h2>
                            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-black/80">
                                Парижская неделя моды
                            </p>
                            <p className="mt-6 text-lg lg:text-xl font-light leading-relaxed">
                                «Moscow After Dark» — мрачная готика покоряет Париж.
                                Vogue, i-D, стритстайл-камеры. Мир увидел нас.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <img
                        src="images\2 (1).png"
                        alt="2023"
                        className="w-full lg:w-1/2 h-96 lg:h-[560px] object-cover rounded-3xl shadow-2xl" />
                    <div className="w-full lg:w-1/2 bg-gray-100 rounded-3xl p-12 lg:p-20 flex items-center justify-center">
                        <div className="max-w-lg text-center">
                            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                                2023
                            </h2>
                            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-black/80">
                                Machine-A • Net-a-Porter • SSENSE
                            </p>
                            <p className="mt-6 text-lg lg:text-xl font-light leading-relaxed">
                                Московский нео-готический бренд признан одним из главных голосов
                                новой тёмной волны в мировой моде.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center pb-20">
                    <img
                        src="images\3 (1).png"
                        alt="Today"
                        className="w-full lg:w-1/2 h-96 lg:h-[560px] object-cover rounded-3xl shadow-2xl" />
                    <div className="w-full lg:w-1/2 bg-gray-100 rounded-3xl p-12 lg:p-20 flex items-center justify-center">
                        <div className="max-w-lg text-center">
                            <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-bold tracking-tighter leading-none">
                                Сегодня
                            </h2>
                            <p className="mt-6 text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-black/90">
                                Darkness is global
                            </p>
                            <p className="mt-8 text-lg lg:text-xl font-light leading-relaxed">
                                От московских подвалов до подиумов Парижа, Токио и Нью-Йорка.
                                Мы — не просто одежда. Мы — тёмная эстетика нового времени.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}