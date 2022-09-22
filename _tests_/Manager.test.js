const Manager = require("../lib/Manager");

const manager = new Manager("Tate", 4, "tate@tate.com", "808d");

test("property this.officeNumber is set correctly", () => {
  expect(manager.officeNumber).toBe("808d");
});

test("method this.getOfficeNumber() returns correct value", () => {
  expect(manager.getOfficeNumber()).toBe("808d");
});

test("method this.getRole() returns correct value", () => {
  expect(manager.getRole()).toBe("Manager");
});
