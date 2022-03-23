Ext.define('app.view.contacts.ContactView',{
    extend: 'Ext.form.Panel',
    xtype: 'contactview',
    cls: 'contactview',
    requires: [],
    controller: {type: 'contactviewcontroller'},
    viewModel: {type: 'contactviewmodel'},
    store: {type: 'contactviewstore'},

    listeners: {
        show: 'show'
    },

    buttons: {
        submit: 'onSave'
    },

    items: [
        {
            xtype: 'textfield',
            label: 'ФИО',
            name: 'fio',
            bind: '{fio}'
        },
        {
            xtype: 'textfield',
            label: 'Коментарий',
            name: 'comment',
            bind: '{comment}'
        },
        {
            xtype: 'fieldcontainer',
            defaultType: 'textfield',
            name: 'phones',
            bind: {
                items: {
                    bindTo: '{phones}',
                    deep: true
                }
            }
        },
        {
            xtype: 'button',
            text: 'Добавить телефон',
            handler: 'addPhone'
        }
    ],


});
