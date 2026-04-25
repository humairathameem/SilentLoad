import { useNavigate } from "react-router-dom";
import { Play, Plus, ChevronRight } from "lucide-react";

import NavHeader from "../components/NavHeader";
import TaskCard from "../components/TaskCard";
import CapacityCard from "../components/CapacityCard";

// mock data (replace with real later)
const userName = "Sarah";

const sampleTasks = [
  { id: 1, name: "Finish presentation", time: "10:00 AM", category: "Work" },
  { id: 2, name: "Pick up kids", time: "3:00 PM", category: "Kids" },
  { id: 3, name: "Clean kitchen", time: "6:00 PM", category: "Home" },
];

const CAPACITY = 3;
const CAPACITY_MAX = 5;

const DashboardScreen = () => {
  const navigate = useNavigate();

  const displayedTasks = sampleTasks.slice(0, CAPACITY);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FB]">

      <NavHeader userName={userName} />

      <div className="flex-1 px-5 pt-6 pb-8 flex flex-col">

        {/* Greeting */}
        <div className="mb-5">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Today
          </p>

          <h1 className="text-2xl font-extrabold text-gray-900">
            Hi, {userName}.
          </h1>

          <p className="text-sm text-gray-400 mt-1">
            {CAPACITY} tasks ready for today.
          </p>
        </div>

        <CapacityCard capacity={CAPACITY} max={CAPACITY_MAX} />

        {/* CTA */}
        <button
          onClick={() => navigate("/morning-checkin")}
          className="w-full py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-purple-700 shadow-lg flex items-center justify-center gap-2 mb-2"
        >
          <Play size={16} />
          Start My Day
        </button>

        <button
          onClick={() => navigate("/add-task")}
          className="w-full py-3 rounded-2xl border border-gray-200 text-gray-600 flex items-center justify-center gap-2 mb-6"
        >
          <Plus size={16} />
          Add Task
        </button>

        {/* Tasks */}
        <div>

          <div className="flex justify-between items-center mb-3">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Today’s Tasks
            </span>

            <button className="flex items-center text-xs text-purple-500">
              See all <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {displayedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardScreen;