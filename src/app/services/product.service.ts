import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, isNew: true, discount: 10, imageUrl: 'https://www.kunstform.org/images/Further-Brand-Casual-F-T-Shirt-Black-20170823132432-1.jpg' 
    },
    { id: 2, name: 'Product 2', price: 200, isNew: false, discount: 20, imageUrl: 'https://th.bing.com/th/id/R.eeba0688c8161a9332cad6d9b6406ef9?rik=2UysPoECNWniNw&pid=ImgRaw&r=0' 
    },
    { id: 3, name: 'Product 3', price: 300, isNew: true, discount: 30, imageUrl: 'https://th.bing.com/th/id/R.c54d41d4de323488ad60a772eb5ff946?rik=3PhInFskSqwUPA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Qq_fi4HGNXc%2fTb-xaPywysI%2fAAAAAAAAAA0%2fwnQ72u073eA%2fs1600%2fPlain_Blank_T_Shirts.jpg&ehk=dBLEYFGhJfj5mBHGG%2bQZb59scM3rlv7Kdlrj3SfY2Rg%3d&risl=&pid=ImgRaw&r=0'
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
