(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{219:function(t,e,a){"use strict";var i=a(64),o=a(32),s=a(7),r=a(45),l=a(36),h=a(14),n=a(58),c=a(156),u="translatestart",p="translating",f="translateend",_=function(r){function t(t,e,a){r.call(this,t),this.features=e,this.coordinate=a}return r&&(t.__proto__=r),(t.prototype=Object.create(r&&r.prototype)).constructor=t}(r.a),d=function(n){function t(t){var e,a=t||{};if(n.call(this,a),this.lastCoordinate_=null,this.features_=void 0!==a.features?a.features:null,a.layers)if("function"==typeof a.layers)e=a.layers;else{var r=a.layers;e=function(t){return Object(h.f)(r,t)}}else e=l.b;this.layerFilter_=e,this.hitTolerance_=a.hitTolerance?a.hitTolerance:0,this.lastFeature_=null,Object(s.a)(this,Object(o.b)(c.a.ACTIVE),this.handleActiveChanged_,this)}return n&&(t.__proto__=n),((t.prototype=Object.create(n&&n.prototype)).constructor=t).prototype.handleDownEvent=function(t){if(this.lastFeature_=this.featuresAtPixel_(t.pixel,t.map),this.lastCoordinate_||!this.lastFeature_)return!1;this.lastCoordinate_=t.coordinate,this.handleMoveEvent(t);var e=this.features_||new i.a([this.lastFeature_]);return this.dispatchEvent(new _(u,e,t.coordinate)),!0},t.prototype.handleUpEvent=function(t){if(this.lastCoordinate_){this.lastCoordinate_=null,this.handleMoveEvent(t);var e=this.features_||new i.a([this.lastFeature_]);return this.dispatchEvent(new _(f,e,t.coordinate)),!0}return!1},t.prototype.handleDragEvent=function(t){if(this.lastCoordinate_){var e=t.coordinate,a=e[0]-this.lastCoordinate_[0],r=e[1]-this.lastCoordinate_[1],n=this.features_||new i.a([this.lastFeature_]);n.forEach(function(t){var e=t.getGeometry();e.translate(a,r),t.setGeometry(e)}),this.lastCoordinate_=e,this.dispatchEvent(new _(p,n,e))}},t.prototype.handleMoveEvent=function(t){var e=t.map.getViewport();this.featuresAtPixel_(t.pixel,t.map)?(e.classList.remove(this.lastCoordinate_?"ol-grab":"ol-grabbing"),e.classList.add(this.lastCoordinate_?"ol-grabbing":"ol-grab")):e.classList.remove("ol-grab","ol-grabbing")},t.prototype.featuresAtPixel_=function(t,e){return e.forEachFeatureAtPixel(t,function(t){if(!this.features_||Object(h.f)(this.features_.getArray(),t))return t}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_})},t.prototype.getHitTolerance=function(){return this.hitTolerance_},t.prototype.setHitTolerance=function(t){this.hitTolerance_=t},t.prototype.setMap=function(t){var e=this.getMap();n.prototype.setMap.call(this,t),this.updateState_(e)},t.prototype.handleActiveChanged_=function(){this.updateState_(null)},t.prototype.updateState_=function(t){var e=this.getMap(),a=this.getActive();e&&a||(e=e||t)&&e.getViewport().classList.remove("ol-grab","ol-grabbing")},t}(n.b);e.a=d},356:function(t,e,a){"use strict";a.r(e);var r=a(3),n=a(2),i=a(41),o=a(98),s=a(219),l=a(49),h=a(6),c=a(22),u=a(12),p=a(15),f=new h.a({source:new u.b}),_=new c.a({source:new p.a({url:"data/geojson/countries.geojson",format:new i.a})}),d=new o.a,v=new s.a({features:d.getFeatures()});new r.a({interactions:Object(l.a)().extend([d,v]),layers:[f,_],target:"map",view:new n.a({center:[0,0],zoom:2})})}},[[356,0]]]);
//# sourceMappingURL=translate-features.js.map