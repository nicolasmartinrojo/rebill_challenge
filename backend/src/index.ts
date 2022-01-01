import "reflect-metadata";
import { Media } from "./entity/Media";
import { Note } from "./entity/Notes";
import { MediaRepository } from "./repositories/MediaRepository";
import { NoteRepository } from "./repositories/NotesRepository";

const media = new Media();
media.description = "La description";
media.url = "http://";
media.title = "el titulo";
const mediaRepo = new MediaRepository();
media.is_video = false;
mediaRepo.save(media);

const media2 = new Media();
media2.description = "La description";
media2.url = "http://";
media2.title = "el titulo";
media2.is_video = true;
mediaRepo.save(media2);

const note = new Note();
note.description = "La description";
note.message = "EL CONTENIDO DEL MENSAJE";
note.title = "el titulo";
const noteRepo = new NoteRepository();

noteRepo.save(note);
