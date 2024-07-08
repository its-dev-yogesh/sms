"use client";
import { NAV_DEMO, NavList } from "@/components/Navbar";
import { NavContainer } from "@/components/Navbar/NavContainer";
import { NavItem } from "@/components/Navbar/NavItem";

import { NavItemInterface } from "@/interfaces/nav.interface";
import { toggleDrawer } from "@/stores";
import { useDrawerState } from "@/stores/selectors/drawer.selector";
import { getUniqueId } from "@/utils";
import { useRouter } from "next/navigation";

export const DashboardNavbar = () => {
  const router = useRouter();
  const drawerState = useDrawerState();
  const handleDrawerState = () => {
    toggleDrawer(!drawerState);
  };
  function handleIconButtonClick(urlTo: string) {
    router.push(urlTo);
  }

  const onClickHandlers = (navItem: NavItemInterface) => {
    switch (navItem.itemType) {
      case "ICON_BUTTON":
        handleIconButtonClick(navItem.urlTo);
        break;
      case "DROPDOWN":
        () => {};
        break;
      case "LINK":
        handleIconButtonClick(navItem.urlTo);
        break;
      case "TEXT":
        handleIconButtonClick(navItem.urlTo);
        break;
      default:
        () => {};
    }
  };

  const navItems = {
    start: [
      <>
        {NAV_DEMO.filter((item) => item.position === "START").map(
          (navItem, index) => (
            <NavItem
              key={index}
              item={navItem}
              onClick={() => onClickHandlers(navItem)}
            />
          )
        )}
      </>,
    ],
    center: [
      <>
        {NAV_DEMO.filter((item) => item.position === "CENTER").map(
          (navItem, index) => (
            <NavItem
              key={index}
              item={navItem}
              onClick={() => onClickHandlers(navItem)}
            />
          )
        )}
      </>,
    ],
    end: [
      <>
        {NAV_DEMO.filter((item) => item.position === "END").map(
          (navItem, index) => (
            <NavItem
              key={index}
              item={navItem}
              onClick={() => onClickHandlers(navItem)}
            />
          )
        )}
        {!drawerState && (
          <NavItem
            item={{
              position: "END",
              itemType: "ICON_BUTTON",
              urlTo: "",
              label: "mobile menu",
              showLabel: false,
              showIcon: true,
              icon: drawerState ? "mdi:menu-open" : "mdi:menu-close",
              width: "80%",
              className: "bg-none md:hidden",
              iconClass: "text-neutral",
              id: getUniqueId(),
            }}
            onClick={() => handleDrawerState()}
          />
        )}
      </>,
    ],
  };

  return (
    <NavContainer>
      <NavList navItems={navItems} />
    </NavContainer>
  );
};
