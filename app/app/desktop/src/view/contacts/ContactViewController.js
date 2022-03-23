Ext.define('app.view.contacts.ContactViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contactviewcontroller',

    routes : {
        'contactview/:{id}' : 'onView',
    },

    addPhone: function() {
        const model = this.getViewModel()
        const phones = Object.values(model.get('phones'))

        const index = phones.length + 1
        model.set(`phoneValue_new${index}`, '') 
        phones.push({
            label: `Телефон ${index}`,
            name: `phone_new${index}`,
            value: '',
            bind: {
                value: `{phoneValue_new${index}}`
            }
        })

        model.set('phones', phones)
    },

    onView: function (props) {
        const model = this.getViewModel()
        const contact = Ext.create('model.contactmodel', {id: parseInt(props.id)})
        contact.load({
            callback: function(record, operation, success) {
                model.set('record', record)

                model.set('id', record.get('id'))
                model.set('fio', record.get('fio'))
                model.set('comment', record.get('comment'))

                const arrayPhones = []
                const phones = record.get('phones')
                phones.forEach((item, index) => {

                    model.set(`phoneValue_${item.id}`, item.number) 

                    arrayPhones.push({
                        label: `Телефон ${index+1}`,
                        name: `phone_${item.id}`,
                        value: item.number,
                        bind: {
                            value: `{phoneValue_${item.id}}`
                        }
                    })
                })

                model.set('phones', arrayPhones)                
            }
        })
    },

    show: function () {
        const model = this.getViewModel()
        model.set('id', null)
        model.set('fio', '')
        model.set('comment', '')
        model.set('record', null)
    },

    onSave: function() {
        const model = this.getViewModel()
        const id = model.get('id')

        if (id !== null ) {
            const phones = Object.values(model.get('phones'))
            const arrayPhones = []
            phones.forEach(item => {
                const id = item.name.split('_')[1]
                let put = {
                    number: model.get(`phoneValue_${id}`)
                }
                if (id.indexOf('new') === -1) {
                    put['id'] = id
                }
                arrayPhones.push(put)
            })

            console.log(arrayPhones)

            const record = model.get('record')

            record.set('fio', model.get('fio'))
            record.set('comment', model.get('comment'))
            record.set('phones', arrayPhones)

            record.save({
                success: function() {
                    console.log('saved')
                    window.location.href = `#contactsgridview`
                }
            })
        } else {
            let put = {
                fio: model.get('fio'),
                comment: model.get('comment'),
            }
    
            const contact = Ext.create('model.contactmodel', put)
            contact.save({
                success: function() {
                    console.log('added')
                    window.location.href = `#contactsgridview`
                }
            })
        }

        
    }
});
