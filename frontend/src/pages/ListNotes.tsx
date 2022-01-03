import { message, Button } from "antd";
import noteApi from "../services/NoteApi";
import List from "./List";

const success = (id: string) => {
  noteApi.message(id).then((res) => {
    message.success(res.data);
  });
};

const ListNotes = () => {
  const extraColumns = [{ title: "Image", dataIndex: "image", key: "image" }];
  const extraActions = (id: string) => (
    <>
      <Button type="primary" onClick={() => success(id)}>
        Show message
      </Button>
    </>
  );
  return (
    <List
      extraColumns={extraColumns}
      extraActions={extraActions}
      listEndpoint={noteApi.list}
      removeEndpoint={noteApi.delete}
    />
  );
};

export default ListNotes;
