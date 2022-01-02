import React, { SyntheticEvent } from "react";
import { Table, message, Button, Popconfirm } from "antd";

import axios from "axios";
const success = () => {
  message.success("This is a normal message");
};
const List = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <>
          <Button type="primary" onClick={success}>
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
      ),
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

  const [theData, settheData] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/note");
  }, []);
  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
    },
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
      dataSource={data}
    />
  );
};

export default List;
