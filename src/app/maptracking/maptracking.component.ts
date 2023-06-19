import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Popup } from 'leaflet';


@Component({
  selector: 'app-maptracking',
  templateUrl: './maptracking.component.html',
  styleUrls: ['./maptracking.component.css']
})
export class MaptrackingComponent implements OnInit {
  private map!: L.Map;
  private centroid: L.LatLngExpression = [35.77049667151361, 10.819399418722151]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 15
    });
  
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 4,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  
    const marker = L.marker(this.centroid);
    marker.addTo(this.map);
  
    // Créez un contenu HTML pour le pop-up
    const popupContent = '<b>votre colis n°1</b><br/>est là pour le moment !';
  
    // Créez un objet Popup avec le contenu
    const popupOptions = { closeButton: false };
    const popup = new Popup(popupOptions).setContent(popupContent);
  
    // Liez le pop-up au marqueur
    marker.bindPopup(popup).openPopup();
  
    tiles.addTo(this.map);
  }

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }
}
