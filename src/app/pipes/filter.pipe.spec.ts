import { FilterPipe } from './filter.pipe';
import { mockItems } from '../mocks/apiService.mock';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a value if search term is found in title', () => {
    expect(pipe.transform(mockItems, 'title', 'iPhone').length).toBeGreaterThan(0)
  });

  it('should not return a value if search term is not found in title', () => {
    expect(pipe.transform(mockItems, 'title', 'hgjjghg').length).toBeLessThanOrEqual(0)
  });

  it('should return a value if search term is found in description', () => {
    expect(pipe.transform(mockItems, 'description', 'fotos Polaroid').length).toBeGreaterThan(0)
  });

  it('should not return a value if search term is not found in description', () => {
    expect(pipe.transform(mockItems, 'description', 'hgjjghg').length).toBeLessThanOrEqual(0)
  });

  it('should return a value if search term is found in price', () => {
    expect(pipe.transform(mockItems, 'price', '7').length).toBeGreaterThan(0)
  });

  it('should not return a value if search term is not found in price', () => {
    expect(pipe.transform(mockItems, 'price', 'hgjjghg').length).toBeLessThanOrEqual(0)
  });

  it('should return a value if search term is found in email', () => {
    expect(pipe.transform(mockItems, 'email', 'bagmail@').length).toBeGreaterThan(0)
  });

  it('should not return a value if search term is not found in email', () => {
    expect(pipe.transform(mockItems, 'email', 'hgjjghg').length).toBeLessThanOrEqual(0)
  });

  it('should return an empty array if no items are passed', () => {
    expect(pipe.transform([], 'email', 'hgjjghg').length).toBeLessThanOrEqual(0);
    expect(pipe.transform([], 'email', 'hgjjghg')).toEqual([]);

  });

  it('should return all items if no field is passed', () => {
    expect(pipe.transform(mockItems, '', 'hgjjghg').length).toBeGreaterThan(0);
    expect(pipe.transform(mockItems, '', 'hgjjghg')).toEqual(mockItems);

  });

  it('should return all items if no value is passed', () => {
    expect(pipe.transform(mockItems, 'email', '').length).toBeGreaterThan(0);
    expect(pipe.transform(mockItems, 'email', '')).toEqual(mockItems);
  });

  it('should return all items if no value and field is passed', () => {
    expect(pipe.transform(mockItems, '', '').length).toBeGreaterThan(0);
    expect(pipe.transform(mockItems, '', '')).toEqual(mockItems);
  });

  it('should return an empty array if no items, field and value are passed', () => {
    expect(pipe.transform([], '', '').length).toBeLessThanOrEqual(0);
    expect(pipe.transform([], '', '')).toEqual([]);
  });
});

