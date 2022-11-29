import { GetServerSideProps } from "next";
import {
  NextRouteComponent,
  handleRefineParams,
} from "@pankod/refine-nextjs-router";

import dataProvider from "@pankod/refine-simple-rest";
// const API_URL = "https://api.fake-rest.refine.dev";
const API_URL = "http://localhost:3000";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resource, action, id } = handleRefineParams(context.params?.refine);
  // console.log(resource, action, id);
  // console.log(resource.slice(resource.lastIndexOf("/") + 1));
  // console.log(resource.lastIndexOf("/"));
  
  
  try {
    if (resource && action === "show" && id) {
      const data = await dataProvider(API_URL).getOne({
        resource: resource.slice(resource.lastIndexOf("/") + 1),
        id,
      });

      console.log("data if action", data);


      return {
        props: {
          initialData: data,
        },
      };
    } else if (resource && !action && !id) {
      const data = await dataProvider(API_URL).getList({
        resource: resource.slice(resource.lastIndexOf("/") + 1),
      });

      console.log("data if !action", data);
      return {
        props: {
          initialData: data,
        },
      };
    }
  } catch (error) {
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default NextRouteComponent;

/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `NextRouteComponent` like the following:
 *
 * export default NextRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/
