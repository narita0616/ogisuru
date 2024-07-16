import logo from "../assets/logo.png";
import login from "../assets/login.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-background h-20 flex px-8 border-b-4 border-black mb-12 w-full">
      <div className="w-1/4 flex items-center"></div>
      <div className="w-1/2 flex justify-center">
        <Link to="/">
          <img src={logo} alt="ロゴ" className="max-w-full h-full" />
        </Link>
      </div>
      <div className="w-1/4 flex justify-end">
        <Link to="/login" className="flex text-2xl font-bold items-center">
          <img src={login} alt="ログイン" className="w-10" />
          <span>ログイン</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
