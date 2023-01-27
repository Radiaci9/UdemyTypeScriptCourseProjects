import Collection from "../modules/Collection";

abstract class CollectionView<T, D extends { id?: number}> {
  constructor(public parent: Element, public collection: Collection<T, D>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = ''

    // const templateElement = document.createElement('li');
    const templateElement = document.createElement('template');

    // this.collection.models.forEach(model => this.renderItem(model, templateElement));
    this.collection.models.forEach(model => {
      const itemParent = document.createElement('div');

      this.renderItem(model, itemParent);

      templateElement.content.append(itemParent)
    });

    // this.parent.append(templateElement);
    this.parent.append(templateElement.content);
  }
}

export default CollectionView;
