import React, { useState } from "react";
import {
  Menu,
  Icons,
  Sider as DefaultSider,
} from "@pankod/refine-antd";
import {
  useTranslate,
  useLogout,
  useTitle,
  CanAccess,
  ITreeMenu,
  useIsExistAuthentication,
  useRouterContext,
  useMenu,
  useRefineContext,
} from "@pankod/refine-core";

import { Title as DefaultTitle } from "../title";

const { UserOutlined, LogoutOutlined } = Icons;
const { SubMenu } = Menu;

export const CustomSider: typeof DefaultSider = ({ render }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const isExistAuthentication = useIsExistAuthentication();
  const { Link } = useRouterContext();
  const { mutate: mutateLogout } = useLogout();
  const Title = useTitle();
  const translate = useTranslate();
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const { hasDashboard } = useRefineContext();

  const RenderToTitle = Title ?? DefaultTitle;

  const renderView = (menuItems: ITreeMenu[], selectedKey: string) => {
    return menuItems.map((item: ITreeMenu) => {
      const { icon, label, route, name, children, parentName } = item;

      if (children.length > 0) {
        return (
          <CanAccess
            key={route}
            resource={name.toLowerCase()}
            action="list"
            params={{
              resource: item,
            }}
          >
            <SubMenu
              key={route}
              icon={icon ?? <UserOutlined />}
              title={label}
            >
              {renderView(children, selectedKey)}
            </SubMenu>
          </CanAccess>
        );
      }
      const isSelected = route === selectedKey;
      const isRoute = !(parentName !== undefined && children.length === 0);
      return (
        <CanAccess
          key={route}
          resource={name.toLowerCase()}
          action="list"
          params={{
            resource: item,
          }}
        >
          <Menu.Item
            key={route}
            style={{
              fontWeight: isSelected ? "bold" : "normal",
            }}
            icon={icon ?? (isRoute && <UserOutlined />)}
          >
            <Link to={route}>{label}</Link>
          </Menu.Item>
        </CanAccess>
      );
    });
  };
  const logout = isExistAuthentication && (
    <Menu.Item
      key="logout"
      onClick={() => mutateLogout()}
      icon={<LogoutOutlined />}
    >
      {translate("buttons.logout", "Logout")}
    </Menu.Item>
  );

  const dashboard = hasDashboard && (
    <Menu.Item
      key="dashboard"
      style={{
        fontWeight: selectedKey === "/" ? "bold" : "normal",
      }}
      icon={<Icons.DashboardOutlined />}
    >
      <Link href="/">{translate("dashboard.title", "Dashboard")}</Link>
    </Menu.Item>
  );

  const items = renderView(menuItems, selectedKey);

  const renderSider = () => {
    if (render) {
      return render({
        dashboard,
        items,
        logout,
        collapsed,
      });
    }
    return (
      <>
        {dashboard}
        {items}
        {logout}
      </>
    );
  };

  return (
      <>
        <RenderToTitle collapsed={false} />
        <Menu
          selectedKeys={[selectedKey]}
          defaultOpenKeys={defaultOpenKeys}
          mode="horizontal"
        >
          {renderSider()}
        </Menu>
      </>
  );
};