Ext.define('app.view.contacts.ContactsGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contactsgridviewcontroller',

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
