import { LightningElement, track, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';
export default class selectScheduledItems extends OmniscriptBaseMixin(LightningElement) {
    @track _scheduledItemRecord = "";
    @track selectedInsuredIds = [];
    @api set scheduledItemRecord(val) {
        if (val) {
            this._scheduledItemRecord = val;
        }
    }
    get scheduledItemRecord() {
        return this._scheduledItemRecord;
    }
    selectRecords(evnt) {
        let selectedRecordId = evnt.currentTarget.getAttribute("data-id");
        if (evnt.currentTarget.classList.value.includes('selected')) {
            evnt.currentTarget.classList.remove('selected');
            let index = this.selectedInsuredIds.findIndex(x => x.Id == selectedRecordId);
            this.selectedInsuredIds.splice(index, 1);
        } else {
            evnt.currentTarget.classList.add('selected');
            this.selectedInsuredIds.push({"Id":selectedRecordId});
        }

        this.omniUpdateDataJson({ "selectedInsuredIds": this.selectedInsuredIds });
    }
    get getSvgStyle() {
        return "fill: #fff;position: relative;z-index: 1;width: 1rem;left: -4px;top: 6px;";
    }
}