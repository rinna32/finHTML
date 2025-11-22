import React from 'react';

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <section className="max-w-6xl mx-auto px-5 py-20">
                <div className="flex flex-col md:flex-row items-start gap-12 flex-wrap">
                    <img 
                        src="images/yes.jpg" 
                        alt="История бренда" 
                        className="w-full md:w-80 lg:w-96 shrink-0 object-cover rounded-none"
                    />
                    <p className="flex-1 text-lg leading-relaxed text-justify text-black">
                        Добро пожаловать в мир, где тьма становится частью красоты, а мистика — выражением индивидуальности. 
                        В нашем онлайн-ошестве мы объединяем стиль Дарк Дива и нео-готики — направления моды, которые сочетают в себе 
                        строгость и изысканность, загадочность и мрачную элегантность.
                    </p>
                </div>
            </section>

            
            <article className="max-w-6xl mx-auto px-5 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
                    Что такое Дарк Дива?
                </h2>
                <div className="flex flex-col md:flex-row items-start gap-8 flex-wrap">
                    <p className="flex-1 text-lg leading-relaxed text-justify text-black order-2 md:order-1">
                        Дарк Дива — это олицетворение силы, независимости и загадочности. Этот образ включает в себя насыщенные 
                        темные оттенки, загадочные украшения и драматичный стиль, сочетающий готические элементы с современной 
                        женственностью. Дарк Дива — это уверенная в себе личность, которая использует моду как средство 
                        самовыражения и борьбы с будничной серостью.
                    </p>
                    <img 
                        src="images/girls.jpg" 
                        alt="Дарк Дива" 
                        className="w-full md:w-64 lg:w-80 shrink-0 object-cover order-1 md:order-2"
                    />
                </div>
            </article>

           
            <article className="max-w-6xl mx-auto px-5 py-12">
                <div className="flex flex-col md:flex-row items-start gap-12 flex-wrap">
                    <img 
                        src="images/vibe.jpg" 
                        alt="Нео-готика" 
                        className="w-full md:w-80 lg:w-96 shrink-0 object-cover"
                    />
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Нео-готика: современная тьма
                        </h2>
                        <p className="text-lg leading-relaxed text-justify text-black">
                            Нео-готика — направление, которое объединяет классические готические мотивы с современными трендами. 
                            Это мода для тех, кто ценит мракаю красоту, мистику и уникальность. Важным элементом нео-готики являются 
                            кожаные изделия, кружева, латунь и серебро, а также эксперимент с текстурами и формами. Этот стиль 
                            позволяет создавать яркие и выразительные образы, которые подчеркнут ваши внутренние искры.
                        </p>
                    </div>
                </div>
            </article>

           
            <article className="max-w-4xl mx-auto px-5 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
                    Почему выбирают моду Дарк Дива и Нео-Готику?
                </h2>
                <ul className="space-y-4 text-lg text-black mb-10">
                    <li>Индивидуальность: выразите свою уникальность через насыщенную эстетику</li>
                    <li>Мистическая привлекательность: привлеките внимание своими загадочными образами</li>
                    <li>Гибкость: сочетайте классические готические элементы с современными трендами</li>
                    <li>Мощь и элегантность: создавайте образ сильной и стильной личности</li>
                </ul>
                <img 
                    src="images/end.jpg" 
                    alt="Готическая мода" 
                    className="w-full max-w-2xl mx-auto mt-8 object-cover"
                />
            </article>
        </div>
    );
}