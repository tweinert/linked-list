import Node from "./Node";
import LinkedList from "./LinkedList";

describe("Linked List", () => {
  let testList = new LinkedList();
  testList.append("test");

  // TODO replace with at(index) or something else
  test("defines append()", () => {
    expect(testList.nodes[0].value).toBe("test");
  });

  test("defines size()", () => {
    expect(testList.size()).toBe(1);
  })
});

