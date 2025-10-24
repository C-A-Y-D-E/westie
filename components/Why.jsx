import React from "react";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <>
      <section>
        <div className="w-full container mx-auto px-6 py-16 lg:py-28 lg:pb-44">
          <div className="w-full grid lg:grid-cols-2 place-items-center gap-8 mx-auto">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[500px] object-cover"
              src="why.png"
            />
            <div className="w-full space-y-6 max-lg:text-center lg:ml-auto">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                Why $WESTIE?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                Westie isn't just cute, he's chaos on four paws. <br /> Born in
                the Highlands. Raised for the bull run. <br /> $WESTIE is a
                token powered by community, memes, and pure dog energy. 🐶✨
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex max-md:flex-col w-full max-w-[500px] max-lg:mx-auto items-center gap-6 text-white"
              >
                <motion.a
                  className="font-semibold w-full uppercase text-lg md:text-xl lg:text-2xl bg-[#F0774E] ds text-center py-3"
                  href="/"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Telegram
                </motion.a>
                <motion.a
                  className="font-semibold w-full uppercase text-lg md:text-xl lg:text-2xl bg-[#F0774E] ds text-center py-3"
                  href="/"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Twitter
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
