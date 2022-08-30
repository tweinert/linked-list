import Node from "./Node";
import LinkedList from "./LinkedList";

let headNode = new Node("Head");
const testList = new LinkedList(headNode);

describe("Linked List methods", () => {
  it("append()", () => {
    testList.append("This was appended");
    expect(testList.tail()).toBe("This was appended");
  });
});