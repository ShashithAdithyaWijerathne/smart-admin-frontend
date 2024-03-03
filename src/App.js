import Login from "./Screens/login/login";
import Dashboard from "./Screens/dashboard/dashboard";
import FdProduct from "./Screens/fdProduct/fdProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calender" element={<Dashboard />} />
        <Route path="/fdProject" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
