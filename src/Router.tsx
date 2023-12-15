import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, LoginPage, EventScheduleDetailPage } from "./pages";

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
