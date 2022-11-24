import {
  IResourceComponentsProps,
  GetListResponse,
  useMany,
} from "@pankod/refine-core";
import { List, Table, useTable } from "@pankod/refine-antd";

export const UserList: React.FC<
  IResourceComponentsProps<GetListResponse<IUser>>
  > = ({ initialData }) => {
    console.log("initial data in user list", initialData);
    // const { tableProps } = useTable<IUser>();
    return (
      <div>
        {initialData?.data.map((da) => {
          return (
            <li>
              <p>{da.firstName}</p>
            </li>
          )
        })}
    </div>
    // <List>
    //   <Table {...tableProps} rowKey="id">
    //     <Table.Column dataIndex="name" title="TITLE" />
    //     <Table.Column dataIndex="empid" title="EMP ID" />
    //     <Table.Column dataIndex="dep" title="DEPARTMENT" />
    //     <Table.Column dataIndex="actions" title="ACTIONS" />
    //   </Table>
    // </List>
  );
};

interface IUser {
  firstName: string;
}




// import { useShow } from "@pankod/refine-core";
// import { Show, Typography } from "@pankod/refine-antd";

// const { Title, Text } = Typography;

// export const UserList: React.FC = () => {
//   const { queryResult } = useShow<IUser>();
//   console.log(queryResult);
  
//   const { data, isLoading } = queryResult;
//   const record = data?.data;

//   console.log(record);
  

//   return (
//     <Show isLoading={isLoading}>
//       <Title level={5}>Id</Title>
//       <Text>{record?.firstName}</Text>

//       <Title level={5}>Title</Title>
//       <Text>{record?.firstName}</Text>
//     </Show>
//   );
// };

// interface IUser {
//   id: number;
//   firstName: string;
// }
