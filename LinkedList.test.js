import Node from "./Node";
import LinkedList from "./LinkedList";

let headNode = new Node("This is the first node");
const testList = new LinkedList(headNode);

describe("Linked List methods", () => {
  it("append()", () => {
    testList.append("This was appended");
    expect(testList.tail().value).toBe("This was appended");
  });

  it("prepend()", () => {
    testList.prepend("This was prepended");
    expect(testList.head().value).toBe("This was prepended");
  });

  it("size()", () => {
    expect(testList.size()).toBe(3);
  });

  it("head()", () => {
    expect(testList.head().value).toBe("This was prepended");
  });

  it("tail()", () => {
    expect(testList.tail().value).toBe("This was appended");
  });

  it("at()", () => {
    expect(testList.at(1).value).toBe("This is the first node");
  });

  it("pop()", () => {
    testList.pop();
    expect(testList.tail().value).toBe("This is the first node");
  });

  it("contains()", () => {
    expect(testList.contains("This is the first node")).toBe(true);
  });

  it("contains() false", () => {
    expect(testList.contains("Not a node value")).toBe(false);
  });

  it("find()", () => {
    testList.append("New node");
    expect(testList.find("This is the first node")).toBe(1);
  });

  it("toString()", () => {
    expect(testList.toString()).toBe("This was prepended -> This is the first node -> New node -> null");
  });

  it("insertAt()", () => {
    testList.insertAt("This node was inserted", 1);
    expect(testList.at(1).value).toBe("This node was inserted");
  });
});