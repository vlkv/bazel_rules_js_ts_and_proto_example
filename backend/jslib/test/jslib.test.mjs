import { generate_uuid } from '../src/index.mjs';

describe('test foobar', () => {
  test('that 2 times 2 is 4', () => {
    expect(2 * 2).toBe(4);
  });

  test('generate_uuid returns something', () => {
    expect(generate_uuid().length).toBe(36);
  });
});
