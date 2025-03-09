import React from "react";

function RewardsSection() {
  return (
    <section id="rewards" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Your Rewards</h2>
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full bg-gray-200 rounded-full h-4 mb-8"
        >
          <div
            className="bg-yellow-400 h-4 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <p className="text-xl text-gray-700 mb-6">
          You are 50% closer to your first reward! Keep going!
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-400">
            Claim Gift Card
          </button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-400">
            Cash Out via PayPal
          </button>
        </div>
      </div>
    </section>
  );
}

export default RewardsSection;
