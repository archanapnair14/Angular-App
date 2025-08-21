import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/productservice'
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { ConfirmationService,MessageService } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-productcomponent',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ConfirmDialog,
    Toast,
    RouterModule
  ],
  templateUrl: './productcomponent.html',
  styleUrls: ['./productcomponent.css'],
  providers: [ConfirmationService, MessageService]
})
export class Productcomponent implements OnInit {
  products: Product[] = [];
  product: Product = this.getEmptyProduct();
  productDialog: boolean = false;
  isEdit: boolean = false;

  constructor(
    private productService: ProductService, 
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
) {}
  

  ngOnInit(): void {
    this.loadProducts();
  }

  getEmptyProduct(): Product {
    return {
      name: '',
      sku: '',
      quantity: 0,
      price: 0,
      category: ''
    };
  }

  viewProduct(id: string) {
  this.router.navigate(['/product-detail', id]);
}

  loadProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  openNew() {
    this.product = this.getEmptyProduct();
    this.isEdit = false;
    this.productDialog = true;
  }

  editProduct(prod: Product) {
    this.product = { ...prod };
    this.isEdit = true;
    this.productDialog = true;
  }

  saveProduct() {
    if (this.isEdit && this.product._id) {
      this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
        this.loadProducts();
        this.productDialog = false;
      });
    } else {
      this.productService.addProduct(this.product).subscribe(() => {
        this.loadProducts();
        this.productDialog = false;
      });
    }
  }

  // deleteProduct(id: string) {
  //   if (confirm('Are you sure to delete this product?')) {
  //     this.productService.deleteProduct(id).subscribe(() => {
  //       this.loadProducts();
  //     });
  //   }
  // }

  deleteProduct(id: string) {
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete this product?',
    header: 'Confirm Delete',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          detail: 'Product has been deleted',
        });
      });
    }
  });
}

}

