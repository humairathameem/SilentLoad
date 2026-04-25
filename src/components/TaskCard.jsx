import { Clock, StickyNote, UserPlus, Check } from "lucide-react";

const CATEGORY = {
  Work: "bg-purple-100 text-purple-700 border-purple-300",
  Kids: "bg-pink-100 text-pink-600 border-pink-300",
  Home: "bg-orange-100 text-orange-600 border-orange-300",
  Personal: "bg-violet-100 text-violet-600 border-violet-300",
};

const TaskCard = ({
  task,
  isSelected = false,
  isDimmed = false,
  onToggle,
  onDelegate,
}) => {
  const catStyle = CATEGORY[task.category] || CATEGORY.Work;

  return (
    <div
      onClick={() => {
        if (!isDimmed && onToggle) onToggle();
      }}
      className={`relative rounded-xl border p-4 transition ${
        isSelected
          ? "bg-purple-50 border-purple-300 shadow-md"
          : "bg-white border-gray-200"
      } ${isDimmed ? "opacity-30 cursor-default" : ""} ${
        onToggle ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex gap-3">

        {/* Check (only if selection mode is used) */}
        {onToggle && (
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 ${
              isSelected
                ? "bg-purple-500 border-purple-500"
                : "border-gray-300"
            }`}
          >
            {isSelected && <Check size={12} className="text-white" />}
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            {task.name}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
              <Clock size={10} />
              {task.time}
            </div>

            <span
              className={`text-xs px-2 py-1 rounded-full border ${catStyle}`}
            >
              {task.category}
            </span>
          </div>

          {task.notes && (
            <div className="flex gap-1 text-xs text-gray-500 mt-2 bg-gray-100 p-2 rounded">
              <StickyNote size={10} />
              {task.notes}
            </div>
          )}
        </div>

        {/* Delegate (only if provided) */}
        {onDelegate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelegate();
            }}
            className="text-gray-400 hover:text-purple-500"
          >
            <UserPlus size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;