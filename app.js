/*
 * starter application, by John Stoecker using Sencha Touch 2.0
 * This application is a client-side hospital screening system that
 * manages patients and doctors. The user is able to add more patients,
 * attach them to a certain doctor, and remove them back into the patient
 * pool.
 * 
 */

Ext.application({
    name: 'starter',

    requires: [
        'starter.store.Patients',
        'starter.store.Doctors',
        'Ext.navigation.View'
    ],
    
    //we will use a Patient and Doctor class
    models: ['Patient', 'Doctor'],

    //here we declare the visual components
    views: ['Main', 'TopMenu', 'PatientView', 'DoctorView', 'NewPatient', 'Sort'],
    
    //here we declare our controller that will perform actions
    controllers: ['Application'],

    //the stores will hold our data in a local cache
    stores: ['Patients', 'Doctors'],
    
    //entry point
    launch: function() {
    	Ext.Viewport.add({xclass: 'starter.view.Main'});
    }
});
