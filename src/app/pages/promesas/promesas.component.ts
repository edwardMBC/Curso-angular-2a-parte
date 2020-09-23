import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })
    /*const promesa = new Promise( (resolve, reject)=> {
      if ( false ) {
        resolve('Hola Mundo');
      } else {
        reject('algo salio mal');
      }
    });

    promesa.then( (mensaje)=> {
      console.log(mensaje);
    })
    .catch( error => console.log('Error en promesa', error) );

    console.log('Fin del InIt')*/
  }
  getUsuarios(){
    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => console.log(body.data));

    });
    return promesa;
  }

}
