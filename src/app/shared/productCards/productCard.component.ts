import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';

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
  public productItems = [
    {
      name: 'Eco-Lámpara Vintage', 
      desc: `La Mochila Renacer está confeccionada con materiales textiles reciclados 
      y restos de cuero, ofreciendo una solución práctica y ecológica para tus 
      necesidades diarias. Con múltiples compartimentos y un diseño moderno, es ideal 
      para quienes buscan estilo y sostenibilidad en un solo producto.
      `, 
      img: 'https://cicloreutiliza.cl/wp-content/uploads/2020/12/Ciclo_La%CC%81mpara_colgante_Alto.jpg',
      price: 1200
    },
    {
      name: 'Mochila Renacer',
      desc: `La Mochila Renacer está confeccionada con materiales textiles reciclados y 
      restos de cuero, ofreciendo una solución práctica y ecológica para tus 
      necesidades diarias. Con múltiples compartimentos y un diseño moderno, 
      es ideal para quienes buscan estilo y sostenibilidad en un solo producto.
      `,
      img: 'https://www.conosurexclusivas.com/imagenmq/DMAG0193C22_silica__2.webp',
      price: 1800
    },
    {
      name: 'Mesa de Café Revive',
      desc: `Esta hermosa mesa de café está creada a partir de puertas y ventanas recicladas,
      transformadas en una pieza de mobiliario única. La Mesa de Café Revive añade
      un toque de historia y encanto a tu sala de estar, mientras contribuyes a la 
      conservación del medio ambiente.
      `,
      img: 'https://i.pinimg.com/originals/8c/2b/b4/8c2bb46baf2aa294a419a2c95e83533c.jpg',
      price: 4000
    },
    {
      name: 'Cuaderno Eco-Escribe',
      desc: `Nuestro Cuaderno Eco-Escribe está hecho de papel reciclado y cubiertas de 
      cartón reutilizado. Perfecto para notas, bocetos o diarios, este cuaderno es 
      una opción consciente para quienes valoran la sostenibilidad sin sacrificar 
      calidad.
      `,
      img: 'https://publipromocionales.com/wp-content/uploads/2017/09/LE005.jpg',
      price: 150
    },
    {
      name: 'Bolso Verde Vida',
      desc: `Confeccionado a partir de telas recuperadas y adornado con detalles de 
      retazos de cuero, el Bolso Verde Vida es tanto funcional como estiloso. Ideal 
      para llevar todos tus esenciales mientras haces una declaración ecológica.
      `,
      img: 'https://elpais.com/elpais/imagenes/2014/12/22/alterconsumismo/1419232440_141923_1419232440_003_sumario_normal.jpg',
      price: 2200
    },
    {
      name: 'Alfombra EcoPisada',
      desc: `Nuestra Alfombra EcoPisada está tejida a mano con retazos de telas 
      recicladas, ofreciendo una solución colorida y ecológica para tus suelos. 
      Cada alfombra es única y proporciona calidez y confort a cualquier habitación.
      `,
      img: 'https://image.made-in-china.com/202f0j00dIbcWqvBQAkP/Manufacturer-Natural-Fiber-Jute-Rugs-Eco-Friendly-Rug-Carpets-for-Bedroom-Living-Room.webp',
      price: 1200
    }
  ]
    .map(items => ({
      name: items.name,
      price: items.price,
      img: items.img
    })); // Aplicando método map para mostrar solo el nombre y precio de los productos

    constructor(private alertItem: AlertsService){}

    showAlert(){
      this.alertItem.timeAlert('success', 'El producto se ha agregado al carrito', 'Producto agregado');
    }
}
