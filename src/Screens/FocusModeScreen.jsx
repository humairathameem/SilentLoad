import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Check, Bell, X, Moon } from "lucide-react";

const MAX_FOCUS = 3;

// sample fallback (replace with real data later)
const sampleTasks = [
  { id: "1", name: "Finish presentation", time: "10:00 AM", category: "Work" },
  { id: "2", name: "Pick up kids", time: "3:00 PM", category: "Kids" },
  { id: "3", name: "Clean kitchen", time: "6:00 PM", category: "Home" },
];

const FocusModeScreen = () => {
  const navigate = useNavigate();

  const [completedTasks, setCompletedTasks] = useState([]);
  const [completingTask, setCompletingTask] = useState(null);
  const [showReminder, setShowReminder] = useState(false);
  const [showEndSheet, setShowEndSheet] = useState(false);

  const selectedTasks = sampleTasks.slice(0, MAX_FOCUS);

  const activeTask = selectedTasks.find(
    (t) => !completedTasks.includes(t.id) && t.id !== completingTask
  );

  const allCompleted = completedTasks.length === selectedTasks.length;

  useEffect(() => {
    const timer = setTimeout(() => setShowReminder(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const markDone = (id) => {
    setCompletingTask(id);
    setTimeout(() => {
      setCompletedTasks((prev) => [...prev, id]);
      setCompletingTask(null);
    }, 300);
  };

  const handleEndDay = () => {
    if (allCompleted) navigate("/end-of-day");
    else setShowEndSheet(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FB]">

      {/* Top strip */}
      <div className="h-[3px] bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300" />

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-5 py-5">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          Focus Mode
        </p>

        <h1 className="text-lg font-bold text-gray-900">
          {allCompleted ? "All done today" : "Keep going"}
        </h1>

        {/* Progress */}
        <div className="flex gap-1 mt-4 mb-2">
          {selectedTasks.map((task) => {
            const done = completedTasks.includes(task.id);
            const active = activeTask?.id === task.id;

            return (
              <div
                key={task.id}
                className={`flex-1 h-1.5 rounded ${
                  done
                    ? "bg-green-400"
                    : active
                    ? "bg-purple-500"
                    : "bg-gray-200"
                }`}
              />
            );
          })}
        </div>

        <div className="flex justify-between text-xs">
          <span className="text-gray-400">
            {completedTasks.length}/{selectedTasks.length}
          </span>
        </div>
      </div>

      {/* Reminder */}
      {showReminder && (
        <div className="px-4 mt-3">
          <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">

            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center text-white">
              <Bell size={14} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">
                Gentle reminder
              </p>
              <p className="text-xs text-gray-400">
                Stay focused on your task
              </p>
            </div>

            <button onClick={() => setShowReminder(false)}>
              <X size={14} className="text-gray-300" />
            </button>

          </div>
        </div>
      )}

      {/* Tasks */}
      <div className="flex-1 px-4 pt-4 flex flex-col gap-3 overflow-y-auto">

        {selectedTasks.map((task) => {
          const done = completedTasks.includes(task.id);
          const active = activeTask?.id === task.id;

          return (
            <div
              key={task.id}
              className={`rounded-xl border p-4 ${
                done
                  ? "bg-green-50 border-green-200"
                  : active
                  ? "bg-white border-purple-300 shadow-md"
                  : "bg-white border-gray-200 opacity-70"
              }`}
            >

              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-800">
                  {task.name}
                </span>

                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock size={12} /> {task.time}
                </span>
              </div>

              {!done && (
                <button
                  onClick={() => markDone(task.id)}
                  className="w-full mt-3 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Check size={14} />
                  Mark Done
                </button>
              )}

              {done && (
                <p className="text-xs text-green-500 mt-2">
                  Completed
                </p>
              )}

            </div>
          );
        })}

      </div>

      {/* Footer */}
      <div className="px-4 pb-6 pt-4 border-t border-gray-200">

        <button
          onClick={handleEndDay}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 ${
            allCompleted
              ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
              : "border border-gray-200 text-gray-500"
          }`}
        >
          <Moon size={14} />
          {allCompleted ? "End My Day" : "That’s enough for today"}
        </button>

        {!allCompleted && (
          <p className="text-xs text-gray-300 text-center mt-2">
            You can continue later — no pressure
          </p>
        )}
      </div>

      {/* End Sheet */}
      {showEndSheet && (
        <div className="fixed inset-0 bg-black/30 flex items-end">
          <div className="bg-white w-full rounded-t-2xl p-5">

            <h2 className="text-lg font-bold mb-2">
              Ready to wrap up?
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              You’ve made progress today.
            </p>

            <button
              onClick={() => {
                setShowEndSheet(false);
                navigate("/end-of-day");
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold mb-2"
            >
              End my day
            </button>

            <button
              onClick={() => setShowEndSheet(false)}
              className="w-full py-3 rounded-xl border border-gray-200 text-gray-500"
            >
              Keep going
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default FocusModeScreen;