Ext.define('app.view.contacts.ContactsGridViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.contactsgridviewstore',
    model: 'app.view.contacts.ContactModel',
    autoLoad: true,
    autoSync: true,
    pageSize: 10,
    proxy: {
        type: 'ajax',
        url : 'http://localhost:8000/api/contacts',
        reader: {
            type: 'json',
            rootProperty: 'contacts'
        }
    }
});
