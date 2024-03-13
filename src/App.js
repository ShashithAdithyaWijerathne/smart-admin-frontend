// import Login from "./Screens/login/login";
// import Dashboard from "./Screens/dashboard/dashboard";
import SideNavBar from "./SideNavBar/SideNavBar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/fdProject" element={<Dashboard />} />
//         <Route path="/users" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <SideNavBar />
    </div>
  );
}

export default App;
