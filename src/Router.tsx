import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import EventScheduleDetailPage from "./pages/eventScheduleDetailPage";
import LoginPage from "./pages/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/eventScheduleDetail" element={<EventScheduleDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
