import { motion } from "framer-motion";

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-10">How It Works</h2>
        <div className="flex justify-center space-x-8">
          {["Sign Up", "Complete Tasks", "Redeem Rewards"].map(
            (step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.4 }}
                className="p-6 bg-white rounded-xl shadow-xl flex flex-col items-center"
              >
                <i
                  className={`fas fa-${
                    step === "Sign Up"
                      ? "user-plus"
                      : step === "Complete Tasks"
                      ? "tasks"
                      : "gift"
                  } text-4xl text-blue-500 mb-4`}
                />
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  {step}
                </h3>
                <p className="text-gray-600">
                  Simple and easy steps to start earning today.
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
