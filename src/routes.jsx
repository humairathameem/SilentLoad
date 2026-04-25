import { createBrowserRouter } from "react-router-dom";

import SplashScreen from "./Screens/SplashScreen";
import AuthScreen from "./Screens/AuthScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import AddTaskScreen from "./Screens/AddTaskScreen";
import MorningCheckInScreen from "./Screens/MorningCheckInScreen";
import CapacityResultScreen from "./Screens/CapacityResultScreen";
import TaskSelectionScreen from "./Screens/TaskSelectionScreen";
import FocusModeScreen from "./Screens/FocusModeScreen";
import EndOfDayScreen from "./Screens/EndOfDayScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/auth",
    element: <AuthScreen />,
  },
  {
    path: "/dashboard",
    element: <DashboardScreen />,
  },
  {
    path: "/add-task",
    element: <AddTaskScreen />,
  },
  {
    path: "/morning-checkin",
    element: <MorningCheckInScreen />,
  },
  {
    path: "/capacity-result",
    element: <CapacityResultScreen />,
  },
  {
    path: "/task-selection",
    element: <TaskSelectionScreen />,
  },
  {
    path: "/focus-mode",
    element: <FocusModeScreen />,
  },
  {
    path: "/end-of-day",
    element: <EndOfDayScreen />,
  },
]);
