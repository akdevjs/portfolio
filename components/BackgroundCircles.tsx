import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] animate-ping" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[650px] mt-52 w-[650px] opacity-20 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
