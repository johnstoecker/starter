/*
 * This store loads the doctors from file 'doctors.json'
 * Note: there is no writer attached, so changes will
 * only occur in local cache
 */
Ext.define('starter.store.Doctors', {
	extend: 'Ext.data.Store',
	xtype: 'doctorStore',
    config: {
    	model: 'starter.model.Doctor',
    	proxy: {
    		type: 'ajax',
    		url : 'doctors.json',
    		reader: 'json',    	
    		},
    	autoLoad: true,

    }
});
