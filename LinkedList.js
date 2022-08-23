import { Node } from "./Node";

class LinkedList {
    // represent the full list of nodes
    constructor(nodes = []) {
        this.nodes = nodes;
    }

    append(value) {
        // create new node
        const newNode = Node();
        // last node reference new node
        this.nodes[this.nodes.length - 1].nextNode = newNode;
        // add new node to list
        this.nodes.push(newNode);
    }
}