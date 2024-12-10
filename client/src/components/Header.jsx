import logo from "/logo.svg";

const Header = () => {
  return (
    <div className="p-5 border-b shadow-sm">
      <div className="flex justify-between items-center">
        <img
          className="w-[140px] md:w-[180px]  h-[50px]"
          src={logo}
          alt="logo"
        />
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
