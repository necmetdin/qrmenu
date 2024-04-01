import { Images } from "./Images";

export interface  Products{
   id: number;
   product_id: number;
    barcode: string;
    title: string;
    short_description: string,
    long_description: string
    image: Images;
    

}