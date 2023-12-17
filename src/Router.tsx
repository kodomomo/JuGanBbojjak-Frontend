import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  MainPage,
  LoginPage,
  EventScheduleDetailPage,
  WorkReportPage,
  WritingEventSchedulePage,
  WeeklyWorkDetailPage,
} from "./Pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/eventScheduleDetail"
          element={<EventScheduleDetailPage />}
        />
        <Route path="/workReport" element={<WorkReportPage />} />
        <Route path="/writeSchedule" element={<WritingEventSchedulePage />} />
        <Route path="WeeklyWorkDetail" element={<WeeklyWorkDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
