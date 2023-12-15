import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, LoginPage, EventScheduleDetailPage } from "./Pages";
import WorkReportPage from "./Pages/WorkReportPage";
import WritingEventSchedulePage from "./Pages/WritingEventSchedulePage";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/eventScheduleDetail" element={<EventScheduleDetailPage />} />
        <Route path="/workReport" element={<WorkReportPage/>}/>
        <Route path="/writeSchedule" element={<WritingEventSchedulePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
