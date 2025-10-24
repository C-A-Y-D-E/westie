import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section>
        <div className="w-full container mx-auto px-6 pt-10 lg:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-extrabold text-[#999999] uppercase text-center text-5xl md:text-7xl  lg:text-8xl max-lg:mb-12"
          >
            Every bull <br /> run has a dog.
          </motion.h1>
          <div className="w-full flex max-lg:flex-col justify-between max-lg:items-center items-end gap-8 mx-auto lg:mt-[-2%]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex max-md:justify-center max-lg:order-2 max-md:w-full items-center gap-5 md:mb-14"
            >
              <motion.a
                href="/"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img className="w-full max-w-[45px] object-cover" src="x.png" />
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className="w-full max-w-[45px] object-cover"
                  src="tele.png"
                />
              </motion.a>
              <motion.a
                className="px-8 py-[5px] rounded-full bg-[#F2784E] text-white uppercase text-xl md:text-2xl font-semibold ds"
                href="/"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(242, 120, 78, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                buy
              </motion.a>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="w-full max-w-[450px] xl:max-w-[550px] max-lg:order-3"
              src="hero.png"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative md:mb-14"
            >
              <motion.img
                className="w-full max-w-[70px] lg:max-w-[90px] object-cover absolute top-[-18%] md:top-[-18%] left-1/2 -translate-x-1/2"
                src="bone.png"
              />
              <div className="w-full p-7 pt-12 max-lg:order-1 bg-[#F0774E] text-center ">
                <motion.h1
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
                  className="text-4xl px-7 mb-5 lg:text-5xl xl:text-6xl text-white font-extrabold"
                >
                  0.3 <br /> BNB
                </motion.h1>
                <motion.a
                  className="w-full px-6 py-2 mb-5 bg-white font-extrabold uppercase text-nowrap inline-block"
                  href="/"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  join presale
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
