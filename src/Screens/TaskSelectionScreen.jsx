import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import TaskCard from "../components/TaskCard";
import ProgressSlots from "../components/ProgressSlots";
import DelegateModal from "../components/DelegateModal";

const MAX_TASKS = 3;

// TEMP data (replace later)
const sampleTasks = [
  {
    id: "1",
    name: "Finish presentation",
    time: "10:00 AM",
    category: "Work",
    notes: "Slides pending",
  },
  {
    id: "2",
    name: "Pick up kids",
    time: "3:00 PM",
    category: "Kids",
  },
  {
    id: "3",
    name: "Clean kitchen",
    time: "6:00 PM",
    category: "Home",
  },
  {
    id: "4",
    name: "Workout",
    time: "7:00 PM",
    category: "Personal",
  },
];

const TaskSelectionScreen = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);
  const [showDelegate, setShowDelegate] = useState(false);

  const toggle = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((t) => t !== id));
    } else if (selected.length < MAX_TASKS) {
      setSelected([...selected, id]);
    }
  };

  const isMax = selected.length >= MAX_TASKS;
  const ready = selected.length === MAX_TASKS;
  const remaining = MAX_TASKS - selected.length;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FB]">

      {/* Top strip */}
      <div className="h-[3px] bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300" />

      {/* Header */}
      <div className="bg-white px-5 py-5 border-b border-gray-200">

        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          Task Selection
        </p>

        <h1 className="text-lg font-bold text-gray-900">
          Choose your {MAX_TASKS} tasks
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Based on your capacity today
        </p>

        <ProgressSlots count={selected.length} />
      </div>

      {/* Task List */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">

        {sampleTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            isSelected={selected.includes(task.id)}
            isDimmed={isMax && !selected.includes(task.id)}
            onToggle={() => toggle(task.id)}
            onDelegate={() => setShowDelegate(true)}
          />
        ))}

        {/* Max reached message */}
        {isMax && (
          <div className="text-center mt-3 text-sm text-purple-500 font-medium">
            That’s your 3 for today
          </div>
        )}

      </div>

      {/* CTA */}
      <div className="p-4">

        <button
          onClick={() => ready && navigate("/focus-mode")}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition ${
            ready
              ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          {ready
            ? "Start Focus Mode"
            : selected.length === 0
            ? `Select ${MAX_TASKS} tasks`
            : `${remaining} more to go`}

          {ready && <ArrowRight size={16} />}
        </button>

      </div>

      {/* Modal */}
      <DelegateModal
        open={showDelegate}
        onClose={() => setShowDelegate(false)}
      />

    </div>
  );
};

export default TaskSelectionScreen;