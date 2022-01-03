import React from "react";
import { Button, Popconfirm, Table } from "antd";

import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

interface ListProps {
  model: string;
  extraColumns: object[];
  extraActions?: (id: string) => JSX.Element;
  listEndpoint: () => Promise<AxiosResponse<any, any>>;
  removeEndpoint: (id: string) => Promise<AxiosResponse<any, any>>;
}

const List = ({
  extraColumns,
  extraActions,
  listEndpoint,
  removeEndpoint,
  model,
}: ListProps) => {
  const [data, setData] = React.useState([]);

  function remove(id: string) {
    removeEndpoint(id).then(() => refresh());
  }

  const columns = [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    ...extraColumns,
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id: string) => {
        return (
          <>
            {extraActions && extraActions(id)}
            <Button type="dashed">
              <Link to={`/${model}/${id}`}>Edit</Link>
            </Button>
            <Popconfirm
              title="Are you sure to delete this element?"
              onConfirm={() => remove(id)}
              okText="Yes"
              cancelText="No"
            >
              <a href="#">Delete</a>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const refresh = () => {
    listEndpoint().then((res: any) => {
      setData(res.data);
    });
  };
  React.useEffect(() => {
    refresh();
  }, []);

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default List;
