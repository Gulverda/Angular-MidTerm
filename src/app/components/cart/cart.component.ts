import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  // Update the quantity and check if it should be removed
  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      // If the quantity is 0 or less, remove the item from the cart
      this.removeFromCart(productId);
    } else {
      this.cartService.updateQuantity(productId, quantity);
      this.calculateTotal();
    }
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCart();  // Update the cart items
    this.calculateTotal();  // Recalculate the total price
  }

  calculateTotal() {
    this.total = this.cartService.calculateTotal(); // Calculate the total price after removal
  }

  get totalPrice() {
    return this.cartService.calculateTotal(); // Return the total price
  }
}
