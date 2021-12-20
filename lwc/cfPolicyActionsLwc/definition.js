let definition = 
                {"dataSource":{"type":null},"filter":{"['Type']":"Auto"},"states":[{"actionCtxId":"['Id']","blankStateCheck":false,"collapse":false,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"}]},"definedActions":{"actions":[{"id":"Modify Coverages Auto","displayName":"Modify Coverages","type":"OmniScript","omniType":{"Name":"auto/ModifyCoverages/English","Type":"auto","SubType":"ModifyCoverages","Language":"English","Id":"a3F5f000000vOvGEA0","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"conditions":{"group":[{"field":"['showConditionalActions']","operator":"==","value":"showA","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"filter":"$scope.obj['showConditionalActions'] == 'showA'","disableAddCondition":false,"vlocityIcon":"icon-v-edit2","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"Add Driver","displayName":"Add Driver","type":"OmniScript","omniType":{"Name":"auto/AddDrivers/English","Type":"auto","SubType":"AddDrivers","Language":"English","Id":"a3F5f000000vOvLEAK","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"conditions":{"group":[{"field":"['showConditionalActions']","operator":"==","value":"showA","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"filter":"$scope.obj['showConditionalActions'] == 'showA'","disableAddCondition":false,"vlocityIcon":"icon-v-plus","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"Add Vehicle","displayName":"Add Vehicle","type":"OmniScript","omniType":{"Name":"auto/AddVehicles/English","Type":"auto","SubType":"AddVehicles","Language":"English","Id":"a3F5f000000vOvMEA0","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"conditions":{"group":[{"field":"['showConditionalActions']","operator":"==","value":"showA","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"filter":"$scope.obj['showConditionalActions'] == 'showA'","disableAddCondition":false,"vlocityIcon":"icon-v-plus","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"Remove Driver","displayName":"Remove Driver","type":"OmniScript","omniType":{"Name":"auto/RemoveDrivers/English","Type":"auto","SubType":"RemoveDrivers","Language":"English","Id":"a3F5f000000vOvNEAK","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"newport","openUrlIn":"New Tab / Window","isLwcOS":true,"conditions":{"group":[{"field":"['showConditionalActions']","operator":"==","value":"showA","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"filter":"$scope.obj['showConditionalActions'] == 'showA'","disableAddCondition":false,"vlocityIcon":"icon-v-minus-line","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"Remove Vehicles","displayName":"Remove Vehicles","type":"OmniScript","omniType":{"Name":"auto/RemoveVehicles/English","Type":"auto","SubType":"RemoveVehicles","Language":"English","Id":"a3F5f000000vOvOEAK","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"conditions":{"group":[{"field":"['showConditionalActions']","operator":"==","value":"showA","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"filter":"$scope.obj['showConditionalActions'] == 'showA'","disableAddCondition":false,"vlocityIcon":"icon-v-minus-line","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"CancelPolicy","displayName":"Cancel Policy","type":"OmniScript","omniType":{"Name":"ins/PolicyCancellation/English","Type":"ins","SubType":"PolicyCancellation","Language":"English","Id":"a3F5f000000vOvIEAS","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"vlocityIcon":"icon-v-close","conditions":{"group":[{"field":"['showConditionalActions']","operator":"==","value":"showA","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage","filter":"$scope.obj['showConditionalActions'] == 'showA'","disableAddCondition":false},{"id":"File Claim","displayName":"File Claim","type":"Custom","url":"/apex/vlocity_ins__OmniScriptUniversalPage?id={{params.id}}&OmniScriptType=auto&OmniScriptSubType=FNOL&OmniScriptLang=English&PrefillDataRaptorBundle=&scriptMode=vertical&layout=newport&ContextId={{params.id}}","isCustomAction":true,"collapse":true,"hasExtraParams":false,"openUrlIn":"New Tab / Window","vlocityIcon":"icon-v-edit2"},{"id":"PubSub Action","displayName":"Modify Policy","type":"PubSub","eventName":"policy_action","message":"modifyPolicy","isCustomAction":true,"collapse":true,"hasExtraParams":true,"vlocityIcon":"icon-v-edit2","conditions":{"group":[{"field":"['showConditionalActions']","operator":"==","value":"showA","type":"custom"}]},"extraParams":{"recordId":"['Id']"},"filter":"$scope.obj['showConditionalActions'] == 'showA'","disableAddCondition":false}]},"fields":[],"name":"open-actions","sObjectType":"Asset","templateUrl":"action-grid-card-slds","isSmartAction":false,"smartAction":{},"lwc":{"MasterLabel":"actionGridState","DeveloperName":"actionGridState","Id":"0Rb5f000002CtnKCAA","name":"actionGridState","NamespacePrefix":"vlocity_ins"},"filter":"$scope.data.status === 'active'","disableAddCondition":false}],"title":"Actions","enableLwc":true,"GlobalKey__c":"PolicyActionsLwc/VEX Personal Lines/1/1580713938377"}; 
            export default definition