import Node from "./Node";

export default class LinkedList {
  // represent the full list of nodes
  constructor(headNode) {
    this.headNode = headNode;
    this.headNode.nextNode = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    let curNode = this.headNode;

    while (curNode.nextNode != null) {
      curNode = curNode.nextNode;
    }

    curNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let total = 1;
    let curNode = this.headNode;

    while (curNode.nextNode != null) {
      curNode = curNode.nextNode;
      total++;
    }

    return total;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let curNode = this.headNode;

    while (curNode.nextNode != null) {
      curNode = curNode.nextNode;
    }

    return curNode;
  }

  at(index) {
    let total = 0;
    let curNode = this.headNode;

    while (total < index) {
      curNode = curNode.nextNode;
      total++;
    }

    return curNode;
  }
}
