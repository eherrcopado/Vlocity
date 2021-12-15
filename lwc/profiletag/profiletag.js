import { LightningElement, track, api } from 'lwc';
import util from "vlocity_ins/utility";
let idGenerator = 0;
export default class profiletag extends LightningElement {
    @track profileTags = [];
    @track obj;
    @api accountId;
    // @api get accountId() {
    //     this._accountId;
    // }
    // set accountId(val) {
    //     this._accountId = val;
    //     console.log('accountId: ' + val);
    // }
    nsPrefix = "";
    coloredTags = [];

    connectedCallback() {

        this.nsPrefix = util.namespace;
        this.setProfileAttrs();
    }

    renderedCallback() {

        if (this.accountId && !this.isFirstRender && this.coloredTags && this.coloredTags.length > 0) {
            if (this.accountId) {
                this.isFirstRender = true;
                if (this.coloredTags) {
                    this.coloredTags.map(name => {
                        setTimeout(() => {
                            let tag = this.template.querySelector("." + name);
                            if (tag) {
                                tag.firstChild.style.backgroundColor = tag.dataset.color;
                                tag.firstChild.style.color = "#ffffff";
                            }
                        }, 0);
                    });
                }
            }
        }
    }

    setProfileAttrs() {
        return new Promise((resolve, reject) => {
            let objId = JSON.stringify(this.accountId);
            let getAttributeQuery = {
                type: "apexremote",
                value: {
                    className: "ProfileClientAttributeController",
                    methodName: "getAttributeCategories",
                    remoteNSPrefix: "vlocityins2",
                    vlocityAsync: true,
                    inputMap: '{ "entityId" : "' + this.accountId + '"}',
                    optionsMap: '{}'
                }
            };
            let requestData = JSON.stringify(getAttributeQuery);
            util.getDataHandler(requestData).then(category => {
                let categoryIndexArr = [];
                category = JSON.parse(category);
                category = category && category.result ? category.result : [];
                category.map((catVal, catIndex) => {
                    let catCode = catVal[this.nsPrefix + "Code__c"];
                    catCode = catCode ? JSON.stringify(catCode) : "";
                    let getAppliedAttributes = {
                        type: "apexremote",
                        value: {
                            className: "ProfileClientAttributeController",
                            methodName: "getAppliedAttributes",
                            remoteNSPrefix: "vlocityins2",
                            vlocityAsync: true,
                            inputMap: `{ "clientId" : ${objId} , "categoryCode" : ${catCode} }`,
                            optionsMap: "{}"
                        }
                    };
                    let requestData1 = JSON.stringify(getAppliedAttributes);
                    util.getDataHandler(requestData1).then(profileAttr => {
                        profileAttr = JSON.parse(profileAttr);
                        profileAttr =
                            profileAttr && profileAttr.result
                                ? JSON.parse(profileAttr.result)
                                : [];

                        if (categoryIndexArr.indexOf(catIndex) === -1) {
                            categoryIndexArr.push(catIndex);
                        }
                        profileAttr.map(val => {
                            let attrNum = idGenerator++;
                            let attrClassName =
                                "attr-" + val.Name.replace(/\s/g, "") + attrNum;
                            this.profileTags.push({
                                id: "attr-" + attrNum,
                                class: attrClassName,
                                content: val.Name,
                                colorC: val.Color ? val.Color : ""
                            });
                            if (val.Color) this.coloredTags.push(attrClassName);
                        });
                    })
                        .catch(e => {
                            reject("Error in fetching profile attributes");
                        });
                });
            })
                .catch(e => {
                    reject("Error in fetching profile attributes");
                });

        });
    }
}