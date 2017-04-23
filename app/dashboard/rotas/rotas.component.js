"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskManager_1 = require("../../shared/TaskManager");
var RotasComponent = RotasComponent_1 = (function () {
    function RotasComponent() {
    }
    RotasComponent.prototype.ngOnInit = function () {
        this.map = this.initMap();
        this.fetchRotaData(RotasComponent_1.generateMarkers, this.map);
    };
    RotasComponent.prototype.fetchRotaData = function (callBack, map) {
        var jqxhr = $.ajax({
            type: "GET",
            url: "../../../models/entregaData.json",
            dataType: 'json',
            cache: false,
            async: false
        });
        callBack(map, jQuery.parseJSON(jqxhr.responseText));
    };
    RotasComponent.prototype.initMap = function () {
        var myLatlng = new google.maps.LatLng(-23.3045, -51.1696);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
        };
        return new google.maps.Map(document.getElementById("rotasMap"), mapOptions);
    };
    RotasComponent.generateMarkers = function (map, rota) {
        var taskManager = new TaskManager_1.TaskManager();
        var promise = taskManager.processTasks(rota.entregas, RotasComponent_1.retrieveLatLong);
        promise.then(function (result) {
            var latLongs = result;
            var markers = [];
            for (var index in rota.entregas) {
                var m = RotasComponent_1.createMarker(map, rota.entregas[index], latLongs[index], index);
                markers.push(m);
            }
            RotasComponent_1.adjustMap(map, markers);
        }, function (reason) {
            var t = reason;
        });
    };
    RotasComponent.retrieveLatLong = function (entrega) {
        return new Promise(function (resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': entrega.endereco }, function (results, status) {
                var latLong = new google.maps.LatLng(0, 0);
                if (status == google.maps.GeocoderStatus.OK) {
                    latLong = results[0].geometry.location;
                    resolve(latLong);
                }
                reject(entrega);
            });
        });
    };
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
    RotasComponent.createMarker = function (map, entrega, latLong, index) {
        var contentString = RotasComponent_1.calculateContentString(entrega);
        var iconUrl = RotasComponent_1.calculateIconUrl(index);
        return RotasComponent_1.instantiateMarker(map, latLong, iconUrl, entrega.destinatario, contentString);
    };
    RotasComponent.calculateContentString = function (entrega) {
        return '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + entrega.destinatario + '</h1>' +
            '<div id="bodyContent">' +
            '<p>' + entrega.endereco + '</p>' +
            '</div>' +
            '</div>';
    };
    RotasComponent.calculateIconUrl = function (index) {
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return "http://maps.google.com/mapfiles/kml/paddle/" + labels[index] + ".png";
    };
    RotasComponent.instantiateMarker = function (map, position, iconUrl, title, content) {
        var icon = {
            url: iconUrl,
            scaledSize: new google.maps.Size(38, 38)
        };
        var marker = new google.maps.Marker({
            position: position,
            icon: icon,
            map: map,
            flat: false,
            title: title
        });
        var infowindow = new google.maps.InfoWindow({
            content: content
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        return marker;
    };
    RotasComponent.adjustMap = function (map, markers) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        map.fitBounds(bounds);
    };
    return RotasComponent;
}());
RotasComponent = RotasComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rotas-cmp',
        templateUrl: 'rotas.component.html'
    })
], RotasComponent);
exports.RotasComponent = RotasComponent;
var RotasComponent_1;
//# sourceMappingURL=rotas.component.js.map