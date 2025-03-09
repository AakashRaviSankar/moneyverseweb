import { motion } from "framer-motion";

function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-10">
          How EarnEasy Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Complete Tasks", "Get Instant Rewards", "Cash Out Easily"].map(
            (feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.5 }}
                className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <i
                  className={`fas fa-${
                    feature === "Complete Tasks"
                      ? "clipboard-list"
                      : feature === "Get Instant Rewards"
                      ? "gift"
                      : "money-bill-wave"
                  } text-4xl text-blue-500 mb-4`}
                />
                <h3 className="text-xl font-semibold text-blue-500 mb-2">
                  {feature}
                </h3>
                <p className="text-gray-700">
                  Start earning by completing simple tasks. Redeem your rewards
                  anytime.
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
