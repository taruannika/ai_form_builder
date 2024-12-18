import SideNav from "../components/SideNav";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 fixed">
        <SideNav />
      </div>
      <div className="md:ml-64"> {children}</div>
    </div>
  );
};

export default DashBoardLayout;
