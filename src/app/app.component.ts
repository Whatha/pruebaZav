import { Component, OnInit } from '@angular/core';

import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import {js} from '../assets/js/banner.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaZav';
 constructor(private router: Router) {
 	//Eventos del enrutador
    router.events.subscribe((val) => {
        // cambiar la posición del footer de acuerdo a la ruta
        if(val instanceof NavigationEnd){
  		var element = document.getElementById("footer");
         if(window.location.pathname=="/"){
  		element.classList.add("tobotom");
  	}else{

  		element.classList.remove("tobotom");
        }
  	}
    });
  }
  ngOnInit() {
  	//llamar al javascript encargado del movimiento del banner
  js

  }
}
