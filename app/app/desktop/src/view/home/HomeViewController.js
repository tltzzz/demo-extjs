Ext.define('app.view.home.HomeViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.homeviewcontroller',

	routes : {
        'homeview' : 'onHome'
    },

	onHome : function () {
        console.log('home')
    }
});
