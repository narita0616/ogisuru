import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImageTheme from "./pages/ImageTheme";
import TextTheme from "./pages/TextTheme";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/textthemes" element={<TextTheme />} />
      <Route path="/imagetheme" element={<ImageTheme />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
