import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
selector: 'app-cart',
templateUrl: './cart.component.html',
styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
items: IProducts[] = [];
checkoutForm = this.fb.group({
  name: '',
  address: '',
});

constructor(private cartService: CartService, private fb: FormBuilder) {}

clearCart() {
  window.alert('Your cart has been cleared');
  this.items = this.cartService.clearCart();
}

 onSubmit() {
  console.warn('Your order has been submitted', this.checkoutForm.value);
  this.items = this.cartService.clearCart();
  this.checkoutForm.reset();
}

ngOnInit(): void {
  this.items = this.cartService.getItems();
}
}