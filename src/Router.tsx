import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import LoginPage from "./pages/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
