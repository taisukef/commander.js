import { test, expect, it, describe, context } from "../../mocha-mini/mocha.js";
import commander from "../commander.js";

test('when call nested subcommand then runs', () => {
  const program = new commander.Command();
  const leafAction = jest.fn();
  program
    .command('sub1')
    .command('sub2')
    .action(leafAction);
  program.parse('node test.js sub1 sub2'.split(' '));
  expect(leafAction).toHaveBeenCalled();
});
