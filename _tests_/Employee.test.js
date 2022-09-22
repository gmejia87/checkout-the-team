const Employee = require("../lib/Employee");

const employee = new Employee("Dave", 1, "dave@dave.com");

test("Can create an Employee", () => {
  expect(typeof employee).toBe("object");
});

test("property this.name is set correctly", () => {
  expect(employee.name).toBe("Dave");
});

test("property this.id is set correctly", () => {
  expect(employee.id).toBe(1);
});

test("property this.email is set correctly", () => {
  expect(employee.email).toBe("dave@dave.com");
});

test("method this.getName() returns correct value", () => {
  expect(employee.getName()).toBe("Dave");
});

test("method this.getId() returns correct value", () => {
  expect(employee.getId()).toBe(1);
});

test("method this.getEmail() returns correct value", () => {
  expect(employee.getEmail()).toBe("dave@dave.com");
});

test("method this.getRole() returns correct value", () => {
  expect(employee.getRole()).toBe("Employee");
});
