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
define("esri/dijit/PopupRenderer",["require","dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_Widget","dijit/_Templated","esri/kernel","esri/dijit/_EventedWidget","dojo/i18n!esri/nls/jsapi","dojo/NodeList-dom"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12){var _13=0;var PR=_2([_11,_e,_f],{declaredClass:"esri.dijit._PopupRenderer",constructor:function(){this._nls=_4.mixin({},_12.widgets.popup);},templateString:"<div class='esriViewPopup'>"+"<div class='mainSection'>"+"<div class='header' dojoAttachPoint='_title'></div>"+"<div class='hzLine'></div>"+"<div dojoAttachPoint='_description'></div>"+"<div class='break'></div>"+"</div>"+"<div class='attachmentsSection hidden'>"+"<div>${_nls.NLS_attach}:</div>"+"<ul dojoAttachPoint='_attachmentsList'>"+"</ul>"+"<div class='break'></div>"+"</div>"+"<div class='mediaSection hidden'>"+"<div class='header' dojoAttachPoint='_mediaTitle'></div>"+"<div class='hzLine'></div>"+"<div class='caption' dojoAttachPoint='_mediaCaption'></div>"+"<div class='gallery' dojoAttachPoint='_gallery'>"+"<div class='mediaHandle prev' dojoAttachPoint='_prevMedia' dojoAttachEvent='onclick: _goToPrevMedia'></div>"+"<div class='mediaHandle next' dojoAttachPoint='_nextMedia' dojoAttachEvent='onclick: _goToNextMedia'></div>"+"<ul class='summary'>"+"<li class='image mediaCount hidden' dojoAttachPoint='_imageCount'>0</li>"+"<li class='image mediaIcon hidden'></li>"+"<li class='chart mediaCount hidden' dojoAttachPoint='_chartCount'>0</li>"+"<li class='chart mediaIcon hidden'></li>"+"</ul>"+"<div class='frame' dojoAttachPoint='_mediaFrame'></div>"+"</div>"+"</div>"+"<div class='editSummarySection hidden' dojoAttachPoint='_editSummarySection'>"+"<div class='break'></div>"+"<div class='break hidden' dojoAttachPoint='_mediaBreak'></div>"+"<div class='editSummary' dojoAttachPoint='_editSummary'></div>"+"</div>"+"</div>",showTitle:true,startup:function(){this.inherited(arguments);var _14=this.template,_15=this.graphic,_16=_14.getComponents(_15),_17=this.showTitle?_16.title:"",_18=_16.description,_19=_16.fields,_1a=_16.mediaInfos,_1b=this.domNode,nls=this._nls;this._prevMedia.title=nls.NLS_prevMedia;this._nextMedia.title=nls.NLS_nextMedia;_a.set(this._title,"innerHTML",_17);if(!_17){_b.add(this._title,"hidden");}if(!_18&&_19){_18="";_5.forEach(_19,function(row){_18+=("<tr valign='top'>");_18+=("<td class='attrName'>"+row[0]+"</td>");_18+=("<td class='attrValue'>"+row[1].replace(/^\s*(https?:\/\/[^\s]+)\s*$/i,"<a target='_blank' href='$1' title='$1'>"+nls.NLS_moreInfo+"</a>")+"</td>");_18+=("</tr>");});if(_18){_18="<table class='attrTable' cellpadding='0px' cellspacing='0px'>"+_18+"</table>";}}_a.set(this._description,"innerHTML",_18);if(!_18){_b.add(this._description,"hidden");}_6.query("a",this._description).forEach(function(_1c){_a.set(_1c,"target","_blank");});if(_17&&_18){_6.query(".mainSection .hzLine",_1b).removeClass("hidden");}else{if(_17||_18){_6.query(".mainSection .hzLine",_1b).addClass("hidden");}else{_6.query(".mainSection",_1b).addClass("hidden");}}var dfd=(this._dfd=_14.getAttachments(_15));if(dfd){dfd.addBoth(_4.hitch(this,this._attListHandler,dfd));_a.set(this._attachmentsList,"innerHTML","<li>"+nls.NLS_searching+"...</li>");_6.query(".attachmentsSection",_1b).removeClass("hidden");}if(_1a&&_1a.length){_6.query(".mediaSection",_1b).removeClass("hidden");_9.setSelectable(this._mediaFrame,false);this._mediaInfos=_1a;this._mediaPtr=0;this._updateUI();this._displayMedia();}if(_16.editSummary){_a.set(this._editSummary,"innerHTML",_16.editSummary);if(_1a&&_1a.length){_b.remove(this._mediaBreak,"hidden");}_b.remove(this._editSummarySection,"hidden");}},destroy:function(){if(this._dfd){this._dfd.cancel();}this._destroyFrame();this.template=this.graphic=this._nls=this._mediaInfos=this._mediaPtr=this._dfd=null;this.inherited(arguments);},_goToPrevMedia:function(){var ptr=this._mediaPtr-1;if(ptr<0){return;}this._mediaPtr--;this._updateUI();this._displayMedia();},_goToNextMedia:function(){var ptr=this._mediaPtr+1;if(ptr===this._mediaInfos.length){return;}this._mediaPtr++;this._updateUI();this._displayMedia();},_updateUI:function(){var _1d=this._mediaInfos,_1e=_1d.length,_1f=this.domNode,_20=this._prevMedia,_21=this._nextMedia;if(_1e>1){var _22=0,_23=0;_5.forEach(_1d,function(_24){if(_24.type==="image"){_22++;}else{if(_24.type.indexOf("chart")!==-1){_23++;}}});if(_22){_a.set(this._imageCount,"innerHTML",_22);_6.query(".summary .image",_1f).removeClass("hidden");}if(_23){_a.set(this._chartCount,"innerHTML",_23);_6.query(".summary .chart",_1f).removeClass("hidden");}}else{_6.query(".summary",_1f).addClass("hidden");_b.add(_20,"hidden");_b.add(_21,"hidden");}var ptr=this._mediaPtr;if(ptr===0){_b.add(_20,"hidden");}else{_b.remove(_20,"hidden");}if(ptr===_1e-1){_b.add(_21,"hidden");}else{_b.remove(_21,"hidden");}this._destroyFrame();},_displayMedia:function(){var _25=this._mediaInfos[this._mediaPtr],_26=_25.title,_27=_25.caption,_28=_6.query(".mediaSection .hzLine",this.domNode)[0];_a.set(this._mediaTitle,"innerHTML",_26);_b[_26?"remove":"add"](this._mediaTitle,"hidden");_a.set(this._mediaCaption,"innerHTML",_27);_b[_27?"remove":"add"](this._mediaCaption,"hidden");_b[(_26&&_27)?"remove":"add"](_28,"hidden");this._rid=null;if(_25.type==="image"){this._showImage(_25.value);}else{var _29=this,_2a=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"],_2b=_25.value.theme||this.chartTheme||"esri/dijit/Rainbow";if(_4.isString(_2b)){_2b=_2b.replace(/\./gi,"/");if(_2b.indexOf("/")===-1){_2b="dojox/charting/themes/"+_2b;}_2a.push(_2b);}try{var rid=(this._rid=_13++);_1(_2a,function(_2c,_2d,_2e){if(rid===_29._rid){_29._rid=null;_29._showChart(_25.type,_25.value,_2c,_2d,_2e);}});}catch(err){console.log("PopupRenderer: error loading modules");}}},_showImage:function(_2f){_b.add(this._mediaFrame,"image");var _30=_d.get(this._gallery,"height"),_31="<img class='esriPopupMediaImage' src='"+_2f.sourceURL+"' />";if(_2f.linkURL){_31="<a target='_blank' href='"+_2f.linkURL+"'>"+_31+"</a>";}_a.set(this._mediaFrame,"innerHTML",_31);var img=_6.query(".esriPopupMediaImage",this._mediaFrame)[0],_32=this,_33;_33=_3.connect(img,"onload",function(){_3.disconnect(_33);_33=null;_32._imageLoaded(img,_30);});},_showChart:function(_34,_35,_36,_37,_38){_b.remove(this._mediaFrame,"image");var _39=this._chart=new _36(_c.create("div",{"class":"chart"},this._mediaFrame),{margins:{l:4,t:4,r:4,b:4}});if(_38){_39.setTheme(_38);}switch(_34){case "piechart":_39.addPlot("default",{type:"Pie",labels:false});_39.addSeries("Series A",_35.fields);break;case "linechart":_39.addPlot("default",{type:"Markers"});_39.addAxis("x",{min:0,majorTicks:false,minorTicks:false,majorLabels:false,minorLabels:false});_39.addAxis("y",{includeZero:true,vertical:true,fixUpper:"minor"});_5.forEach(_35.fields,function(_3a,idx){_3a.x=idx+1;});_39.addSeries("Series A",_35.fields);break;case "columnchart":_39.addPlot("default",{type:"Columns",gap:3});_39.addAxis("y",{includeZero:true,vertical:true,fixUpper:"minor"});_39.addSeries("Series A",_35.fields);break;case "barchart":_39.addPlot("default",{type:"Bars",gap:3});_39.addAxis("x",{includeZero:true,fixUpper:"minor",minorLabels:false});_39.addAxis("y",{vertical:true,majorTicks:false,minorTicks:false,majorLabels:false,minorLabels:false});_39.addSeries("Series A",_35.fields);break;}this._action=new _37(_39);_39.render();},_destroyFrame:function(){this._rid=null;if(this._chart){this._chart.destroy();this._chart=null;}if(this._action){this._action.destroy();this._action=null;}_a.set(this._mediaFrame,"innerHTML","");},_imageLoaded:function(img,_3b){var _3c=img.height;if(_3c<_3b){var _3d=Math.round((_3b-_3c)/2);_d.set(img,"marginTop",_3d+"px");}},_attListHandler:function(dfd,_3e){if(dfd===this._dfd){this._dfd=null;var _3f="";if(!(_3e instanceof Error)&&_3e&&_3e.length){_5.forEach(_3e,function(_40){_3f+=("<li>");_3f+=("<a href='"+_40.url+"' target='_blank'>"+(_40.name||"[No name]")+"</a>");_3f+=("</li>");});}_a.set(this._attachmentsList,"innerHTML",_3f||"<li>"+this._nls.NLS_noAttach+"</li>");}}});if(_7("extend-esri")){_4.setObject("dijit._PopupRenderer",PR,_10);}return PR;});