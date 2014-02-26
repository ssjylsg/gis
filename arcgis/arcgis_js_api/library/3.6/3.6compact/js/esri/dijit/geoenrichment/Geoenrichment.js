/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/geoenrichment/Geoenrichment",["../../declare","dojo/_base/lang","dojo/Evented","./ReportData","dojo/promise/all","dojo/number","dojo/on","./bufferTitle","esri/geometry/Polygon","esri/units","../../tasks/geoenrichment/GeoenrichmentTask","../../tasks/geoenrichment/EnrichParameters","../../tasks/geoenrichment/RingBuffer","../../tasks/geoenrichment/DriveBuffer","../../tasks/geoenrichment/GeographyLevel","../../tasks/geoenrichment/GeometryStudyArea","./config","./lang","./_Invoke","dojo/json","dojo/Deferred"],function(_1,_2,_3,_4,_5,_6,on,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14){function _15(){var _16;var _17;var _18=[];var _19={};var _1a=5;this.update=function(_1b){_1a=_1b;deleteExcess();};deleteExcess=function(_1c){var _1d=_1c||_1a;while(_18.length>_1d){var k=_18.shift();delete _19[k];}};this.enrich=function(_1e,_1f){var key=_13.stringify(_1f);if(_19[key]){var _20=new _14();_20.resolve(_19[key]);return _20.promise;}var _21={highestLevel:_1f.highestLevel,variables:_1f.variables,country:_1f.country};var _22=_13.stringify(_21);var _23=new _b();_23.forStorage=false;_23.countryID=_1f.country;_23.datasetID=_1f.dataset;_23.variables=_1f.variables;var _24=_1f.returnGeometry&&!_1f.geometry;if(_24){_23.outSR=_1f.inGeom.spatialReference;}var _25=new _f({geometry:_1f.inGeom,options:_1f.buffer,returnGeometry:_24});_23.studyAreas.push(_25);var _26=[];if(_1f.levels){for(var i=0;i<_1f.levels.length;i++){_26.push(_1f.levels[i]);}}if(_1f.highestLevel&&_22!=_17){_26.push(_1f.highestLevel);}for(var i=0;i<_26.length;i++){_25.comparisonGeographyLevels.push(new _e({layerID:_26[i]}));}var _20=new _14();_1e.enrich(_23).then(function(_27){if(_1f.highestLevel){if(_22==_17){_27.featureSets[0].features.push(_16);}else{_17=_22;_16=_27.featureSets[0].features[_27.featureSets[0].features.length-1];}}deleteExcess(_1a-1);_18.push(key);_19[key]=_27;_20.resolve(_27);},function(_28){_20.reject(_28);});return _20.promise;};};var _29=_1("esri.dijit.geoenrichment.Geoenrichment",[_3,_12],{title:null,country:null,dataset:null,returnGeometry:false,inGeom:null,buffer:null,variables:null,levels:null,highestLevel:null,data:null,geometry:null,restartOnDone:false,requests:null,started:false,cache:null,constructor:function(){this.buffer=new _c();this.cache=new _15();},handleResponse:function(_2a){try{var _2b=_2a[0].featureSets[0];var _2c;if(_2a.length>1){_2c=_2a[1][0];}if(!this.data){this.data=new _4();var _2d;if(this.title!==null){_2d=this.title;}else{if(_2c){if(_2c.Metadata){_2d=_2c.Metadata.Title||_2c.Metadata.ShortDescription;}else{_2d=_2c.metadata.title;}}}this.data.title=_2d;}this.data.clearCols();this.addColumns(_2b);this.addRows(_2b);this.onDone(null);}catch(e){this.onDone(e);}},handleError:function(_2e){this.onDone(_2e);},onDone:function(_2f){this.requests=null;if(_2f){if(!(_2f.name=="CancelError")){console.log(_2f);on.emit(this,"error",_2f);}}else{on.emit(this,"data");}if(this.restartOnDone){this.invalidate();this.restartOnDone=false;}else{on.emit(this,"end");this.started=false;}},addColumns:function(_30){var _31=_30.fields;this.data.addCol(new _4.StringColumn({name:"NAME"}));for(var i=0;i<_31.length;i++){var _32=_31[i];if(!_32.fullName){continue;}if(_32.fullName=="AREA_ID"){continue;}var _33;switch(_32.units){case "pct":_33=new _4.PercentColumn(_32);break;case "currency":_33=new _4.CurrencyColumn(_32);break;default:if(_32.type=="esriFieldTypeDouble"){_33=new _4.NumericColumn(_32);}else{_33=new _4.StringColumn(_32);}break;}this.data.addCol(_33);}},getDesc:function(){return _7(this.inGeom.type,this.buffer);},addRows:function(_34){var _35=_34.features;for(var i=0;i<_35.length;i++){var _36=_35[i];if(i==0){this.addRow(_35[i],this.getDesc());this.setGeometryFromResponse(_35[i].geometry);}else{var _37=_36.attributes["StdGeographyName"];this.addRow(_36,_37);_36.attributes["NAME"]=_37;}}},setGeometryFromResponse:function(_38){if(!_38){return;}_38["spatialReference"]=this.inGeom.spatialReference;this.geometry=new _8(_38);},addRow:function(_39,_3a){if(!_39){return;}var row=[];var _3b=this.data.getColCount();for(var i=0;i<_3b;i++){var _3c;var _3d=this.data.getCol(i).name;if(_3a&&_3d=="NAME"){_3c=_3a;}else{_3c=_39.attributes[_3d];}row.push(_3c);}this.data.addRow(row);},_buildPolygon:function(){switch(this.inGeom.type){case "point":if(!(this.buffer instanceof _c)){return null;}break;case "polyline":return null;case "polygon":return this.inGeom;}var _3e=this.buffer;var _3f=new _8(this.inGeom.spatialReference);var _40=[];var _41=80;var _42=_3e.radii[0];switch(_3e.units){case _9.FEET:_42*=0.3048;break;case _9.MILES:_42*=1609.344;break;case _9.KILOMETERS:_42*=1000;break;}for(var i=0;i<_41;i++){var _43=i/_41*2*Math.PI;_40.push([this.inGeom.x+_42*Math.cos(_43),this.inGeom.y+_42*Math.sin(_43)]);}_40.push(_40[0]);_3f.addRing(_40);return _3f;},requestData:function(){if(!this.inGeom||!this.buffer||!this.variables){return;}this.requests=[];if(!this.started){on.emit(this,"start");this.started=true;}if(this.returnGeometry){this.geometry=this._buildPolygon();}var _44=new _a(_10.server);_44.token=_10.token;var _45;switch(this.inGeom.type){case "point":_45=this.buffer;break;case "polyline":if(this.buffer instanceof _d){_45=new _c();}else{_45=this.buffer;}break;case "polygon":_45=null;break;}this.requests.push(this.cache.enrich(_44,{country:this.country,dataset:this.dataset,variables:this.variables,returnGeometry:this.returnGeometry&&!this.geometry,inGeom:this.inGeom,buffer:_45,levels:this.levels,highestLevel:this.highestLevel}));if(!this.data&&this.title===null){var _46;var _47=this.variables[0].split(".");if(_47.length==2){this.requests.push(_44.getDataCollections(this.country,_47[0]));}}_5(this.requests).then(_2.hitch(this,this.handleResponse),_2.hitch(this,this.handleError));},invalidate:function(){var _48=this;if(this.pendingInvoke("requestData")){return;}if(this.requests){this.restartOnDone=true;}else{this.geometry=null;this.invoke("requestData");}},setInGeom:function(_49){this.inGeom=_49;this.invalidate();},setBuffer:function(_4a){this.buffer=_4a;this.invalidate();},getBuffer:function(){return this.buffer;},invalidateData:function(){this.data=null;this.invalidate();},setVariables:function(_4b){if(_11.arraysEqual(this.variables,_4b)){return;}this.variables=_4b;this.invalidateData();},setGeoLevels:function(_4c,_4d){if(_11.arraysEqual(this.levels,_4c)&&this.highestLevel==_4d){return;}this.levels=_4c;this.highestLevel=_4d;if(_4c==null&&_4d==null&&this.data){this.data.clearRows(1);}else{this.invalidateData();}},setCacheLimit:function(_4e){this.cache.update(_4e);},getData:function(){return this.data;},getGeometry:function(){return this.geometry;},isBusy:function(){return this.pendingInvoke("requestData")||this.requests||this.restartOnDone;},stop:function(){this.restartOnDone=false;this.cancelInvoke("requestData");if(this.requests){var _4f=this.requests.slice(0);for(var i=0;i<_4f.length;i++){_4f[i].cancel();}}}});return _29;});