import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
      img: 'https://www.reciclajecontemar.es/wp-content/uploads/lamparas-recicladas-creatividad-sostenible-para-tu-hogar.jpg',
      price: 2500
    },
    {
      name: 'Mochila Renacer',
      desc: `La Mochila Renacer está confeccionada con materiales textiles reciclados y 
      restos de cuero, ofreciendo una solución práctica y ecológica para tus 
      necesidades diarias. Con múltiples compartimentos y un diseño moderno, 
      es ideal para quienes buscan estilo y sostenibilidad en un solo producto.
      `,
      img: 'https://www.df.cl/noticias/site/artic/20201126/imag/foto_0000000220201126110236.jpg',
      price: 1800
    },
    {
      name: 'Mesa de Café Revive',
      desc: `Esta hermosa mesa de café está creada a partir de puertas y ventanas recicladas,
      transformadas en una pieza de mobiliario única. La Mesa de Café Revive añade
      un toque de historia y encanto a tu sala de estar, mientras contribuyes a la 
      conservación del medio ambiente.
      `,
      img: 'https://ovacen.com/wp-content/uploads/2021/11/mesa-cafe.jpg',
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
    }
  ]
    .map(items => ({
      name: items.name,
      price: items.price,
      img: items.img
    })); // Aplicando método map para mostrar solo el nombre y precio de los productos

  constructor(){
    console.log(this.productItems);
  }
}
