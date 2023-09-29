import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./Components/Screen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/tmp/drteresajbryant.com/" element={<Screen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
