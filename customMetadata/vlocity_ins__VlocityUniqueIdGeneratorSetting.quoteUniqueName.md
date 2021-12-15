<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>quoteUniqueName</label>
    <protected>false</protected>
    <values>
        <field>vlocity_ins__Format__c</field>
        <value xsi:type="xsd:string">%vlocity_ins__PrimaryRootItemId__r.vlocity_ins__Type__c% + &quot; Quote: &quot; + %Account.Name% + &quot; Eff. Date: &quot;+ %vlocity_ins__EffectiveDate__c% +&quot; - &quot; + %QuoteNumber%</value>
    </values>
    <values>
        <field>vlocity_ins__IsActive__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>vlocity_ins__ObjectType__c</field>
        <value xsi:type="xsd:string">Quote</value>
    </values>
</CustomMetadata>
