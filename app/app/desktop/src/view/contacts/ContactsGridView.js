Ext.define('app.view.contacts.ContactsGridView',{
    extend: 'Ext.grid.Grid',
    xtype: 'contactsgridview',
    cls: 'contactsgridview',
    requires: [
        'Ext.grid.rowedit.Plugin',
        'Ext.grid.plugin.Editable',
        'Ext.grid.plugin.CellEditing'
    ],
    controller: {type: 'contactsgridviewcontroller'},
    viewModel: {type: 'contactsgridviewmodel'},
    store: {type: 'contactsgridviewstore'},
    plugins: {
        pagingtoolbar: true,
        cellediting: true,
        // grideditable: true
    },

    columns: [
        {
            text: 'ИД',
            dataIndex: 'id',
            width: 100,
        },
        {
            text: 'ФИО',
            dataIndex: 'fio',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'},
            // editable: true,
            // hidden: true
        },
        {
            text: 'Коментарий',
            dataIndex: 'comment',
            width: 230,
            // editable: true
        },
        {

            text: 'Телефоны',
            dataIndex: 'phones',
            width: 230,
            // editable: true,

            renderer: function(v) {
                let phones = []
                v.forEach(item => {
                    phones.push(item.number)
                })   
                return phones.join(', ')
            },
        },

        {
            text: "",
            dataIndex: 'button',
            cell: {
                xtype: "widgetcell",
                widget: {
                    xtype: 'panel',
                    header: false,
                    items: [{
                        xtype: 'button',
                        text: 'Изменить',
                        handler: function(button,e) { 
                            let accountData = this.up().up()._record.data
                            // console.log(accountData)

                            window.location.href = `#contactview/${accountData.id}`;
                        }
                    }]
                }
            }
        } 
    ],

    listeners: {}
});
