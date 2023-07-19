import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { MovieService } from '../../servicios/movie.service';


@Component({
    selector: 'modal',
    templateUrl: './modal.page.html',
  })

export class ModalComponent implements OnInit{

  player:any;
  action:any;
  type: any[] = [];
 
  constructor(private movieService: MovieService, navParams: NavParams, private nav: NavController, public viewCtrl: ModalController) {
    this.player=navParams.get('player');
    this.action=navParams.get('action');
   }

  ngOnInit() {
    this.loadTypeMedia();
  }

  loadTypeMedia(){
    this.movieService.loadTypeMedia().subscribe((res: any) => {
      //this.dateChange(res);
      this.type = res;
    });
  }

  ver(/*character: Pokemon*/){
    /*var existe = false;
    for (let index = 0; index <  Utils.team.length; index++) {
      if(Utils.team[index].name == character.name){
        existe = true;
      }
    }

    if(existe==false){
      if(this.action=="add"){
        Utils.team.push(character);
      }else if(this.action=="update"){
        for (let index = 0; index < Utils.team.length; index++) {
          if(Utils.team[index].name==this.player.name){
            Utils.team[index] = character;
          }
        }
      }
    }
    this.viewCtrl.dismiss();*/
  }
}