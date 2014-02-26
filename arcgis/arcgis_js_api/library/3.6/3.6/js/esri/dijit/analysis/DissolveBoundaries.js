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
require({cache:{"url:esri/dijit/analysis/templates/DissolveBoundaries.html":"<div class=\"esriAnalysis\">\r\n    <div data-dojo-type=\"dijit/layout/ContentPane\" style=\"margin-top:0.5em; margin-bottom: 0.5em;\">\r\n      <div data-dojo-attach-point=\"_dissolveBoundariesToolContentTitle\" class=\"analysisTitle\">\r\n        <table class=\"esriFormTable\" > \r\n          <tr>\r\n            <td><div class=\"dissolveBoundariesIcon\"></div></td>\r\n            <td>${i18n.dissolveBoundaries}</td>\r\n            <td>\r\n              <div class=\"esriFloatTrailing\" style=\"padding:0;\">\r\n                  <a href=\"#\" class='esriFloatLeading helpIcon' esriHelpTopic=\"toolDescription\"></a>\r\n                  <a href=\"#\" data-dojo-attach-point=\"_closeBtn\" title=\"${i18n.close}\" class=\"closeIcon\">              \r\n                  <img data-dojo-attach-point=\"_closeImg\" border=\"0\"/></a>            \r\n              </div>                \r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div style=\"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;\"></div>\r\n    </div>\r\n    <div data-dojo-type=\"dijit/form/Form\" data-dojo-attach-point=\"_form\" readOnly=\"true\">\r\n     <table class=\"esriFormTable\"  data-dojo-attach-point=\"_dissolveBoundariesTable\"> \r\n       <tbody>\r\n        <tr>\r\n          <td colspan=\"3\" class=\"sectionHeader\" data-dojo-attach-point=\"_dissolveBoundariesDescription\">${i18n.dissolveBoundariesDefine}</td>           \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label data-dojo-attach-point=\"_labelOne\" class=\"esriFloatLeading esriTrailingMargin025\">${i18n.oneLabel}</label>    \r\n            <label class=\"\">${i18n.chooseDissolveLabel}</label>\t\t\t\r\n          </td>\r\n          <td class=\"shortTextInput\" width=\"1%\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' data-dojo-attach-point=\"_analysisFieldHelpLink\" esriHelpTopic=\"DissolveFields\"></a> \r\n          </td> \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">\r\n          \t<label class=\"esriLeadingMargin1\">\r\n               <div data-dojo-type=\"dijit/form/RadioButton\" data-dojo-attach-point=\"_overlappingAreasCheck\" data-dojo-props=\"checked:true\"></div>\r\n               ${i18n.overlappingAreasLabel}\r\n            </label> \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">\r\n          \t<label class=\"esriLeadingMargin1\">\r\n               <div data-dojo-type=\"dijit/form/RadioButton\" data-dojo-attach-point=\"_sameAttributeAreasCheck\" data-dojo-props=\"checked:false\" data-dojo-attach-event=\"onChange:_handleAreasChange\"></div>\r\n               ${i18n.sameAttributeAreasLabel}\r\n            </label> \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">  \r\n             <select class=\"esriLeadingMargin1  longInput\"  multiple=\"true\" data-dojo-type=\"dojox/form/CheckedMultiSelect\" data-dojo-attach-point=\"_dissolveFieldsSelect\"></select>\r\n          </td>        \t\r\n        </tr>    \r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.twoLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.summarizeLabel}</label>\r\n          </td>\r\n          <td class=\"shortTextInput\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"SummaryFields\"></a> \r\n          </td>             \r\n        </tr>\r\n        <tr data-dojo-attach-point=\"_afterStatsRow\">\r\n          <td colspan=\"3\" class=\"clear\"></td>\r\n        </tr>             \r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.threeLabel}</label>\r\n            <label class=\"longTextInput\">${i18n.outputLayerLabel}</label>\r\n          </td>\r\n          <td class=\"shortTextInput\">\r\n            <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"OutputName\"></a> \r\n          </td>             \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">\r\n            <input type=\"text\" data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-props=\"required:true\" class=\"longTextInput esriLeadingMargin05\" data-dojo-attach-point=\"_outputLayerInput\"></input>\r\n          </td>                \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"3\">\r\n             <div data-dojo-attach-point=\"_chooseFolderRow\">\r\n               <label style=\"width:9px;font-size:smaller;\">${i18n.saveResultIn}</label>\r\n               <input class=\"longInput\" dojoAttachPoint=\"_webMapFolderSelect\" dojotype=\"dijit/form/ComboBox\" trim=\"true\" style=\"width:60%;height:auto\"></input>\r\n             </div>              \r\n          </td>\r\n        </tr>         \r\n      </tbody>         \r\n     </table>\r\n    </div>\r\n    <div data-dojo-attach-point=\"_aggregateToolContentButtons\" style=\"padding:5px;margin-top:5px;border-top:solid 1px #BBB;\">\r\n      <div style=\"width:100%;padding:0.5em 0 0.5em 0\">\r\n        <a class=\"esriFloatTrailing esriSmallFont\"  href=\"#\" data-dojo-attach-point=\"_showCreditsLink\" data-dojo-attach-event=\"onclick:_handleShowCreditsClick\">${i18n.showCredits}</a>\r\n       <label data-dojo-attach-point=\"_chooseExtentDiv\"class=\"esriSelectLabel\" style=\"font-size:smaller;\">\r\n         <input type=\"radio\" data-dojo-attach-point=\"_useExtentCheck\" data-dojo-type=\"dijit/form/CheckBox\" data-dojo-props=\"checked:true\" name=\"extent\" value=\"true\"/>\r\n           ${i18n.useMapExtent}\r\n       </label>\r\n      </div>\r\n      <button data-dojo-type=\"dijit/form/Button\" type=\"submit\" data-dojo-attach-point=\"_saveBtn\" class=\"esriLeadingMargin4\" data-dojo-attach-event=\"onClick:_handleSaveBtnClick\">\r\n          ${i18n.runAnalysis}\r\n      </button>\r\n    </div>\r\n    <div data-dojo-type=\"dijit/Dialog\" title=\"${i18n.creditTitle}\" data-dojo-attach-point=\"_usageDialog\" style=\"width:40em;\">\r\n      <div data-dojo-type=\"esri/dijit/analysis/CreditEstimator\"  data-dojo-attach-point=\"_usageForm\"></div>\r\n    </div>    \r\n</div>\r\n"}});define("esri/dijit/analysis/DissolveBoundaries",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/i18n","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojox/form/CheckedMultiSelect","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/RadioButton","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/ComboBox","esri/kernel","esri/lang","esri/dijit/analysis/AnalysisBase","esri/dijit/analysis/CreditEstimator","esri/dijit/analysis/utils","dojo/text!esri/dijit/analysis/templates/DissolveBoundaries.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23,_24,_25){var _26=_2([_11,_12,_13,_14,_15,_22],{declaredClass:"esri.dijit.analysis.DissolveBoundaries",templateString:_25,basePath:_1.toUrl("esri/dijit/analysis"),widgetsInTemplate:true,inputLayer:null,dissolveFields:null,summaryFields:null,outputLayerName:null,showSelectFolder:true,showChooseExtent:true,showHelp:true,showCredits:true,i18n:null,toolName:"DissolveBoundaries",helpFileName:"DissolveBoundaries",resultParameter:"DissolvedLayer",constructor:function(_27){this.inherited(arguments);this._pbConnects=[];if(_27.containerNode){this.container=_27.containerNode;}},destroy:function(){this.inherited(arguments);_4.forEach(this._pbConnects,_5.disconnect);delete this._pbConnects;},postMixInProperties:function(){this.inherited(arguments);_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").dissolveBoundaries);},postCreate:function(){this.inherited(arguments);_f.add(this._form.domNode,"esriSimpleForm");_b.set(this._dissolveFieldsSelect.selectNode,"width","75%");_c.set(this._closeImg,"src",this.basePath+"/images/close.gif");this._outputLayerInput.set("validator",_3.hitch(this,this.validateServiceName));this._buildUI();},startup:function(){},_onClose:function(_28){if(_28){this._save();this.onSave();}this.onClose();},_handleAreasChange:function(){this._dissolveFieldsSelect.set("disabled",this._sameAttributeAreasCheck.get("checked")!==true);},_handleShowCreditsClick:function(e){e.preventDefault();if(!this._form.validate()){return;}var _29={},_2a={};_29.InputLayer=_6.toJson(_24.constructAnalysisInputLyrObj(this.inputLayer));_29.SummaryFields=_6.toJson(this.get("summaryFields"));_29.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});if(this._sameAttributeAreasCheck.get("checked")===true){_29.DissolveFields=_6.toJson(this.get("dissolveFields"));}if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_29.context=_6.toJson({extent:this.map.extent});}}this.getCreditsEstimate(this.toolName,_29).then(_3.hitch(this,function(_2b){this._usageForm.set("content",_2b);this._usageDialog.show();}));},_handleSaveBtnClick:function(){if(!this._form.validate()){return;}this._saveBtn.set("disabled",true);var _2c={},_2d={};_2c.InputLayer=_6.toJson(_24.constructAnalysisInputLyrObj(this.inputLayer));_2c.SummaryFields=_6.toJson(this.get("summaryFields"));_2c.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});if(this._sameAttributeAreasCheck.get("checked")===true){_2c.DissolveFields=_6.toJson(this.get("dissolveFields"));}if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_2c.context=_6.toJson({extent:this.map.extent});}}_2d.jobParams=_2c;_2d.itemParams={"description":this.i18n.itemDescription,"tags":_a.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),"snippet":this.i18n.itemSnippet};if(this.showSelectFolder){_2d.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"";}this.execute(_2d);},_handleAttrSelectChange:function(_2e){var _2f,_30,obj;if(_2e!=="0"){_2f=this.get("statisticSelect");if(_2f.get("value")!=="0"){if(!_2f.get("isnewRowAdded")){_30=_2f.get("removeTd");_b.set(_30,"display","block");obj=_2f.get("referenceWidget");_3.hitch(obj,obj._createStatsRow());_2f.set("isnewRowAdded",true);}}}},_handleStatsValueUpdate:function(_31,_32,_33){var _34,_35,obj;if(!this.get("attributeSelect")){return;}_34=this.get("attributeSelect");if(_34.get("value")!=="0"&&_33!=="0"){if(!this.get("isnewRowAdded")){_35=this.get("removeTd");_b.set(_35,"display","block");obj=this.get("referenceWidget");_3.hitch(obj,obj._createStatsRow());this.set("isnewRowAdded",true);}}},_save:function(){},_buildUI:function(){this._loadConnections();_24.initHelpLinks(this.domNode,this.showHelp);if(this.inputLayer){_c.set(this._dissolveBoundariesDescription,"innerHTML",_a.substitute(this.i18n.dissolveBoundariesDefine,{layername:this.inputLayer.name}));if(!this.outputLayerName){this.outputLayerName=_a.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name});}var _36=this.inputLayer.fields,_37=[],_38=false;_4.forEach(_36,function(_39,_3a){if(_4.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],_39.type)!==-1){if(this.dissolveFields!==null){_38=this.dissolveFields.indexOf(_39.name)!==-1;}_37.push({value:_39.name,label:_21.isDefined(_39.alias)&&_39.alias!==""?_39.alias:_39.name,selected:_38});}},this);this._dissolveFieldsSelect.addOption(_37);this._dissolveFieldsSelect.set("disabled",this._sameAttributeAreasCheck.get("checked")!==true);}if(this.outputLayerName){this._outputLayerInput.set("value",this.outputLayerName);}this._createStatsRow();_4.forEach(this.summaryFields,function(_3b){var _3c=_3b.split(" ");this._currentAttrSelect.set("value",_3c[0]);_3.hitch(this._currentAttrSelect,this._handleAttrSelectChange,_3c[0])();this._currentStatsSelect.set("value",_3c[1]);_3.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",_3c[1])();},this);_b.set(this._chooseFolderRow,"display",this.showSelectFolder===true?"block":"none");if(this.showSelectFolder){this.getFolderStore().then(_3.hitch(this,function(_3d){this.folderStore=_3d;this._webMapFolderSelect.set("store",_3d);this._webMapFolderSelect.set("value",this.portalUser.username);}));}_b.set(this._chooseExtentDiv,"display",this.showChooseExtent===true?"block":"none");},_loadConnections:function(){this._connect(this,"onExecute",_3.hitch(this,"_onClose",false));this._connect(this._closeBtn,"onclick",_3.hitch(this,"_onClose",false));},_createStatsRow:function(){var _3e,_3f,_40,_41,_42,_43,_44;_3e=_d.create("tr",null,this._afterStatsRow,"before");_40=_d.create("td",{style:{width:"45%",maxWidth:"100px"}},_3e);_3f=_d.create("td",{style:{width:"55%",maxWidth:"104px"}},_3e);_41=new _1b({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},_d.create("select",null,_40));this.set("attributes",{selectWidget:_41,inputLayer:this.inputLayer});_42=new _1b({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},_d.create("select",null,_3f));this.set("statistics",{selectWidget:_42});_41.set("statisticSelect",_42);_5.connect(_41,"onChange",this._handleAttrSelectChange);_44=_d.create("td",{"class":"shortTextInput removeTd",style:{"display":"none",maxWidth:"12px"}},_3e);_43=_d.create("a",{"title":this.i18n.removeAttrStats,"class":"closeIcon statsRemove","innerHTML":"<img src='"+this.basePath+"/images/close.gif"+"' border='0''/>"},_44);_5.connect(_43,"onclick",_3.hitch(this,this._removeStatsRow,_3e));_42.set("attributeSelect",_41);_42.set("removeTd",_44);_42.set("isnewRowAdded",false);_42.set("referenceWidget",this);_42.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=_42;this._currentAttrSelect=_41;return true;},_removeStatsRow:function(row){_4.forEach(_16.findWidgets(row),function(w){w.destroyRecursive();});_d.destroy(row);},_setAnalysisGpServerAttr:function(url){this.analysisGpServer=url;this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);},_setInputLayerAttr:function(_45){if(_45.geometryType==="esriGeometryPolygon"){this.inputLayer=_45;}},_setLayersAttr:function(_46){_4.forEach(_46,function(_47){if(_47.geometryType==="esriGeometryPolygon"){this.inputLayer=_47;}},this);},_setAttributesAttr:function(_48){if(!_48.inputLayer){return;}var _49,_4a,_4b;_49=_48.inputLayer;_4a=_48.selectWidget;_4b=_49.fields;_4a.addOption({value:"0",label:this.i18n.attribute});_4.forEach(_4b,function(_4c){if(_4.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],_4c.type)!==-1){if(_4c.name!==_49.objectIdField){_4a.addOption({value:_4c.name,label:_21.isDefined(_4c.alias)&&_4c.alias!==""?_4c.alias:_4c.name});}}},this);},_setStatisticsAttr:function(_4d){var _4e=_4d.selectWidget;_4e.addOption({value:"0",label:this.i18n.statistic});_4e.addOption({value:"SUM",label:this.i18n.sum});_4e.addOption({value:"MIN",label:this.i18n.minimum});_4e.addOption({value:"MAX",label:this.i18n.maximum});_4e.addOption({value:"MEAN",label:this.i18n.average});_4e.addOption({value:"STDDEV",label:this.i18n.standardDev});},_setDissolveFieldsAttr:function(_4f){this.dissolveFields=_4f;},_getDissolveFieldsAttr:function(){var _50="",_51=[];this._dissolveFieldsSelect.getOptions().forEach(function(_52){if(_52.selected===true&&_52.value!=="0"){_50+=_52.value+";";_51.push(_52.value);}});return _51;},_setSummaryFieldsAttr:function(_53){this.summaryFields=_53;},_getSummaryFieldsAttr:function(){var _54="",_55=[],_56,_57;_e(".statsSelect",this.domNode).forEach(function(_58){_56=_16.byNode(_58);_57=_56.get("attributeSelect");if(_57.get("value")!=="0"&&_56.get("value")!=="0"){_54+=_57.get("value")+" "+_56.get("value")+";";_55.push(_57.get("value")+" "+_56.get("value"));}});return _55;},_setDisableRunAnalysisAttr:function(_59){this._saveBtn.set("disabled",_59);},_setShowSelectFolderAttr:function(_5a){this.showSelectFolder=_5a;},_getShowSelectFolderAttr:function(){return this.showSelectFolder;},_setShowChooseExtentAttr:function(_5b){this.showChooseExtent=_5b;},_getShowChooseExtentAttr:function(){return this.showChooseExtent;},_setMapAttr:function(map){this.map=map;},_getMapAttr:function(){return this.map;},_setShowCreditsAttr:function(_5c){this.showCredits=_5c;},_getShowCreditsAttr:function(){return this.showCredits;},_setShowHelpAttr:function(_5d){this.showHelp=_5d;},_getShowHelpAttr:function(){return this.showHelp;},validateServiceName:function(_5e){var _5f=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(_5e);if(_5e.length===0||((_a.trim(_5e)).length===0)){this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue);return false;}if(_5f){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName);return false;}if(_5e.length>98){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength);return false;}return true;},_connect:function(_60,evt,_61){this._pbConnects.push(_5.connect(_60,evt,_61));},onSave:function(){},onClose:function(){}});if(_7("extend-esri")){_3.setObject("dijit.analysis.DissolveBoundaries",_26,_20);}return _26;});