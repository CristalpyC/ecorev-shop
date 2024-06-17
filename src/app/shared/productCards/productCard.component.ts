import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';
import { ModalService, Product } from '../../services/modal/modal.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './productcards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { 
  // Listado de productos
  public productItems: Product[] = [
    {
      name: 'Eco-Lámpara Vintage', 
      img: 'https://cicloreutiliza.cl/wp-content/uploads/2020/12/Ciclo_La%CC%81mpara_colgante_Alto.jpg',
      price: 1200
    },
    {
      name: 'Mochila Renacer',
      img: 'https://www.conosurexclusivas.com/imagenmq/DMAG0193C22_silica__2.webp',
      price: 1800
    },
    {
      name: 'Mesa de Café Revive',
      img: 'https://i.pinimg.com/originals/8c/2b/b4/8c2bb46baf2aa294a419a2c95e83533c.jpg',
      price: 4000
    },
    {
      name: 'Cuaderno Eco-Escribe',
      img: 'https://publipromocionales.com/wp-content/uploads/2017/09/LE005.jpg',
      price: 150
    },
    {
      name: 'Bolso Verde Vida',
      img: 'https://elpais.com/elpais/imagenes/2014/12/22/alterconsumismo/1419232440_141923_1419232440_003_sumario_normal.jpg',
      price: 2200
    },
    {
      name: 'Alfombra EcoPisada',
      img: 'https://image.made-in-china.com/202f0j00dIbcWqvBQAkP/Manufacturer-Natural-Fiber-Jute-Rugs-Eco-Friendly-Rug-Carpets-for-Bedroom-Living-Room.webp',
      price: 1200
    }
  ]
    .map(items => ({
      name: items.name,
      price: items.price,
      img: items.img
    })); // Aplicando método map para mostrar solo el nombre y precio de los productos

    constructor(private alertItem: AlertsService, private modalService: ModalService){}

    showAlert(){
      this.alertItem.timeAlert('success', 'El producto se ha agregado al carrito', 'Producto agregado');
    }

    addProduct(product: Product) {
      this.modalService.addProduct(product);
      this.showAlert(); // Muestra la alerta de que se ha agregado al carrito
    }
}
