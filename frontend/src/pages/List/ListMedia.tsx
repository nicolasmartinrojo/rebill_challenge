import mediaApi from "../../services/MediaApi";
import List from "./List";

const ListNotes = () => {
  const extraColumns = [{ title: "Image", dataIndex: "image", key: "image" }];

  return (
    <List
      model="media"
      extraColumns={extraColumns}
      listEndpoint={mediaApi.list}
      removeEndpoint={mediaApi.delete}
    />
  );
};

export default ListNotes;
