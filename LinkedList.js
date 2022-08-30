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

  
}
