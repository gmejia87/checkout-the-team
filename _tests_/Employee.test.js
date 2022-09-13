const Employee = require("../lib/Employee");

test("creates employee card", () => {
  const employee = new Employee("Dave");

  expect(employee.name).toBe("Dave");
  expect(employee.id).toBe();
  expect(employee.email).toBe();
});
