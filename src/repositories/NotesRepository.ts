import { Note } from "../entity/Notes";
import { ContentRepository } from "./ContentRepository";

export class NoteRepository extends ContentRepository {
  Class = Note;

  find(filter?: {}): Promise<any> {
    return super.find({ ...filter, relations: ["image"] });
  }

  findOne(filter?: {}): Promise<any> {
    return super.findOne({ ...filter, relations: ["image"] });
  }
}
