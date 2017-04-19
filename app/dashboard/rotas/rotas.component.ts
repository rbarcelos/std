import { Component,OnInit } from '@angular/core';
import {Rota} from '../../../models/models';
import {TaskManager} from '../../shared/TaskManager';


declare var RichMarker: any;
declare var google: any;


@Component({
    moduleId: module.id,
    selector: 'rotas-cmp',
    templateUrl: 'rotas.component.html'
})

export class RotasComponent implements OnInit {
    map:any;
    
    ngOnInit() {
        this.map = this.initMap();   
        this.fetchRotaData(RotasComponent.generateMarkers, this.map);    
    }
    
 fetchRotaData(callBack, map)
{
    var jqxhr = $.ajax({
        type: "GET",
        url: "../../../models/entregaData.json",
        dataType: 'json',
        cache: false,
        async: false
    });

    callBack(map,<Rota>jQuery.parseJSON(jqxhr.responseText));
    }

 initMap()
    {
        var myLatlng = new google.maps.LatLng(-23.3045, -51.1696);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

        }
        
        return new google.maps.Map(document.getElementById("rotasMap"), mapOptions);  
    }
    
 static  generateMarkers(map, rota)
    {
           
        var taskManager = new TaskManager();
        
        var promise = taskManager.processTasks(rota.entregas,RotasComponent.retrieveLatLong)
        
        promise.then(function(result) {
           var latLongs = result;
            var markers = [];
            for (let index in rota.entregas) {
                var m = RotasComponent.createMarker(map,rota.entregas[index],latLongs[index],index);
                markers.push(m);
            }

           RotasComponent.adjustMap(map,markers);
            
        }, function(reason) { 
            
            var t = reason;
        }); 
    }
    
    
    
    static retrieveLatLong(entrega)
    {
        return new Promise(function(resolve, reject) {
        var geocoder =new google.maps.Geocoder();    
        geocoder.geocode( { 'address': entrega.endereco}, function(results, status) {
            var latLong = new google.maps.LatLng(0, 0);
            if (status == google.maps.GeocoderStatus.OK) {
                latLong = results[0].geometry.location;
                resolve(latLong);
            }
            reject(entrega);
        });
        });
    }

//static retrieveLatLong(entrega)
//{
//    return new Promise(function(resolve, reject) {
//       
//        function delayResolve(data) {
//            setTimeout(function() {
//                resolve(new google.maps.LatLng(-23.3045 + Math.floor(Math.random() * 10), -51.1696+Math.floor(Math.random() * 10)));
//            }, 500);
//        }
//        delayResolve(entrega);
//
//    });
//}
    
    static createMarker(map, entrega,latLong, index)
    {
        var contentString = RotasComponent.calculateContentString(entrega);
        var iconUrl = RotasComponent.calculateIconUrl(index);
        return RotasComponent.instantiateMarker(map,latLong,iconUrl,entrega.destinatario,contentString);    
    }
    
    static calculateContentString(entrega)
    {
       return '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+entrega.destinatario+'</h1>'+
            '<div id="bodyContent">'+
            '<p>'+entrega.endereco+'</p>'+
            '</div>'+
            '</div>';
    }
    
    static calculateIconUrl(index)
    {
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return "http://maps.google.com/mapfiles/kml/paddle/"+labels[index]+".png"
    }
    
    static instantiateMarker(map, position, iconUrl, title, content)
    {        
            var icon = {
                url: iconUrl, 
                scaledSize: new google.maps.Size(38, 38)
            };
            var marker = new google.maps.Marker({
                position: position,
                icon:icon,
                map:map,
                flat:false,
                title:title});
        
        var infowindow = new google.maps.InfoWindow({
            content: content
        });
        
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        
        return marker;
    
    }
    
    static adjustMap(map,markers)
    {

        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }

        map.fitBounds(bounds);
    }

}
