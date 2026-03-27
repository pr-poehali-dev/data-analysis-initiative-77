import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/08e22ec9-6a70-46fa-9317-42e86b4a9a67/files/66969730-004a-42e4-ad58-029beef6399b.jpg"
          alt="Мутновская ГЕОТЭС — вид с воздуха"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">
          Охраняемый объект энергетики · Камчатский край
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          МУТНОВСКАЯ<br />ГЕОТЭС
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Стратегический объект геотермальной энергетики России. Ознакомьтесь с правилами посещения и охраны территории.
        </p>
        <a
          href="#rules"
          className="inline-block mt-8 border border-white text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Правила посещения
        </a>
      </div>
    </div>
  );
}