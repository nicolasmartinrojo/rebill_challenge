import { Form, Input, Switch } from "antd";
import mediaApi from "../../services/MediaApi";
import New from "./New";

const NewMedia = () => {
  const extraFields = (
    <>
      <Form.Item label="Is video?" name="is_video" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item
        label="Url"
        name="url"
        rules={[{ required: true, message: "Please input the url" }]}
      >
        <Input />
      </Form.Item>
    </>
  );
  return (
    <New
      extraFields={extraFields}
      createEndpoint={mediaApi.create}
      getElementEndpoint={mediaApi.single}
      updateEndpoint={mediaApi.update}
      model={"media"}
    />
  );
};
export default NewMedia;
