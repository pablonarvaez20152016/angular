import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.less']
})
export class ProductosComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  productos: any = [];
  imprimir: string;
 
  constructor(private productosService: ProductosService ){}
 
  ngOnInit() {
      this.getProductos();
  }
  getProductos() {
    this.productosService.getProductos()
      .subscribe(
        res => {
          this.productos = res;
        },
        err => console.error(err)
      );
  }
  borrarProducto(id: string){
    this.productosService.deleteProducto(id)
    .subscribe(
      res => {
        console.log(res);
        this.imprimir='hola:${{id}}';
        this.getProductos();
      },
      err => console.error(err)
    )
    }

}