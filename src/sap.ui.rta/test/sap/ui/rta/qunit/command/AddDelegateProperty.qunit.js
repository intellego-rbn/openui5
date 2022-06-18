/* global QUnit */

sap.ui.define([
	"rta/test/qunit/command/basicCommandTest",
	"sap/ui/thirdparty/jquery"
], function(
	basicCommandTest,
	jQuery
) {
	"use strict";

	var mSameProperties = {
		changeType: "addFields",
		index: 1,
		newControlId: "newControlId",
		parentId: "myFancyParentId",
		modelType: "myFancyModelType",
		relevantContainerId: "myFancyRelevantContainerId",
		oDataServiceVersion: "myFancyVersion"
	};

	basicCommandTest(
		{
			commandName: "addDelegateProperty",
			designtimeActionStructure: ["add", "delegate"]
		},
		Object.assign({}, mSameProperties, {
			bindingString: "myFancyBindingPath",
			propertyName: "propertyName",
			oDataServiceUri: "serviceUri",
			entityType: "myFancyEntityType"
		}), Object.assign({}, mSameProperties, {
			bindingPath: "myFancyBindingPath",
			oDataInformation: {
				oDataServiceUri: "serviceUri",
				propertyName: "propertyName",
				entityType: "myFancyEntityType"
			}
		})
	);

	QUnit.done(function () {
		jQuery("#qunit-fixture").hide();
	});
});
