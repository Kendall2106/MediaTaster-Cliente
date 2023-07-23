import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AreaComponent } from '../core/component/area/area.component';
import { AlertaComponent } from '../core/component/alerta/alerta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AreaComponent],
  providers: [
    AlertController
  ]
})
export class HomePageModule {}
