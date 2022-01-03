import "reflect-metadata";
import { Media } from "./entity/Media";
import { Note } from "./entity/Notes";
import { MediaRepository } from "./repositories/MediaRepository";
import { NoteRepository } from "./repositories/NotesRepository";

const media = new Media();
media.title = "Media 1";
media.description = "Description 1";
media.url = "https://bit.ly/32WOdwq";
media.is_video = false;
const mediaRepo = new MediaRepository();
mediaRepo.save(media);

const media2 = new Media();
media2.title = "Media 2";
media2.description = "Description 2";
media2.url = "https://bit.ly/3JCDzvF";
media2.is_video = true;
mediaRepo.save(media2).then((res) => {
  const note = new Note();
  note.title = "Antonio Ríos";
  note.description = "Noticia de Antonio Ríos";
  note.message =
    "Tiene 20 hijos y se manifiesta en contra de la práctica del aborto.";
  note.image = media;
  const noteRepo = new NoteRepository();

  noteRepo.save(note).then(() => process.exit());
});
