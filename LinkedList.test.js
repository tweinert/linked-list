import Node from "./Node";
import LinkedList from "./LinkedList";

describe("Linked List", () => {
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
});
