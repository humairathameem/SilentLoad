import { Bell } from "lucide-react";

const NavHeader = ({ userName }) => {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-200">

      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
          <Bell size={16} />
        </button>

        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-300 to-pink-400 text-white text-xs font-bold">
          {userName[0]}
        </div>
      </div>

      <img
        src="/silentloadlogo-removebg-preview.png"
        alt="SilentLoad"
        className="h-10 object-contain drop-shadow-sm"
      />
    </div>
  );
};

export default NavHeader;
