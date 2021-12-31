import { Note } from "../entity/Notes";
import { ContentRepository } from "./ContentRepository";

export class NoteRepository extends ContentRepository {
  Class = Note;
}
