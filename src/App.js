import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import LoginComp from "./components/LoginComp";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Dbounce from "./components/Dbounce";
import UserData from "./pages/UserData";
import Navbar from "./components/Navbar";

//Router enable routing
//UserProvider wrapes all routes ot share the context everywhere means any component inside it can share data like props
//Routes is used for which comp is shows at which URL

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<LoginComp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/userdata" element={<UserData />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
