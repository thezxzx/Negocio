import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-delete-update',
  templateUrl: './delete-update.component.html',
  styleUrls: ['./delete-update.component.scss'],
})
export class DeleteUpdateComponent implements OnInit {

  constructor( private popOverCtrl: PopoverController ) { }

  ngOnInit() {}

  onClick( option: string ) {

    this.popOverCtrl.dismiss({
      option 
    });
    
  }

}
