import React from "react";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/TodoList.jsx";

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;
