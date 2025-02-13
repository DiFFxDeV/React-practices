import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import LoginComp from "./components/LoginComp";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

//Router enable routing
//UserProvider wrapes all routes ot share the context everywhere means any component inside it can share data like props
//Routes is used for which comp is shows at which URL

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginComp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
