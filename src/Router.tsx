import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
