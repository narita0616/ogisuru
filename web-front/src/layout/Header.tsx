import logo from "../assets/logo.png";
import login from "../assets/login.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-background h-20 flex px-8 border-b-4 border-black w-full">
      <div className="w-1/4 flex items-center"></div>
      <div className="w-1/2 flex justify-center">
        <img src={logo} alt="ロゴ" className="max-w-full h-auto" />
      </div>
      <div className="w-1/4 flex justify-end">
        <div className="flex text-2xl font-bold items-center">
          <img src={login} alt="ログイン" className="w-10" />
          <span>ログイン</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
