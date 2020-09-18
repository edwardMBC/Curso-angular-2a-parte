import { Component} from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1:string[] = ['Camisas', 'Playeras', 'Mangas'];
  public data1 = [
    [10, 15, 40]
  ]
  public labels2:string[] = ['Pan', 'Perros', 'Taco'];
  public data2 = [
    [50, 20, 31]
  ]
  public labels3:string[] = ['Ben10', 'Carritos', 'Muñecas'];
  public data3 = [
    [56, 48, 5]
  ]
  public labels4:string[] = ['Deportivo', 'Abierto', 'Señorial'];
  public data4 = [
    [120, 30, 86]
  ]

}
