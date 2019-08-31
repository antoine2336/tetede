import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  durees = [5, 10, 15, 20, 25, 30];
  emprunts = [100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000];
  
  revenus = 4000;
  maximum = this.revenus*0.33;
  taux = 1.2;
  apport = 50000;

  mensualite(emprunt, v_taux, duree){
    if(parseInt(""+( (emprunt-this.apport) * this.taux ) / ( 1 - ( 1 + this.taux )^-duree )) > 0){
      return parseInt(""+( (emprunt-this.apport) * this.taux ) / ( 1 - ( 1 + this.taux )^-duree ));
    }else{
      return 0;
    }
    
  }


  apportUp(event){
    this.apport = event.target.value;
  }

  tauxUp(event){
    this.taux = event.target.value/100;
  }

  revenusUp(event){
    this.revenus = event.target.value ;
    this.maximum = this.revenus*0.33;
  }
}
