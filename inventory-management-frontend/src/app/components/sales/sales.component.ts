import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {
  
  products: any[] = [];
  selectedProductId: number = 0;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  recordSale() {
    if (this.selectedProductId && this.quantity > 0) {
      this.http.post('https://localhost:7064/api/sales', {
        productId: this.selectedProductId,
        quantity: this.quantity
      }).subscribe(() => {
        alert('Sale recorded successfully!');
        this.router.navigate(['/']);
      });
    }
  }
}
