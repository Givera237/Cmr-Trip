import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-comp',
  templateUrl: './map-comp.component.html',
  styleUrls: ['./map-comp.component.scss']
})
export class MapCompComponent 
{
  
  map!: mapboxgl.Map;
  ngOnInit()
  {
    
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoiZ2l2ZXJhIiwiYSI6ImNsaHFnOGlhbzBnYXczaG81aXo1Yjl1b28ifQ.6cyLX0jpdQhrYAMG9syk-A';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.354722, 	7.369722],
        zoom: 3
    });


    navigator.geolocation.getCurrentPosition((position) => {
          
      const marker = new mapboxgl.Marker()
        .setLngLat([position.coords.longitude, position.coords.latitude])
        .addTo(map);
    });
    }
    
 
 }