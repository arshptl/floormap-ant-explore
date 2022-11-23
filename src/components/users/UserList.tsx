import { List, Table, useTable } from "@pankod/refine-antd";

export const UserList: React.FC = () => {
  const { tableProps } = useTable<IPost>();
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="name" title="TITLE" />
        <Table.Column dataIndex="empid" title="EMP ID" />
        <Table.Column dataIndex="dep" title="DEPARTMENT" />
        <Table.Column dataIndex="actions" title="ACTIONS" />
      </Table>
    </List>
  );
};

interface IPost {
  title: string;
}
