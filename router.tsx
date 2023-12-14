import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./src/components/header/index";
import WritingEventSchedulePage from "./src/Pages/WritingEventSchdulePage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/writingEventSchedule" element={<WritingEventSchedulePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
