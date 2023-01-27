import Sorter from "../Sorter";
import Node from "./Node";

class LinkedList extends Sorter {
  head: Node | null = null;
  length: number = 0;

  constructor() {
    super();
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;
  
      while (tail.next) {
        tail = tail.next;
      }
  
      tail.next = node; 
    }
    this.length++;
  }

  at(index: number): Node {
    if (!this.head || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    
    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;

    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

}

export default LinkedList;
