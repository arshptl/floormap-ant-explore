import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";
// import dataProvider from "@pankod/refine-simple-rest";
import dataProvider, { GraphQLClient } from "@pankod/refine-graphql";

require("antd/dist/antd.less");

import {
  Title,
  Header,
  CustomSider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";
import { PostList, PostCreate, PostEdit, PostShow } from "@components/posts";

// import UserShow  from "../src/components/users/show";
import { UserShow, UserList } from "@components/users";
import { OccupySeat, CreateSeat } from "@components/occupyseat";

// const API_URL = "https://api.fake-rest.refine.dev";
// const API_URL = "http://localhost:3000";
const API_URL =
  "https://878c-2401-4900-1f3e-6222-8c7b-64fc-3296-c09c.in.ngrok.io/pg/graphql";
const client = new GraphQLClient(API_URL);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(client)}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      Title={Title}
      Header={Header}
      Sider={CustomSider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
      resources={[
        {
          name: "userlist",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
        {
          name: "userprofile",
          list: UserList,
          show: UserShow,
        },
        {
          name: "occupyseat",
          list: OccupySeat,
          create: CreateSeat,
        },
      ]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
