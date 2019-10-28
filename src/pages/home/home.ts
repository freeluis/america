import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { RegistroPage } from '../registro/registro'
import { Noticia } from '../../app/models/Noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public noticia:Noticia[]=[];

  constructor(public navCtrl: NavController,

    
    private menuCtrl: MenuController) {    this.noticia.push(new Noticia("Triunfo sobre Puebla","En un partido muy complicado en la primera parte con pocas llegadas yun nulo desempeño adelante, Miguel Herrera movio sus piezas para la parte complementaria y con un Henry Martin encendido, un Ibargueque entro en "))

      menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(true);

    this.noticia.push(new Noticia("Triunfo sobre Puebla","En un partido muy complicado en la primera parte con pocas llegadas yun nulo desempeño adelante, Miguel Herrera movio sus piezas para la parte complementaria y con un Henry Martin encendido, un Ibargueque entro en "))
  }


  login() {
    this.navCtrl.push(LoginPage);
  }
  registro() {
    this.navCtrl.push(RegistroPage);
  }
  news1() {

  }
}
