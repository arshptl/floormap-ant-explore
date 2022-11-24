import { IResourceComponentsProps, useOne, useShow } from "@pankod/refine-core";
import React from 'react'

export const UserShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IUser>();
  console.log(queryResult);
  const { data, isLoading } = queryResult;
  console.log(data)

  return (
      <div>show
          <div>{data?.data.firstName}</div>
    </div>
  )
}



interface IUser {
    id: number;
    firstName: string;
}