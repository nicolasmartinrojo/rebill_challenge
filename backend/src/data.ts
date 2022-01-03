import "reflect-metadata";
import { Media } from "./entity/Media";
import { Note } from "./entity/Notes";
import { MediaRepository } from "./repositories/MediaRepository";
import { NoteRepository } from "./repositories/NotesRepository";

const media = new Media();
media.title = "Media 1";
media.description = "Description 1";
media.url =
  "https://resizer.glanacion.com/resizer/CHtjNNpocKKZ4QXjLlIlwCGg2bo=/1920x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3GZA6K2IRVB3TDNIIWZDU3D7VE.jpg";
media.is_video = false;
const mediaRepo = new MediaRepository();
mediaRepo.save(media);

const media2 = new Media();
media2.title = "Media 2";
media2.description = "Description 2";
media2.url =
  "https://www.youtube.com/watch?v=5ZkLJ25zGCA&ab_channel=AntonioR%C3%ADos-Topic";
media2.is_video = true;
mediaRepo.save(media2).then((res) => {
  const note = new Note();
  note.title = "Antonio Ríos";
  note.description = "Noticia de Antonio Ríos";
  note.message =
    'Tiene 20 hijos y se manifiesta en contra de la práctica del aborto. Le dicen "El maestro"';
  note.image = media;
  const noteRepo = new NoteRepository();

  noteRepo.save(note).then(() => process.exit());
});
