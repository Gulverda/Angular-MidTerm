import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Cart[] = []; // Store items as Cart type

  getCart() {
    return this.cartItems;
  }

  addToCart(product: Product, id: number, quantity: number) {
    const existingItem = this.cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity; // Increase quantity if already in cart
    } else {
      // Add new product to the cart with quantity set to the passed value
      const newItem: Cart = { ...product, quantity };
      this.cartItems.push(newItem);
    }
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(item => item.id === productId);

    if (item) {
      item.quantity = quantity; // Update the quantity

      // Remove item if quantity is 0 or less
      if (item.quantity <= 0) {
        this.removeFromCart(productId); // Remove from cart
      }
    }
  }

  removeFromCart(productId: number) {
    // Filter out the product with the matching id from cartItems
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }
  
  calculateTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
