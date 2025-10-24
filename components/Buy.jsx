import React from "react";
import { motion } from "framer-motion";

const Buy = () => {
  return (
    <>
      <section>
        <div className="w-full container mx-auto px-6 py-16 lg:py-20">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-bold text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-12 lg:mb-16"
          >
            HOW TO BUY
          </motion.h1>
          <div className="w-full max-w-[1200px] mx-auto grid lg:grid-cols-2 place-items-center gap-8 mb-12 lg:mb-16">
            <Box
              h1="Step 1 — Get a Wallet"
              l1="Install MetaMask or Trust Wallet."
              l2="Add BNB Smart Chain if needed (Network RPC: BSC)."
              display="hidden"
              index={0}
            />
            <Box
              h1="Step 2 — Fund with BNB"
              l1="Buy BNB on your preferred exchange (Binance, etc.)."
              l2="Withdraw to your wallet BEP-20 (BSC) address."
              display="hidden"
              index={1}
            />
            <Box
              h1="Step 3 — Go to PancakeSwap"
              l1="Open PancakeSwap > Swap."
              l2="Select BNB → $WESTIE."
              l3="Paste the contract: 0xYOURCONTRACT…"
              index={2}
            />
            <Box
              h1="Step 4 — Swap"
              l1="Set slippage (usually 0–2%; adjust only if needed)."
              l2="Confirm the transaction."
              l3="You're in — welcome to the swamp."
              index={3}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-between items-center pt-7 border-t border-black"
          >
            <h2 className="font-lilita md:text-xl lg:text-2xl">
              COPYTIGHT 2025
            </h2>
            <div className="flex items-center gap-4">
              <motion.a
                href="/"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  className="w-full max-w-[30px] md:max-w-[45px] object-cover"
                  src="b_x.png"
                />
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  className="w-full max-w-[30px] md:max-w-[45px] object-cover"
                  src="b_tele.png"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Buy;

const Box = ({ h1, l1, l2, l3, display, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 15px 40px rgba(240, 119, 78, 0.15)",
        transition: { duration: 0.2 },
      }}
      className="w-full h-full bg-[#FBFBFB] rounded-2xl p-5 lg:p-8 space-y-6 font-lilita uppercase"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        className="text-[#F0774E] text-xl md:text-2xl lg:text-3xl"
      >
        {h1}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        className="space-y-1 md:text-lg"
      >
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
          className={`text-[#B1A6A6]`}
        >
          {l1}
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
          className={` text-[#B1A6A6]`}
        >
          {l2}
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
          className={`${display} text-[#B1A6A6]`}
        >
          {l3}
        </motion.li>
      </motion.div>
    </motion.div>
  );
};
