const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Dave", 2, "dave@dave.com", "dave2");

test("property this.github is set correctly", () => {
  expect(engineer.github).toBe("dave2");
});

test("method this.gitHub() returns correct value", () => {
  expect(engineer.getGithub()).toBe("dave2");
});

test("method this.getRole() returns correct value", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
