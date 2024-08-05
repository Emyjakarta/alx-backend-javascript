import { taskFirst, taskNext } from '../0-constants';

test('taskFirst should return the expected string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext should return the expected string', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
