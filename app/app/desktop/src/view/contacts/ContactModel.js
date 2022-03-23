Ext.define('app.view.contacts.ContactModel', {
    extend: 'Ext.data.Model',
	alias: 'model.contactmodel',
    fields: [ 'id', 'fio', 'comment', 'phones' ],
    // hasMany: {
    //     model: 'PhoneModel',
    //     name: 'phones'
    // },
    proxy: {
        type: 'rest',
        url : 'http://localhost:8000/api/contacts',
        reader: {
            type: 'json',
            rootProperty: 'contact'
        }
    }
});
