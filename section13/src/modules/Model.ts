import { AxiosResponse } from "axios";
import { Events, ModelAttributes, Sync } from "../types";

class Model<T extends {id?: number}> {
  constructor(private attributes: ModelAttributes<T>,
    private eventing: Events,
    private sync: Sync<T>,
    ) {}

  on = this.eventing.on;
  trigger = this.eventing.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.eventing.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (id === undefined) {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch(() => {
        this.trigger('error');
      });
  }

  save():void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.eventing.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}

export default Model;
