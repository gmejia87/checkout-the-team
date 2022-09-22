const Intern = require("../lib/Intern");

const intern = new Intern("Mave", 3, "mave@mave.com", "College Town");

test("property this.school is set correctly", () => {
  expect(intern.school).toBe("College Town");
});

test("method this.getSchool() returns correct value", () => {
  expect(intern.getSchool()).toBe("College Town");
});

test("method this.getRole() returns correct value", () => {
  expect(intern.getRole()).toBe("Intern");
});
