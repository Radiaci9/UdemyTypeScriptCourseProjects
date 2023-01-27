import { Callback, Events } from "../types";

class Eventing implements Events {
  events: { [key: string]: Callback[]} = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];

    this.events[eventName] = [...handlers, callback];
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) return;

    handlers.forEach(callback => callback());
  }

}

export default Eventing;