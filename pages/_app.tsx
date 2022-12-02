import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
require("antd/dist/antd.less");

import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";
import { PostList, PostCreate, PostEdit, PostShow } from "@components/posts";

// import UserShow  from "../src/components/users/show";
import { UserShow, UserList } from "@components/users";
import { OccupySeat, CreateSeat } from "@components/occupyseat";

// const API_URL = "https://api.fake-rest.refine.dev";
const API_URL = "http://localhost:3000";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
      resources={[
        {
          name: "occupyseat",
          list: OccupySeat,
          create: CreateSeat,
        },
        {
          name: "users",
        },
        {
          name: "usersList",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
        {
          name: "UserProfile",
          list: UserList,
          show: UserShow,
        },
        
      ]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
