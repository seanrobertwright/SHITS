/**
 * UI5 Application component.
 *
 * @Author: Demo
 * @Email:  seanrobertwright@gmail.com
 * @Filename: Component.js
 * 
 * Copyright (C) Sean Wright.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

sap.ui.define([
    //"jquery.sap.global",
    "sap/ui/core/UIComponent",
    "lril/app/model/models",
    "sap/ui/model/resource/ResourceModel"
    
], 
//function (UIComponent, models) {
function (UIComponent, models) {

    "use strict";

    return UIComponent.extend("lril.app.Component", {

        metadata: {
            manifest: "json"
        },
        
        init: function () {

            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();
            this.setModel(models.createDeviceModel(), "device");

            
        },

        myNavBack: function () {
            var oHistory = sap.ui.core.routing.History.getInstance();
			var oPrevHash = oHistory.getPreviousHash();
			if (oPrevHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("masterSettings", {}, true);
			}
        },

        getContentDensityClass: function () {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch){
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
    });
});