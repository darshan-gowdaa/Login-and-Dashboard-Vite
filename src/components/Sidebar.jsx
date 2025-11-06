import React, { useState, useEffect, useRef } from "react";
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
  X,
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

const Sidebar = ({ mobileOpen = false, setMobileOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // Auto-collapse on small viewports (mobile). Keeps in sync on resize.
  useEffect(() => {
    const handleResize = () => {
      // Tailwind md breakpoint is 768px — treat narrower as mobile
      const mobile = window.innerWidth < 768;
      // when mobile and the drawer is open (mobileOpen), keep expanded (not collapsed)
      setIsCollapsed(mobile && !mobileOpen);
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

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

  const drawerRef = useRef(null);

  // focus trap + Escape handling for mobile drawer
  useEffect(() => {
    if (!(mobileOpen && isMobile && drawerRef.current)) return;

    const node = drawerRef.current;
    const prevActive = document.activeElement;

    const focusableSelector =
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      node.querySelectorAll(focusableSelector)
    ).filter((el) => !el.hasAttribute("disabled"));

    if (focusable.length) focusable[0].focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen && setMobileOpen(false);
        return;
      }
      if (e.key === "Tab") {
        // handle tab wrap
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      try {
        prevActive && prevActive.focus && prevActive.focus();
      } catch (e) {}
    };
  }, [mobileOpen, isMobile, setMobileOpen]);

  // if mobileOpen and isMobile, render a centered full-screen overlay drawer
  if (mobileOpen && isMobile) {
    return (
      <>
        <div
          className="fixed inset-0 z-40 bg-black overlay-fade-in"
          onClick={() => setMobileOpen && setMobileOpen(false)}
        />
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            ref={drawerRef}
            className="drawer-panel w-full h-full p-4 text-white backdrop-blur-lg bg-opacity-95 bg-gray-900 overflow-auto mobile-drawer-slide-in"
          >
            <div className="flex items-center justify-between">
              <div className={`text-2xl font-bold`}>LOGO</div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer hover:bg-dark-700">
                <button
                  onClick={() => setMobileOpen && setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white hover:text-gray-300" />
                </button>
              </div>
            </div>
            <div className="my-4 border-t border-white opacity-20"></div>
            <div className="flex-1 overflow-y-auto no-scrollbar">
              {renderMenu(menuItems)}
            </div>
            <div className="my-4 border-t border-white opacity-20"></div>
            <div>{renderMenu(bottomMenuItems)}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    // hide the regular sidebar on small screens — md+ show as before
    <div
      className={`hidden md:flex flex-col h-screen p-4 text-white backdrop-blur-lg bg-opacity-80 transition-all duration-500 ease-in-out sidebar-slide-in ${
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
