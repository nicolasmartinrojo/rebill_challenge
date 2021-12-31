import { createConnection } from "typeorm";
import { IContent } from "../entity/AbstractContent";

export abstract class ContentRepository {
  private static _conn;
  protected abstract Class;
  protected static repository;

  private checkConn = async (cb) => {
    if (!ContentRepository._conn) {
      ContentRepository._conn = await createConnection();
      ContentRepository.repository = ContentRepository._conn.getRepository(
        this.Class
      );
    }
    return await cb();
  };

  save = (content: Partial<IContent>) => {
    return this.checkConn(() => ContentRepository.repository.save(content));
  };
  find = (filter = {}) => {
    return this.checkConn(() => ContentRepository.repository.find(filter));
  };
  findOne = (filter = {}) => {
    return this.checkConn(() => ContentRepository.repository.findOne(filter));
  };
  update = (id: number, props: Partial<IContent> = {}) => {
    return this.checkConn(async () => {
      let elem = await this.findOne({ id });
      elem = { ...elem, ...props };
      return await this.save(elem);
    });
  };
  remove = (filter = {}) => {
    return this.checkConn(() => ContentRepository.repository.remove(filter));
  };

  message = (id) => {
    return this.checkConn(async () => {
      let elem = await this.findOne({ id });
      return elem.getMessage();
    });
  };
}
