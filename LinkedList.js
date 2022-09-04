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

  pop() {
    let curNode = this.headNode;

    while (curNode.nextNode.nextNode != null) {
      curNode = curNode.nextNode;
    }

    curNode.nextNode = null;
  }

  contains(value) {
    let curNode = this.headNode;

    while (curNode.nextNode != null) {
      if (curNode.value == value) {
        return true;
      }

      curNode = curNode.nextNode;
    }

    if (curNode.value == value) {
      return true;
    }

    return false;
  }

  find(value) {
    let curNode = this.headNode;
    let total = 0;

    while (curNode.nextNode != null) {
      if (curNode.value == value) {
        return total;
      }

      total++;
      curNode = curNode.nextNode;
    }

    if (curNode.value == value) {
      return total;
    }

    return null;
  }

  toString() {
    let curNode = this.headNode;
    let outputString = "";

    while (curNode.nextNode != null) {
      outputString += curNode.value;
      outputString += " -> ";

      curNode = curNode.nextNode;
    }

    outputString += curNode.value + " -> null";

    return outputString;
  }

  insertAt(value, index) {
    // if index is 0
    // head node = new node
    // newNode.nextNode = headNode
    const newNode = new Node(value);

    if (index == 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
      return;
    }

    let curNode = this.headNode;
    let prevNode = this.headNode;
    let total = 0;

    while (total < index) {
      prevNode = curNode;
      curNode = curNode.nextNode;
      total++;
    }

    prevNode.nextNode = newNode;
    newNode.nextNode = curNode;
  }

  removeAt(index) {
    // if index is 0
    // set second node to head node
    if (index == 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let curNode = this.headNode;
    let prevNode;
    let total = 0;

    while (total < index) {
      prevNode = curNode;
      curNode = curNode.nextNode;
      total++;
    }

    prevNode.nextNode = curNode.nextNode;
  }
}
