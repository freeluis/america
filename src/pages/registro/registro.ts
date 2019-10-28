import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';





/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  newNickname: string ="";
  newPassword: string ="";
  confirmPassword: string ="";
  correo: string ="";

  nickname: string;
  password2: string;
  confPassword: string;
  correo2: string;


  mostrar = true;
  mostrar2 = true;



  //public misParametros:any={};

  constructor(public menuCtrl: MenuController,
     public navCtrl: NavController, 
     public navParams: NavParams, 
     public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    
  }
  crearCuenta() {
    console.log(this.newPassword);
    console.log(this.newNickname);

    if (this.newNickname !== "" && this.newPassword !== "" && this.confirmPassword !== "" && this.correo !== "") {
      if (this.newPassword === this.confirmPassword) {
       this.nickname = this.newNickname;
        this.password2 = this.newPassword;
         this.correo2 = this.correo;
         
         this.navCtrl.setRoot(LoginPage,{nickname:this.nickname, password:this.password2})
        
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'Contraseñas no coinciden',
          subTitle: 'Por favor confirme que sus contraseñas sean iguales',
          buttons: ['OK']
        });
        alert.present();
      }

    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Ingresa tus datos',
        subTitle: 'Por favor ingresa los datos para completar el registro',
        buttons: ['OK']
      });
      alert.present();
    }


    //this.navCtrl.pop();
  }
  showPass(){
   this.mostrar = !this.mostrar;
  
  }
  showPass2(){
    this.mostrar2 = !this.mostrar2;
  }
  
    
  } 
 
    