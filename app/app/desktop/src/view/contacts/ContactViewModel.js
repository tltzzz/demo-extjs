Ext.define('app.view.contacts.ContactViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.contactviewmodel',
	data: {
		name: 'contact view model',
		fio: '',
		comment: '',
		phones: [],
		record: null
	}
});
