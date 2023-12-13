import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, LoginPage } from "./pages";

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
