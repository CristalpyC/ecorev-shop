import { Injectable } from '@angular/core';

//Tipado de productos
export interface Product {
  name: string;
  img: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public showModalFlag: boolean = false;
  public selectedProduct: Product[] = [];

  //Métodos
  showModal() {
    this.showModalFlag = true;
  }

  closeModal() {
    this.showModalFlag = false;
  }

  //Obtener productos
  getProductos(): Product[] {
    return this.selectedProduct;
  }

  //Agregar productos, utilizando el método push
  addProduct(product: Product) {
    this.selectedProduct.push(product);
  }

}
