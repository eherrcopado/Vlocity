global class GroupBy implements vlocity_ins.VlocityOpenInterface{
    public boolean invokeMethod(String methodName,Map<String,Object> input,Map<string,Object> output,Map<string,Object> options) { 
        System.debug('GroupBy Entry');
        
        List<Map<String,Object>> sourceRows = new List<Map<String,Object>>();
        Map<String,Object> headerFields = new Map<String,Object>();
        sourceRows = (List<Map <String,Object>>)input.get('sourceRows');
        headerFields = (Map<String,Object>)input.get('headerFields');
        
        String groupByField = 'RecordName';
        //String groupByField = (String)input.get('groupByField');
        Map <String,Object> groupMap = new Map<String,Object>();
         
        for (Integer i = 0;i < sourceRows.size(); i++){
            Map<String,Object> thisRow = sourceRows.get(i);
            String groupByVal = (String)thisRow.get(groupByField);
            if (!groupMap.containsKey(groupByVal)){
                List<Map<String,Object>> childItems = new List<Map<String,Object>>();
                Map <String,Object> parentRecord = new Map<String,Object>();
                childItems.add(thisRow);
                //some hard coded fields here
                parentRecord.put('RecordName',thisRow.get('RecordName'));
                parentRecord.put('ObjectType',thisRow.get('ObjectType'));
                parentRecord.put('ContextId',thisRow.get('ContextId'));
                parentRecord.put('Actions',childItems);

                groupMap.put(groupByVal, parentRecord);
                //end hard coded fields
            } else {
                
                Map<String,Object> parentRecord = (Map<String,Object>)groupMap.get(groupByVal);
                List<Map<String,Object>> childItems = (List<Map<String,Object>>)parentRecord.get('Actions');
                childItems.add(thisRow);
            }
        }
        List<String> groupKeys = maptolist(groupMap); 
        List<Map<String,Object>> groupedRows = new List<Map<String,Object>>();

        for (Integer i = 0;i < groupKeys.size(); i++){
            String thisKey = (String)groupKeys.get(i);
            Map<String,Object> parentRecord = (Map<String,Object>)groupMap.get(thisKey);
            groupedRows.add(parentRecord);
        }

        List<String> headerKeys = maptolist(headerFields); 

        for (Integer i = 0;i < headerKeys.size(); i++){
            String thisKey = (String)headerKeys.get(i);
            output.put(thiskey,headerFields.get(thisKey));
            /*
            if (headerFields.get(thisKey) instanceof String){
                output.put(thiskey,(String)headerFields.get(thisKey));
            }
            if (headerFields.get(thisKey) instanceof Decimal){
                output.put(thiskey,(Decimal)headerFields.get(thisKey));
            }
            */
        }

        output.put('Topics',groupedRows);
        //output.put('groupedRows',groupedRows);
 
        return true;
    }

    private List<String> maptolist(Map<String,Object> thisMap){
        Set<String> theseKeys = new Set<String>();
        theseKeys = thisMap.keySet();
        List<String> keyList =new List<String>();
        keyList.addAll(theseKeys);
        return keyList;
    }
}