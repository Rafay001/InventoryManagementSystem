import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ProductService],
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  
  productId!: number;
  product: any = {
    name: '',
    description: '',
    quantity: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProduct(this.productId).subscribe(data => {
      this.product = data;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.productId, this.product).subscribe(() => {
      alert('Product updated successfully!');
      this.router.navigate(['/']);
    });
  }
}
