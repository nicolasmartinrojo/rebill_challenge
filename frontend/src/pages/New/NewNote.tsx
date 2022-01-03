import React from "react";

import { Form, Input, Select } from "antd";
import { IMedia } from "../../models/IMedia";
import noteApi from "../../services/NoteApi";
import New from "./New";
import mediaApi from "../../services/MediaApi";

const { Option } = Select;

const NewNote = () => {
  const [media, setMedia] = React.useState<IMedia[]>([]);
  React.useEffect(() => {
    mediaApi.list().then((res) => {
      setMedia(res.data);
    });
  }, []);
  const extraFields = (
    <>
      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please input the message" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Media"
        name="image"
        rules={[{ required: true, message: "Please input the media" }]}
      >
        <Select style={{ width: 120 }}>
          <Option value={""}>Choose a Media</Option>
          {media.map((elem) => (
            <Option value={elem.id}>{elem.title}</Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
  return (
    <New
      extraFields={extraFields}
      createEndpoint={noteApi.create}
      getElementEndpoint={noteApi.single}
      updateEndpoint={noteApi.update}
      model={"notes"}
    />
  );
};

export default NewNote;
