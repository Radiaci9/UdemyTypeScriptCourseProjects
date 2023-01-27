import { ModelAttributes } from "../types";

class Attributes<T extends {}> implements ModelAttributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] | undefined => {
    return this.data[key];
  }

  set = (update: T): void => {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

export default Attributes;