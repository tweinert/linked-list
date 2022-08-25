import Node from "./Node";

export default class LinkedList {
  // represent the full list of nodes
  constructor(nodes = []) {
    this.nodes = nodes;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.nodes[this.nodes.length - 1] != null) {
      // previous last node reference new node
      this.nodes[this.nodes.length - 1].nextNode = newNode;
    }
    this.nodes.push(newNode);
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.nodes[0] != null) {
        newNode.nextNode = this.nodes[0];
    }
    this.nodes.unshift(newNode);
  }

  size() {
    return this.nodes.length;
  }

  head() {
    return this.nodes[0];
  }

  tail() {
    return this.nodes[this.nodes.length - 1];
  }

  at(index) {
    return (this.nodes[index] ? this.nodes[index] : undefined);
  }
}
