import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { Facebook } from '@ionic-native/facebook';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',


})
export class LoginPage {

  nickname: string="";
  password: string="";

 nick: string = "";
  pass: string = "";

  user: any = {};
  showUser: boolean = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public facebook: Facebook,
    public menuCtrl: MenuController,
  ) {
    

    console.log();
    if (this.navParams.get("nickname")) {
     this.nick = this.navParams.get("nickname");
      this.pass = this.navParams.get("password")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(false);
  }
  login() {
    console.log(this.nickname);
    if (this.nickname == "" && this.password == "") {
      this.navCtrl.setRoot(HomePage);
    }

    /* if (this.nickname == this.nick && this.password == this.pass) {
      this.navCtrl.setRoot(HomePage);
    } */
    else {
      let alert = this.alertCtrl.create({
        title: 'Datos Erroneos',
        subTitle: 'Tu usuario o contraseña son incorretos, verificalos',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  registro() {
    this.navCtrl.push(RegistroPage);
  }

  loginFacebook() {
    let scopes: any[] = ['public_profile', 'user_friends', 'email'];
    this.facebook.login(scopes)
      .then(response => {
        if (response.status === "connected") {
          this.getUserDetail(response.authResponse.userID);
        } else {
          console.log("no");
          
          //this.alertaService.errorAlertGeneric(this.translatePipe.instant("VERIFY-DATA"));
        }
      })
      .catch((error) => {
        console.log(error);
        
        //this.alertaService.errorAlertGeneric(this.translatePipe.instant("VERIFY-CONNECTION"));
      });

  }

  getUserDetail(userId) {
    this.facebook.api("/" + userId + "/?fields=id,email,name,picture,gender", ["public_profile"])
      .then((detail) => {
        let photo: any = null;
        console.log(detail);
        this.showUser = true;
        this.user = detail;
        //this.login(body, true);
      })
      .catch((error) => {
        console.log(error);
        //this.alertaService.errorAlertGeneric(this.translatePipe.instant("VERIFY-CONNECTION"));
      });
  }

  getInfo() {
    this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender', ['public_profile', 'email'])
      .then(data => {
        console.log(data);
        this.showUser = true;
        this.user = data;
        console.log(this.showUser);
        console.log(this.user);
        
        
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  

}
