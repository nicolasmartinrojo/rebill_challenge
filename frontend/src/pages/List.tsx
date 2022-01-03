import React from "react";
import { Table, message, Button, Popconfirm } from "antd";

import noteApi from "../services/NoteApi";

import { Link } from "react-router-dom";
const success = (id: string) => {
  noteApi.message(id).then((res) => {
    message.success(res.data);
  });
};
const List = () => {
  const columns = [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Message", dataIndex: "message", key: "message" },
    { title: "Image", dataIndex: "image", key: "image" },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id: string) => {
        return (
          <>
            <Button type="primary" onClick={() => success(id)}>
              Show message
            </Button>

            <Button type="dashed">
              <Link to={`/note/${id}`}>Edit</Link>
            </Button>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={() => confirm(id)}
              onCancel={cancel}
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

  function confirm(id: string) {
    noteApi.delete(id);
    message.success("Click on Yes");
  }

  function cancel(e: any) {
    console.log(e);
    message.error("Click on No");
  }
  const [data, setData] = React.useState([]);

  const refresh = () => {
    noteApi.list().then((res: any) => {
      setData(res.data);
    });
  };
  React.useEffect(() => {
    refresh();
  }, []);
  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default List;
