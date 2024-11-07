import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model'; // Ensure this import is pointing to the correct file
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product?: Product;

  constructor(private cartService: CartService) {}

  // Add to cart method
  addToCart() {
    if (this.product) {
      console.log('Adding to cart:', this.product); // Debugging line
      this.cartService.addToCart(this.product, this.product.id, 1);
      console.log('Added to cart:', this.product); // Debugging line
      console.log('Total price after adding:', this.cartService.calculateTotal()); // Display total price
    }
  }

  // Remove from cart method
  removeFromCart() {
    if (this.product) {
      console.log('Removing from cart:', this.product); // Debugging line
      this.cartService.removeFromCart(this.product.id); // Pass the product id
      console.log('Removed from cart:', this.product); // Debugging line
      console.log('Total price after removing:', this.cartService.calculateTotal()); // Display total price
    }
  }

  // Update quantity in the cart
  updateQuantity(newQuantity: number) {
    if (this.product) {
      this.cartService.updateQuantity(this.product.id, newQuantity); // Update quantity
      console.log('Updated quantity:', newQuantity);
      console.log('Total price after updating quantity:', this.cartService.calculateTotal());
    }
  }

  ngOnInit(): void {
    console.log(this.product); // Debugging line to check the product object
  }
}
