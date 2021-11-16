import { getClassVariation } from "../utils/functions";

describe('getClassVariation tests', () => {
  it('Should return empty string if no parameter is specified', () => {
    expect(getClassVariation()).toBe('');
  });

  it('Should return base class if there is no variation', () => {
    expect(getClassVariation('class')).toBe('class');
  });

  it('Should correctly return base class and variation class', () => {
    expect(getClassVariation('class', 'variation')).toBe('class class--variation');
  });

  it('Should correctly return base class and variations class if array is provided', () => {
    expect(getClassVariation('class', ['variation1', 'variation2']))
      .toBe('class class--variation1 class--variation2');
  });
});