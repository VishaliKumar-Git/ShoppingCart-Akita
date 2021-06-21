import { EntityState, ID, MultiActiveState } from '@datorama/akita';

export type Product = {
    id: ID;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
};

export function createPrd({id, name, description, price, quantity, image }: Partial<Product>) {
  return {
    id,
    name,
    description,
    price,
    quantity,
    image,
  } as Product;
}

export interface ProductState extends EntityState<Product>, MultiActiveState {}