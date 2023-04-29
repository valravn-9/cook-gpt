export enum Veggie {
  ALL = "all",
  VEGAN = "vegan",
  VEGETARIAN = "vegetarian",
}

export interface Recipe {
  id?: number;
  title?: string;
  country?: string;
  persons?: string;
  minutes?: string;
  result: string;
  veggie?: Veggie;
}
