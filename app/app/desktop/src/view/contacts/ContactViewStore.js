Ext.define('app.view.contacts.ContactViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.contactviewstore',
    // storeId: 'contact',
    // idProperty: 'id',
    model: 'app.view.contacts.ContactModel',
    autoLoad: true,
    autoSync: true,
    // pageSize: 100,
    // proxy: {
    //     type: 'ajax',
    //     url : 'http://localhost:8000/api/contacts/1',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'contact'
    //     }
    // }
});
