import Login from "./Screens/login/login";
import { Navigate } from 'react-router-dom';

const isLoggedIn = false;


function App() {
  return (
    <div className="App">
      {/* Redirect to dashboard if logged in */}
      {isLoggedIn && <Navigate to="/dashboard" replace />}

      {/* Render Login component */}
      <Login />
    </div>
  );
}

export default App;
