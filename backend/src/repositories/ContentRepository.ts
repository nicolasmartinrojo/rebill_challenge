import { createConnection } from "typeorm";
import { IContent } from "../entity/AbstractContent";

interface FilterProps {
  relations?: any;
}
export abstract class ContentRepository {
  private static _conn;
  protected abstract Class;
  protected repository;

  private checkConn = async (cb) => {
    if (!ContentRepository._conn) {
      ContentRepository._conn = await createConnection();
    }
    this.repository = await ContentRepository._conn.getRepository(this.Class);
    return await cb();
  };

  save(content: Partial<IContent>) {
    return this.checkConn(() => this.repository.save(content));
  }
  find(filter: Partial<IContent & FilterProps> = {}) {
    return this.checkConn(() => {
      const { relations, ...rest } = filter;
      return this.repository.find({ where: rest, relations });
    });
  }
  findOne(filter: Partial<IContent & FilterProps> = {}) {
    return this.checkConn(() => {
      const { relations, ...rest } = filter;
      return this.repository.findOne({ where: rest, relations });
    });
  }
  update(id: number, props: Partial<IContent> = {}) {
    return this.checkConn(async () => {
      let elem = await this.findOne({ id });
      elem = { ...elem, ...props };
      return await this.save(elem);
    });
  }
  remove(filter = {}) {
    return this.checkConn(() => this.repository.remove(filter));
  }

  message(id) {
    return this.checkConn(async () => {
      let elem = await this.findOne({ id });
      return elem.getMessage();
    });
  }
}
