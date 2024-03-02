// import Login from "./Screens/login";
import Dashboard from "./Screens/dashboard/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <Dashboard />
    // </div>
  );
}

export default App;
