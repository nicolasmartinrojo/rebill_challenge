import { Button } from "antd";
import { Link } from "react-router-dom";
import mediaApi from "../../services/MediaApi";
import List from "./List";

const ListNotes = () => {
  const extraColumns = [
    { title: "Url", dataIndex: "url", key: "url" },
    { title: "Is video?", dataIndex: "is_video", key: "is_video" },
  ];

  return (
    <>
      <Button>
        <Link to="/media/new">Create</Link>
      </Button>
      <List
        model="media"
        extraColumns={extraColumns}
        listEndpoint={mediaApi.list}
        removeEndpoint={mediaApi.delete}
      />
    </>
  );
};

export default ListNotes;
