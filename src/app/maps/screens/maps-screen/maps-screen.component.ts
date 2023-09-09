import { Component } from '@angular/core';
import {PlacesService} from "../../services";

@Component({
  selector: 'app-maps-screen',
  templateUrl: './maps-screen.component.html',
  styleUrls: ['./maps-screen.component.css']
})
export class MapsScreenComponent {

  constructor(
    private placesService: PlacesService
  ) {}

  isUserLocationReady(){
    return this.placesService.isUserLocationReady
  }
}
