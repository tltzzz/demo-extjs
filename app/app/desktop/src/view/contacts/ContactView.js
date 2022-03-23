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
            // label: 'Color',
            // scrollable: true,
            defaultType: 'textfield',
            name: 'phones',
            bind: {
                items: {
                    bindTo: '{phones}',
                    deep: true
                }
            },
            // defaults: {
            // flex: 1
            // },
            // layout: 'hbox',
            // items: [
            //     {
            //         label  : 'Blue',
            //         name      : 'color1',
            //         inputValue: 'blue',
            //         // id        : 'radio4'
            //     }, 
            //     // {
            //     //     boxLabel  : 'Grey',
            //     //     name      : 'color2',
            //     //     inputValue: 'grey',
            //     //     // id        : 'radio5'
            //     // }, 
            //     // {
            //     //     boxLabel  : 'Black',
            //     //     name      : 'color3',
            //     //     inputValue: 'black',
            //     //     // id        : 'radio6'
            //     // }
            // ]
        },
        {
            xtype: 'button',
            text: 'Добавить телефон',
            handler: 'addPhone'
        }
    ],


});
