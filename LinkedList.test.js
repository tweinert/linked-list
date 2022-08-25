import Node from "./Node";
import LinkedList from "./LinkedList";

describe("Linked List, basics", () => {
  let testList = new LinkedList();
  testList.append("append");
  testList.append("second append");
  testList.prepend("prepend");

  // TODO replace with at(index) or something else
  test("defines append()", () => {
    expect(testList.nodes[1].value).toBe("append");
  });

  test("defines append(), nextNode", () => {
    expect(typeof testList.nodes[1].nextNode).toBe("object");
  })

  test("defines prepend()", () => {
    expect(testList.nodes[0].value).toBe("prepend");
  });

  test("defines prepend(), nextNode", () => {
    expect(typeof testList.nodes[0].nextNode).toBe("object");
  });

  test("defines size()", () => {
    expect(testList.size()).toBe(3);
  });

  test("defines head()", () => {
    expect(testList.head().value).toBe("prepend");
  });

  test("defines tail()", () => {
    expect(testList.tail().value).toBe("second append");
  });

  test("defines at()", () => {
    expect(testList.at(1).value).toBe("append");
  });

  test("defines at(), null", () => {
    expect(testList.at(5)).toBe(undefined);
  });
});

describe("Linked List, advanced", () => {
  let testList = new LinkedList();
  testList.append("first");
  testList.append("second");
  testList.append("third");
  testList.pop();

  test("defines pop() and tail", () => {
    expect(testList.tail().value).toBe("second");
  });
});