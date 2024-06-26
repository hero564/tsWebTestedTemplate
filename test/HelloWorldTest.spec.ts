import { HelloWorld } from "../src/HelloWorld";

describe("Hello World", () => {
  it("should say hello", () => {
    const helloWorld = new HelloWorld();
    expect(helloWorld.sayHello()).toEqual("Hello World!");
  });
});
