(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-map-map"],{"06f6":function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-map",{ref:"map1",staticClass:"map",attrs:{id:"map1",controls:t.controls,scale:t.scale,longitude:t.location.longitude,latitude:t.location.latitude,"show-location":t.showLocation,"enable-3D":t.enable3D,rotate:t.rotate,skew:t.skew,"show-compass":t.showCompass,"enable-overlooking":t.enableOverlooking,"enable-zoom":t.enableZoom,"enable-scroll":t.enableScroll,"enable-rotate":t.enableRotate,"enable-satellite":t.enableSatellite,"enable-traffic":t.enableTraffic,markers:t.markers,polyline:t.polyline,circles:t.circles,polygons:t.polygons,"include-points":t.includePoints},on:{controltap:function(n){arguments[0]=n=t.$handleEvent(n),t.oncontroltap.apply(void 0,arguments)},markertap:function(n){arguments[0]=n=t.$handleEvent(n),t.onmarkertap.apply(void 0,arguments)},callouttap:function(n){arguments[0]=n=t.$handleEvent(n),t.oncallouttap.apply(void 0,arguments)},poitap:function(n){arguments[0]=n=t.$handleEvent(n),t.onpoitap.apply(void 0,arguments)},updated:function(n){arguments[0]=n=t.$handleEvent(n),t.onupdated.apply(void 0,arguments)},regionchange:function(n){arguments[0]=n=t.$handleEvent(n),t.onregionchange.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.maptap.apply(void 0,arguments)}}}),e("v-uni-scroll-view",{staticClass:"scrollview",attrs:{"scroll-y":"true"}},[e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeScale.apply(void 0,arguments)}}},[t._v("changeScale")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeRotate.apply(void 0,arguments)}}},[t._v("changeRotate")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeSkew.apply(void 0,arguments)}}},[t._v("skew")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addMarkers.apply(void 0,arguments)}}},[t._v("addMarkers")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addPolyline.apply(void 0,arguments)}}},[t._v("addPolyline")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addPolygons.apply(void 0,arguments)}}},[t._v("addPolygons")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addCircles.apply(void 0,arguments)}}},[t._v("addCircles")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.includePoint.apply(void 0,arguments)}}},[t._v("includePoints")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getCenterLocation.apply(void 0,arguments)}}},[t._v("getCenterLocation")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getRegion.apply(void 0,arguments)}}},[t._v("getRegion")]),e("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.translateMarker.apply(void 0,arguments)}}},[t._v("translateMarker")])],1)],1)},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},5757:function(t,n){function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}t.exports=e},"65c8":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".content[data-v-3a76ccec]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.map[data-v-3a76ccec]{width:%?750?%;height:250px;background-color:#f0f0f0}.scrollview[data-v-3a76ccec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:10px}.list-item[data-v-3a76ccec]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5px 0}.list-text[data-v-3a76ccec]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.button[data-v-3a76ccec]{margin-top:5px;margin-bottom:5px}",""]),t.exports=n},6742:function(t,n,e){(function(n){e("d81d");var o=e("5757"),i=[{id:0,latitude:39.989631,longitude:116.481018,title:"方恒国际 阜通东大街6号",zIndex:"1",rotate:0,width:20,height:20,anchor:{x:.5,y:1},callout:{content:"方恒国际 阜通东大街6号",color:"#00BFFF",fontSize:10,borderRadius:4,borderWidth:1,borderColor:"#333300",bgColor:"#CCFF99",padding:"5",display:"ALWAYS"}},{id:1,latitude:39.908692,longitude:116.397477,title:"天安门",zIndex:"1",iconPath:"/static/location.png",width:40,height:40,anchor:{x:.5,y:1},callout:{content:"首都北京\n天安门",color:"#00BFFF",fontSize:12,borderRadius:2,borderWidth:0,borderColor:"#333300",bgColor:"#CCFF11",padding:"1",display:"ALWAYS"}}],a=[{points:[{latitude:39.925539,longitude:116.279037},{latitude:39.925539,longitude:116.520285}],color:"#FFCCFF",width:7,dottedLine:!0,arrowLine:!0,borderColor:"#000000",borderWidth:2},{points:[{latitude:39.938698,longitude:116.275177},{latitude:39.966069,longitude:116.289253},{latitude:39.944226,longitude:116.306076},{latitude:39.966069,longitude:116.322899},{latitude:39.938698,longitude:116.336975}],color:"#CCFFFF",width:5,dottedLine:!0,arrowLine:!0,borderColor:"#CC0000",borderWidth:3}],l=[{points:[{latitude:39.781892,longitude:116.293413},{latitude:39.7876,longitude:116.391842},{latitude:39.733187,longitude:116.417932},{latitude:39.704653,longitude:116.338255}],fillColor:"#FFCCFF",strokeWidth:3,strokeColor:"#CC99CC",zIndex:11},{points:[{latitude:39.8876,longitude:116.518932},{latitude:39.781892,longitude:116.518932},{latitude:39.781892,longitude:116.428932},{latitude:39.8876,longitude:116.428932}],fillColor:"#CCFFFF",strokeWidth:5,strokeColor:"#CC0000",zIndex:3}],c=[{latitude:39.996441,longitude:116.411146,radius:15e3,strokeWidth:5,color:"#CCFFFF",fillColor:"#CC0000"},{latitude:40.096441,longitude:116.511146,radius:12e3,strokeWidth:3,color:"#CCFFFF",fillColor:"#FFCCFF"},{latitude:39.896441,longitude:116.311146,radius:9e3,strokeWidth:1,color:"#CCFFFF",fillColor:"#CC0000"}],d=[{latitude:39.989631,longitude:116.481018},{latitude:39.908692,longitude:116.397477}];t.exports={data:function(){var t;return t={location:{longitude:116.397477,latitude:39.908692},controls:[{id:1,position:{left:5,top:180,width:30,height:30},iconPath:"/static/logo.png",clickable:!0}],showLocation:!1,scale:13,showCompass:!0,enable3D:!0,enableOverlooking:!0},o(t,"enableOverlooking",!0),o(t,"enableZoom",!0),o(t,"enableScroll",!0),o(t,"enableRotate",!0),o(t,"enableSatellite",!1),o(t,"enableTraffic",!1),o(t,"polyline",[]),o(t,"markers",[]),o(t,"polygons",[]),o(t,"circles",[]),o(t,"includePoints",[]),o(t,"rotate",0),o(t,"skew",0),t},onLoad:function(){},onReady:function(){this.map=uni.createMapContext("map1",this)},methods:{changeScale:function(){this.scale=9==this.scale?15:9},changeRotate:function(){this.rotate=90==this.rotate?0:90},changeSkew:function(){this.skew=30==this.skew?0:30},enableThreeD:function(t){this.enable3D=t.detail.value},changeShowCompass:function(t){this.showCompass=t.detail.value},changeEnableOverlooking:function(t){this.enableOverlooking=t.detail.value},changeEnableZoom:function(t){this.enableZoom=t.detail.value},changeEnableScroll:function(t){this.enableScroll=t.detail.value},changeEnableRotate:function(t){this.enableRotate=t.detail.value},changeEnableSatellite:function(t){this.enableSatellite=t.detail.value},changeEnableTraffic:function(t){this.enableTraffic=t.detail.value},addMarkers:function(){this.markers=i},addPolyline:function(){this.polyline=a},addPolygons:function(){this.polygons=l},addCircles:function(){this.circles=c},includePoint:function(){this.includePoints=d},getCenterLocation:function(){this.map.getCenterLocation({success:function(t){n.log(JSON.stringify(t)),uni.showModal({content:JSON.stringify(t)})}})},getRegion:function(){this.map.getRegion({success:function(t){n.log(JSON.stringify(t)),uni.showModal({content:JSON.stringify(t)})}})},translateMarker:function(){this.map.translateMarker({markerId:1,destination:{latitude:39.989631,longitude:116.481018},duration:2e3},(function(t){n.log(JSON.stringify(t)),uni.showModal({content:JSON.stringify(t)})}))},maptap:function(t){uni.showModal({content:JSON.stringify(t)})},onmarkertap:function(t){uni.showModal({content:JSON.stringify(t)})},oncontroltap:function(t){uni.showModal({content:JSON.stringify(t)})},oncallouttap:function(t){uni.showModal({content:JSON.stringify(t)})},onupdated:function(t){n.log(JSON.stringify(t))},onregionchange:function(t){n.log(JSON.stringify(t))},onpoitap:function(t){uni.showModal({content:JSON.stringify(t)})}}}}).call(this,e("5a52")["default"])},cde3:function(t,n,e){"use strict";var o=e("ebff"),i=e.n(o);i.a},ebff:function(t,n,e){var o=e("65c8");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("c4bb031c",o,!0,{sourceMap:!1,shadowMode:!1})},f2d6:function(t,n,e){"use strict";e.r(n);var o=e("06f6"),i=e("f368");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("cde3");var l,c=e("f0c5"),d=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"3a76ccec",null,!1,o["a"],l);n["default"]=d.exports},f368:function(t,n,e){"use strict";e.r(n);var o=e("6742"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a}}]);