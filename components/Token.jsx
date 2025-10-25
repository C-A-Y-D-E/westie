import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Token = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <section>
        <div className="w-full container mx-auto px-6 py-16 lg:py-28">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-extrabold text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-14 lg:mb-20"
          >
            TOKENOMICS
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full grid lg:grid-cols-3 place-items-center gap-8 mx-auto mb-8"
          >
            <Box h2="Token name" h1="WESTIE" index={0} />
            <Box h2="Token symbol" h1="WESTIE" index={1} />
            <Box h2="Token supply" h1="100M" index={2} />
            {/* <Box h2="Token Tax" h1="Tax (3% / 3%) Breakdown:
1% — Auto Buyback & Burn
2% — Marketing & Charity" index={3} /> */}

<motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: 3 * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 },
      }}
      className="w-full h-full py-3 text-center space-y-3 bg-[#FBFBFB] rounded-xl"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 3 * 0.1 + 0.2 }}
        className="text-[#F0774E] font-extrabold text-xl md:text-2xl"
      >
       Token Tax (3% / 3%)
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 3 * 0.1 + 0.3 }}
        className="font-bold  text-[#B1A6A6] text-2xl md:text-2xl lg:text-2xl xl:text-2xl uppercase"
      >

1% — Auto Buyback & Burn <br/>
2% — Marketing & Charity <br/>
      </motion.h1>
    </motion.div>
            <Box h2="Liquidity" h1="Locked" index={4} />
            <Box h2="Token chain" h1="bsc" index={5} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-[#FBFBFB] rounded-xl p-1 md:p-4 flex justify-between items-center gap-2"
          >
            <h2 className="text-[12px] md:text-2xl lg:text-3xl xl:text-4xl">
              0xBB325ddE9b92e0E02b01272f761Ddf51D93FABd8
            </h2>
            <CopyToClipboard
              text="0xBB325ddE9b92e0E02b01272f761Ddf51D93FABd8"
              onCopy={handleCopy}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {copied ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-600 font-bold"
                  >
                    Copied
                  </motion.span>
                ) : (
                  <img
                    className="w-full max-w-[20px] md:max-w-[45px] object-cover"
                    src="copy.png"
                  />
                )}
              </motion.button>
            </CopyToClipboard>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Token;

const Box = ({ h2, h1, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 },
      }}
      className="w-full h-full py-3 text-center space-y-3 bg-[#FBFBFB] rounded-xl"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="text-[#F0774E] font-extrabold text-xl md:text-2xl"
      >
        {h2}
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className="font-bold text-[#B1A6A6] text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase"
      >
        {h1}
      </motion.h1>
    </motion.div>
  );
};
