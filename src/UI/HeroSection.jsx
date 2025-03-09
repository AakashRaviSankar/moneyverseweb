import { motion } from "framer-motion";
import HeroImage from "../assets/HeroSection.jpeg";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div
        className="container mx-auto  text-center text-white relative z-10 p-8"
        style={{ paddingTop: "200px" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold leading-tight mb-4 "
        >
          Unlock Your Earning Potential with Simple Tasks
        </motion.h1>
        <p className="text-xl mb-6">
          Complete easy tasks and earn exciting rewards. It’s fast, fun, and
          free!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ marginTop: "50px" }}
          className="bg-yellow-400  text-black  py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300"
        >
          <a href="MoneyVerse.apk">Download Now</a>
        </motion.button>
      </div>
    </section>
  );
}

export default HeroSection;
