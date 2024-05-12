import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignupPage from "./SignupPage";
import Home from "./Home";
import Forgot from "./Forgot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
