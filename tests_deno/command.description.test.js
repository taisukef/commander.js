import { test, expect, it, describe, context } from "../../mocha-mini/mocha.js";
import commander from "../commander.js";

test('when set description then get description', () => {
  const program = new commander.Command();
  const description = 'abcdef';
  program.description(description);
  expect(program.description()).toMatch(description);
});
