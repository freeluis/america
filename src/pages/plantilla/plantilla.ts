import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jugador } from '../../app/models/Jugador';


/**
 * Generated class for the PlantillaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plantilla',
  templateUrl: 'plantilla.html',
})
export class PlantillaPage {
  public porteros:Jugador[]=[];
  public defensas:Jugador[]=[];


  constructor(public navCtrl: NavController,
     public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantillaPage');
    this.porteros.push(new Jugador ("Guillermo Ochoa", "../../assets/imgs/gochoa.jpg"))
    this.porteros.push(new Jugador ("Oscar Jimenez", "../../assets/imgs/ojimenez.jpg"))
    this.porteros.push(new Jugador ("Luis Zamudio", "../../assets/imgs/lzamudio.jpg"))

    this.defensas.push(new Jugador("Carlos Vargas","../../assets/imgs/cvargas.jpg" ))
    this.defensas.push(new Jugador("Jorge Sanchez","../../assets/imgs/jsanchez.jpg" ))
    this.defensas.push(new Jugador("Bruno Valdez", "../../assets/imgs/bvaldez.jpg"))
    this.defensas.push(new Jugador("Emmanuel Aguilera", "../../assets/imgs/eaguilera.jpg"))
    this.defensas.push(new Jugador("Paul Aguilar", "../../assets/imgs/paguilar.jpg"))
    this.defensas.push(new Jugador("Oscar Ortega", "../../assets/imgs/oarteaga.jpg"))

  }

}
