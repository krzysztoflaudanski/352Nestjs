import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
    public getAll(): Product[] {
        return db.products;
    }
    public getById(id: string): Product | null {
        return db.products.find((p) => p.id === id);
    }
    public deleteById(id: Product['id']): void {
        db.products = db.products.filter((p) => p.id !== id);
    }
    public create(productData: Omit<Product, 'id'>): Product {
        console.log(productData);
        const newProduct = { ...productData, id: uuidv4() };
        db.products.push(newProduct);
        return newProduct;
    }
}
