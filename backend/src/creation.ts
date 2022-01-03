// import "reflect-metadata";
import { MediaRepository } from "./repositories/MediaRepository";

const repo = new MediaRepository();
repo.find().then(() => process.exit());
