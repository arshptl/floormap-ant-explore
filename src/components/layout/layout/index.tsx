import React from "react";
import { LayoutProps } from "@pankod/refine-core";
import { AntdLayout } from "@pankod/refine-antd";
import { CustomSider } from "../sider";

export const Layout: React.FC<LayoutProps> = ({
  children,
  Footer,
  OffLayoutArea,
}) => {
  return (
    <AntdLayout>
      <AntdLayout.Header>
          <CustomSider />
      </AntdLayout.Header>   
      <AntdLayout.Content>                 
          <AntdLayout.Content>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {children}
            </div>          
          </AntdLayout.Content>
          {Footer && <Footer />}
        </AntdLayout.Content>
        {OffLayoutArea && <OffLayoutArea />}
    </AntdLayout>
  );
};