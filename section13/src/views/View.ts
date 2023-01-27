import Model from "../modules/Model";
import { Callback } from "../types";

abstract class View<T extends Model<K>, K extends { id?: number }> {
  regions: {[key: string]: Element} = {};

  constructor(public parent: Element, public model: T ) {
    this.bindModel();
  }

  regionsMap(): { [key: string]: string } {
    return {};
  };

  eventsMap(): { [key: string]: Callback } {
    return {};
  };

  abstract template(): string;

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  bindModel(): void {
    this.model.on('change', this.render);
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for(let key in regionsMap) {
      const selector = regionsMap[key];

      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render = (): void => {
    this.parent.innerHTML = ''

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();


    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}

export default View;
