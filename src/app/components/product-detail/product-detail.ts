import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/productservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  productId!: string;
  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProductById(this.productId).subscribe({
      next: (data) => this.product = data,
      error: (err) => console.error('Error loading product', err)
    });
  }

}
