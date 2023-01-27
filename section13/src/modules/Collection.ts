import axios, { AxiosResponse } from "axios";
import { Events } from "../types";
import Eventing from "./Eventing";

class Collection<T, D> {
  models: T[] = [];
  events: Events = new Eventing();

  constructor(public rootUrl: string, public deserialize: (data: D) => T) {}

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((data: D) => {
          this.models.push(this.deserialize(data));
        });
      });

      this.trigger('change');
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}

export default Collection;
