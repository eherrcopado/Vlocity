global class DelimitToRows implements vlocity_ins.VlocityOpenInterface{
    public boolean invokeMethod(String methodName,Map<String,Object> input,Map<string,Object> output,Map<string,Object> options) { 
        System.debug('Delimit Profile Entry');
        
        Map <String,Object> tagNode = new Map<String,Object>();
        tagNode = (Map <String,Object>)input.get('tagNode');
              
        System.debug('family: ' + (String)tagNode.get('Customer_Interests__c'));
        List<Map<String,Object>> AttribRows = new List<Map<String,Object>>();
        
        Set<String> tagKeySet = new Set<String>();
        tagKeySet = tagNode.keySet();
        System.debug('set tagKeySet');
        List<String> tagKeys = new List<String>(tagKeySet);
         System.debug('set tagKeys');
        for (Integer i = 0;i < tagKeys.size(); i++){
            String category = tagKeys[i];
            System.debug('category ' + category);
            String valueString = (String)tagNode.get(category);
            String[] labelAry = valueString.split(';');
            for (Integer j = 0; j < labelAry.size();j++){

                Map<String,Object> tag = new Map<String,Object>();
                tag.put('category',category);
                tag.put('label',labelAry[j]);
                AttribRows.add(tag);
            }
        }
        //System.debug(AttribRows);
        output.put('tags',AttribRows);

        return true;
    }
}