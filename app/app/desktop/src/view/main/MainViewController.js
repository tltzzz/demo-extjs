Ext.define('app.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',

	routes: { 
		':{xtype}': {action: 'mainRoute'},
		':{xtype}/:{id}': {action: 'mainRoute'},
		
		
	},

	initViewModel: function(vm){
		vm.getStore('menu').on({
			load: 'onMenuDataLoad',
			single: true,
			scope: this
		});
	},

	onMenuDataLoad: function(store){
		this.mainRoute(Ext.util.History.getHash());
	},

	mainRoute:function(props) {
		// console.log('mainRoute')
		// console.log(props)
		let {xtype} = props

		var navview = this.lookup('navview'),
			menuview = navview.lookup('menuview'),
			centerview = this.lookup('centerview'),
			exists = Ext.ClassManager.getByAlias('widget.' + xtype),
			node, vm;

		if (exists === undefined) {
			console.log(xtype + ' does not exist');
			console.log(props)
			return;
		}
		if(!menuview.getStore()) {
			console.log('Store not yet avalable from viewModel binding');
			return;
		}

		node = menuview.getStore().findNode('xtype', xtype);

		// if (node == null) {
		// 	console.log('unmatchedRoute: ' + xtype);
		// 	return;
		// }

		let heading = ''
		if (node == null) {

		} else {
			heading = node.get('text')
			menuview.setSelection(node);
		}

		if (!centerview.getComponent(xtype)) {
		centerview.add({ xtype: xtype,  itemId: xtype, heading });
		}

		centerview.setActiveItem(xtype);
		// menuview.setSelection(node);
		vm = this.getViewModel(); 
		vm.set('heading', heading);
	},

	onMenuViewSelectionChange: function (tree, node) {
		if (node == null) { return }

		var vm = this.getViewModel();

		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},

	onTopViewNavToggle: function () {
		var vm = this.getViewModel();

		vm.set('navCollapsed', !vm.get('navCollapsed'));
	},

	onHeaderViewDetailToggle: function (button) {
		var vm = this.getViewModel();

		vm.set('detailCollapsed', !vm.get('detailCollapsed'));

		if(vm.get('detailCollapsed')===true) {
			button.setIconCls('x-fa fa-arrow-left');
		}
		else {
			button.setIconCls('x-fa fa-arrow-right');
		}
	},

	onBottomViewlogout: function () {
		localStorage.setItem("LoggedIn", false);
		this.getView().destroy();
		Ext.Viewport.add([{ xtype: 'loginview'}]);
	}
});
