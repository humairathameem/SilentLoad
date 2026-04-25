import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import CapacityRing from "../components/CapacityRing";
import CapacityBar from "../components/CapacityBar";
import InfoCard from "../components/InfoCard";

const MAX_TASKS = 3;

const CapacityResultScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FB]">

      {/* Top strip */}
      <div className="h-[3px] bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300" />

      <div className="flex-1 px-5 pt-10 pb-8 flex flex-col">

        {/* Center */}
        <div className="flex flex-col items-center">
          <CapacityRing />

          <div className="text-center mb-8">
            <h1 className="text-lg font-bold text-gray-900 mb-2">
              Your limit for today
            </h1>
            <p className="text-sm text-gray-400">
              Based on your check-in, we recommend keeping it to {MAX_TASKS} tasks.
            </p>
          </div>
        </div>

        <CapacityBar />
        <InfoCard />

        {/* CTA */}
        <div className="mt-auto">
          <button
            onClick={() => navigate("/task-selection")}
            className="w-full py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-purple-700 shadow-lg flex items-center justify-center gap-2"
          >
            Choose My {MAX_TASKS} Tasks
            <ArrowRight size={16} />
          </button>

          <p className="text-center mt-3 text-xs text-gray-300">
            You can always adjust later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapacityResultScreen;