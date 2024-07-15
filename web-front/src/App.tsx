import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImageThemes from "./pages/ImageThemes";
import TextThemes from "./pages/TextThemes";
import ThemeList from "./pages/ThemeList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PostTheme from "./pages/PostTheme";
import MyPage from "./pages/MyPage";
import MyThemes from "./pages/MyThemes";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/imagetheme" element={<ImageThemes />} />
      <Route path="/textthemes" element={<TextThemes />} />
      <Route path="/themelist" element={<ThemeList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/posttheme" element={<PostTheme />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mythemes" element={<MyThemes />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
