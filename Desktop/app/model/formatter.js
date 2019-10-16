sap.ui.define([
	], function () {
		"use strict";

		return {
			/**
			 * @public
			 * @param {boolean} bIsPhone the value to be checked
			 * @returns {string} path to image
			 */
			srcImageValue : function (bIsPhone) {
				var sImageSrc = "";
				if (bIsPhone === false) {
					sImageSrc = "./app/images/homeImage.jpg";
				} else {
					sImageSrc = "./app/images/homeImage_small.jpg";
				}
				return sImageSrc;
			}
		};
	}
);