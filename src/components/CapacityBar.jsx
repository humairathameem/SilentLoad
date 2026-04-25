const MAX_TASKS = 3;
const TOTAL_SLOTS = 5;

const CapacityBar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden mb-4">

      <div className="h-[3px] bg-gradient-to-r from-pink-400 via-purple-500 to-purple-700" />

      <div className="px-5 py-4">

        <div className="flex justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Today’s Limit
          </span>

          <span className="text-sm font-semibold text-purple-600">
            {MAX_TASKS} <span className="text-gray-400 font-normal">of {TOTAL_SLOTS}</span>
          </span>
        </div>

        <div className="flex gap-1 mb-3">
          {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded ${
                i < MAX_TASKS
                  ? "bg-gradient-to-r from-pink-400 to-purple-500"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between text-xs">
          <span className="text-gray-300">Recommended capacity</span>
          <span className="text-purple-500 font-medium">On track</span>
        </div>
      </div>
    </div>
  );
};

export default CapacityBar;