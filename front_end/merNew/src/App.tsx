// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
//import AdminPage from "./pages/AdminPage";
import SignUPpanal from "./pages/signUPpage";
import RegInfo from "./pages/regInfo";
import DisplayInfo from "./pages/display_info";
import NavBar from "./navBar";
const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUPpanal />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/EMPLIN"
              element={<ProtectedRoute roles={["ADMIN", "EMPL"]} />}
            >
              <Route path="" element={<RegInfo />} />
            </Route>
            <Route
              path="/DATAIN"
              element={<ProtectedRoute roles={["ADMIN", "DATAEN"]} />}
            >
              <Route path="" element={<DisplayInfo />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
