import React from "react";
import { Button, message, Popconfirm, Space, Table } from "antd";

import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

interface ListProps {
  model: string;
  extraColumns: object[];
  extraActions?: (id: string) => JSX.Element;
  listEndpoint: () => Promise<AxiosResponse<any, any>>;
  removeEndpoint: (id: string) => Promise<AxiosResponse<any, any>>;
  messageEndpoint: (id: string) => Promise<AxiosResponse<any, any>>;
}

const List = ({
  extraColumns,
  extraActions,
  listEndpoint,
  removeEndpoint,
  messageEndpoint,
  model,
}: ListProps) => {
  const [data, setData] = React.useState([]);

  const success = (id: string) => {
    messageEndpoint(id).then((res) => {
      message.success(res.data);
    });
  };

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
            <Space size={"small"}>
              {extraActions && extraActions(id)}
              <Button type="primary" onClick={() => success(id)}>
                Show message
              </Button>
              <Button>
                <Link to={`/${model}/${id}`}>Edit</Link>
              </Button>
              <Popconfirm
                title="Are you sure to delete this element?"
                onConfirm={() => remove(id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>Delete</Button>
              </Popconfirm>
            </Space>
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
