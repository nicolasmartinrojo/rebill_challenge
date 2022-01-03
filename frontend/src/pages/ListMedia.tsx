import { message, Button } from "antd";
import mediaApi from "../services/MediaApi";
import noteApi from "../services/NoteApi";
import List from "./List";

const ListNotes = () => {
  const extraColumns = [{ title: "Image", dataIndex: "image", key: "image" }];

  return (
    <List
      extraColumns={extraColumns}
      listEndpoint={mediaApi.list}
      removeEndpoint={mediaApi.delete}
    />
  );
};

export default ListNotes;
