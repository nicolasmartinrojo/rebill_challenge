import React from "react";
import { Form, Input, Button } from "antd";
import { Switch } from "antd";
import { INote } from "../models/INote";
import noteApi from "../services/NoteApi";
import { useParams } from "react-router-dom";
import WithLoader from "../components/WithLoader";
import { useNavigate } from "react-router-dom";

const NewMedia = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const onFinish = (values: any) => {
    if (id) {
      noteApi.update(id, values).then(console.log);
      navigate("../success", { replace: true });
    } else {
      noteApi.create(values).then(console.log);
      navigate("../success", { replace: true });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [data, setData] = React.useState<Partial<INote>>({ title: "aa" });
  React.useEffect(() => {
    if (id) {
      noteApi.single(id).then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <WithLoader isLoading={isLoading}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={data}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Is video?" name="is_video">
          <Switch defaultChecked />
        </Form.Item>

        <Form.Item
          label="Url"
          name="url"
          rules={[{ required: true, message: "Please input the url" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </WithLoader>
  );
};

export default NewMedia;
