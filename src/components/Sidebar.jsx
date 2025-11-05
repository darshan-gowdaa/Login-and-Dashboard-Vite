import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Settings,
  Users,
  Mail,
  UserCog,
  FileText,
  CreditCard,
  Receipt,
  FileSpreadsheet,
  LifeBuoy,
  Ticket,
  LogOut,
  Menu,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Offer Management", icon: Package, path: "/offer-management" },
  { title: "Manage Packages", icon: Settings, path: "/manage-packages" },
  { title: "Manage Subscription", icon: Users, path: "/manage-subscription" },
  { title: "Invitations", icon: Mail, path: "/invitations" },
  { title: "Create/Manage Roles", icon: UserCog, path: "/roles" },
  { title: "Content Management", icon: FileText, path: "/content" },
  { title: "Payment Gateways", icon: CreditCard, path: "/payment" },
  { title: "Taxes", icon: Receipt, path: "/taxes" },
  { title: "Billing & Invoices", icon: FileSpreadsheet, path: "/billing" },
];

const bottomMenuItems = [
  { title: "Support", icon: LifeBuoy, path: "/support" },
  { title: "Raise a Ticket", icon: Ticket, path: "/ticket" },
  { title: "Logout", icon: LogOut, path: "/login" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const renderMenu = (items) =>
    items.map(({ title, icon: Icon, path }, index) => {
      // Only Dashboard and Logout are enabled on hover
      const isEnabled = title === "Dashboard" || title === "Logout";
      return (
        <div
          key={index}
          className={`flex items-center p-3 space-x-2 rounded-lg cursor-pointer hover:bg-dark-700 group transition-all duration-300 ease-in-out ${
            isCollapsed ? "justify-center" : ""
          }
          ${
            !isEnabled
              ? "hover:cursor-not-allowed hover:opacity-60 hover:text-red-500"
              : ""
          }`}
          style={!isEnabled ? { cursor: "not-allowed" } : {}}
          onClick={() => isEnabled && handleNavigation(path)}
        >
          <Icon
            className={`w-7 h-7 ${
              !isEnabled
                ? "group-hover:text-red-500"
                : "text-primary-orange group-hover:text-white"
            }`}
          />
          {!isCollapsed && (
            <span
              className={`${
                !isEnabled
                  ? "group-hover:text-red-500"
                  : "group-hover:text-white"
              }`}
            >
              {title}
            </span>
          )}
        </div>
      );
    });

  return (
    <div
      className={`flex flex-col h-screen p-4 text-white backdrop-blur-lg bg-opacity-80 transition-all ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`text-2xl font-bold ${isCollapsed ? "hidden" : "block"}`}
        >
          LOGO
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer hover:bg-dark-700">
          <Menu
            className="w-6 h-6 text-primary-orange hover:text-white"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <div className="my-4 border-t border-white opacity-40"></div>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {renderMenu(menuItems)}
      </div>
      <div className="my-4 border-t border-white opacity-40"></div>
      <div>{renderMenu(bottomMenuItems)}</div>
    </div>
  );
};

export default Sidebar;
