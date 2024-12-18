import { FaWpforms as form } from "react-icons/fa";
import { LuMessageSquareMore as response } from "react-icons/lu";
import { TbPresentationAnalytics as Analytics } from "react-icons/tb";
import { CiSettings as settings } from "react-icons/ci";
import { useState } from "react";

const SideNav = () => {
  const menuList = [
    { id: 1, name: "My Forms", icon: form, path: "/forms" },
    { id: 2, name: "Responses", icon: response, path: "/responses" },
    { id: 3, name: "Analytics", icon: Analytics, path: "/analytics" },
    { id: 4, name: "Settings", icon: settings, path: "/settings" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="h-screen shadow-md border">
      <div className="p-4">
        {menuList.map((menu) => (
          <h2
            onClick={() => setActiveTab(menu.id)}
            key={menu.id}
            className={`flex items-center gap-3 p-4 mb-3 text-gray-500 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer } ${
              activeTab === menu.id && "bg-primary rounded-md text-white"
            } `}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>

      <div className="fixed bottom-20 p-6 w-64 ">
        <button className="w-full btn btn-primary">Create Form</button>
        <div className="my-5">
          <progress className="progress w-full" value="30" max="100"></progress>
          <h2 className="text-gray-500 ">
            <strong>2 </strong>out of <strong>3</strong> file created
          </h2>
          <h2 className="text-gray-500 my-2">
            Upgrade your plan for unlimited forms
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
