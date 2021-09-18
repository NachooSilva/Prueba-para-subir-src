import { Component } from '@angular/core';

interface Componente{

  icon: string; 

  name: string; 

  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [

    {

      icon: 'cafe-outline',

      name: 'Action Sheet',

      redirecTo: '/action-sheet'

    },

    {

      icon: 'paw-outline',

      name: 'Alert',

      redirecTo: '/alert'

    },

  ];
}
