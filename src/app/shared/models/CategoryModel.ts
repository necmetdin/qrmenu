import { ProductsModel } from "./ProductsModel";
import { TranslationModel } from "./TranslationModel";

export class  CategoryModel{
    DESCRIPTION?: string;
    ID?: number;
    translations?: TranslationModel
    products?: ProductsModel
  }