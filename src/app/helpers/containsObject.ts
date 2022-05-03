import { IItem } from '../interfaces/items';

export function containsObject(obj: IItem, list: IItem[]) {
  var x;
  for (x in list) {
      if (list.hasOwnProperty(x) && list[x] === obj) {
          return true;
      }
  }

  return false;
}
