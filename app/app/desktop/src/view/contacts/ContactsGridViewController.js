Ext.define('app.view.contacts.ContactsGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contactsgridviewcontroller',

    routes : {
        // 'contactsview' : 'onContacts',
        // 'contactview/:{id}' : 'onView',
    },

    // onView: function (props) {
    //     console.log('onView')

    //     console.log(props)

    //     // let centerview = this.lookup('centerview')
    //     // let xtype = 'contactview'
    //     // let heading = 'heading'

    //     // centerview.add({ xtype,  itemId: xtype, heading })
    //     // centerview.setActiveItem(xtype)

    //     let model = this.getViewModel()

    //     console.log(model.get('name'))

    //     // window.location.href = `#contactview`;
    // },

    show: function (t) {
        console.log('show ContactsGridViewController')
    },

    onSave: function() {        
        var form = this.getView();
        let put = {}
        form.innerItems.forEach(item => {
            put[item.name] = item.rawValue
        })

        var user = Ext.create('model.contactmodel', put);
        user.save();

        window.location.href = `#contactsgridview`;
    }
});
