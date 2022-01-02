import React from "react";
import { Table, message, Button, Popconfirm } from "antd";

import noteApi from "../services/NoteApi";
import { INote } from "../models/INote";
const success = (row: INote) => {
  noteApi.message(row.id).then((res) => {
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
      render: (row: INote) => {
        return (
          <>
            <Button type="primary" onClick={() => success(row)}>
              Display normal message
            </Button>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={confirm}
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

  function confirm(e: any) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e: any) {
    console.log(e);
    message.error("Click on No");
  }
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    noteApi.list().then((res: any) => {
      setData(res.data);
    });
  }, []);
  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default List;
