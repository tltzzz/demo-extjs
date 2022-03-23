Ext.define('app.view.contacts.ContactViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.contactviewstore',
    model: 'app.view.contacts.ContactModel',
    autoLoad: true,
    autoSync: true,
});
