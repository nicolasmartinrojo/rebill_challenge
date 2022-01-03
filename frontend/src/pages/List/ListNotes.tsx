import { message, Button } from "antd";
import { Link } from "react-router-dom";
import { INote } from "../../models/INote";
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
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (row: INote) => (
        <div>
          <pre>{JSON.stringify(row, null, 2)}</pre>
        </div>
      ),
    },
  ];
  const extraActions = (id: string) => (
    <>
      <Button type="primary" onClick={() => success(id)}>
        Show message
      </Button>
    </>
  );
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
        removeEndpoint={noteApi.delete}
      />
    </>
  );
};

export default ListNotes;
