import getObjectProperty from '../../src/utils/getObjectProperty';

describe('getObjectProperty', () => {
  const testObject = { a: 'A', b: 'B', c: [1, 2] };

  it('checks if property `a` exists', () => {
    const test = getObjectProperty(testObject, 'a');
    expect(test).toBe('A');
  });

  it('checks if property `d` exists', () => {
    const test = getObjectProperty(testObject, 'd');
    expect(test).toBeUndefined();
  });

  it('checks if property `c.0` exists', () => {
    const test = getObjectProperty(testObject, 'c.0');
    expect(typeof test).toBe('number');
    expect(test).toBe(1);
  });

  it('checks if property `c` does not exist.', () => {
    const test = getObjectProperty(testObject, 'c', 'Not Found');
    expect(Array.isArray(test)).toBe(true);
    expect(test).not.toBe('Not Found');
  });

  it(`checks if property 'd' exists, returns default value if it doesn't`, () => {
    const test = getObjectProperty(testObject, 'd', 'Not Found');
    expect(typeof test).toBe('string');
    expect(test).toBe('Not Found');
  });
});
