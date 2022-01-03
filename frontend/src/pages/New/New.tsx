import React from "react";
import { Form, Input, Button } from "antd";
import { INote } from "../../models/INote";
import { useParams } from "react-router-dom";
import WithLoader from "../../components/WithLoader";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import IContent from "../../models/IContent";

interface NewProps {
  createEndpoint: (data: IContent) => Promise<AxiosResponse<any, any>>;
  getElementEndpoint: (id: string) => Promise<AxiosResponse<any, any>>;
  updateEndpoint: (
    id: string,
    values: IContent
  ) => Promise<AxiosResponse<any, any>>;
  model: string;
  extraFields: JSX.Element;
}
const New = ({
  updateEndpoint,
  getElementEndpoint,
  createEndpoint,
  model,
  extraFields,
}: NewProps) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const onFinish = (values: any) => {
    if (id) {
      updateEndpoint(id, values).then(() => {
        navigate(`/${model}`, { replace: true });
      });
    } else {
      createEndpoint(values).then(() => {
        navigate(`/${model}`, { replace: true });
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [data, setData] = React.useState<Partial<INote>>({});
  React.useEffect(() => {
    if (id) {
      getElementEndpoint(id).then((res) => {
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
        {extraFields}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </WithLoader>
  );
};

export default New;
