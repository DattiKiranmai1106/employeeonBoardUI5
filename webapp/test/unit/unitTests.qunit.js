/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsapktemp/emponboard/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
