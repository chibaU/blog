import React from "react";
import { motion } from "motion/react";
// import LogoSVG from "@assets/logo.svg?react";

const Logo = () => {
  return (
    <motion.button
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-teal-500 flex items-center justify-center">
          <span className="text-white font-bold ">A</span>
          <div className="absolute inset-0 rounded-lg bg-linear-to-br from-purple-600 to-teal-500 blur opacity-50 group-hover:opacity-75 transition-opacity" />
        </div>
        <span className="font-bold text-white hidden sm:block">
          Abdallah Chiba
        </span>
      </div>
    </motion.button>
  );
};

export default Logo;
