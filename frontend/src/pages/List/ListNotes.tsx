import { Button } from "antd";
import { Link } from "react-router-dom";
import noteApi from "../../services/NoteApi";
import List from "./List";

const ListNotes = () => {
  const extraColumns = [
    { title: "Message", dataIndex: "message", key: "message" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (row: object) => (
        <div>
          <pre>{JSON.stringify(row, null, 2)}</pre>
        </div>
      ),
    },
  ];
  const extraActions = (id: string) => <></>;
  return (
    <>
      <Button>
        <Link to="/notes/new">Create</Link>
      </Button>
      <List
        model="notes"
        extraColumns={extraColumns}
        extraActions={extraActions}
        listEndpoint={noteApi.list}
        messageEndpoint={noteApi.message}
        removeEndpoint={noteApi.delete}
      />
    </>
  );
};

export default ListNotes;
