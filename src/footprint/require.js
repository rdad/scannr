/**
 * Created by adrienbrussolo on 21/11/2014.
 */
require: {
    scan: function(){

        var list = [];

        var require_blank_footprint = {};

        for (var property in window.require.s.contexts._.defined) {

            //if(typeof require_blank_footprint[property] == 'undefined'){
            //    list.push(property);
            //}
            list.push(property);
            console.log(list);
        }

        scannr.analysis.add(list);
    }
},