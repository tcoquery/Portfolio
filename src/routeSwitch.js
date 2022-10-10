import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Mentions from "./components/mentions";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;