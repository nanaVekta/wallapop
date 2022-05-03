export interface IItem{
  title: string;
  description: string;
  email: string;
  price: string;
  image: string;
}
 export interface IItemsResponse{
   items: IItem[]
 }
