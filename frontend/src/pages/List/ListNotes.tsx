import { message, Button } from "antd";
import noteApi from "../../services/NoteApi";
import List from "./List";

const success = (id: string) => {
  noteApi.message(id).then((res) => {
    message.success(res.data);
  });
};

const ListNotes = () => {
  const extraColumns = [
    { title: "Message", dataIndex: "message", key: "message" },
    { title: "Image", dataIndex: "image", key: "image" },
  ];
  const extraActions = (id: string) => (
    <>
      <Button type="primary" onClick={() => success(id)}>
        Show message
      </Button>
    </>
  );
  return (
    <List
      model="note"
      extraColumns={extraColumns}
      extraActions={extraActions}
      listEndpoint={noteApi.list}
      removeEndpoint={noteApi.delete}
    />
  );
};

export default ListNotes;
