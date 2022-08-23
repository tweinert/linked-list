import Node from "./Node";

export default class LinkedList {
  // represent the full list of nodes
  constructor(nodes = []) {
    this.nodes = nodes;
  }

  append(value) {
    // create new node
    const newNode = new Node(value);
    // test for empty list
    if (this.nodes[this.nodes.length - 1] != null) {
      // last node reference new node
      this.nodes[this.nodes.length - 1].nextNode = newNode;
    }
    // add new node to list
    this.nodes.push(newNode);
  }

  size() {
    return this.nodes.length;
  }
}
