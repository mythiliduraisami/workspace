sap.ui.jsview("myfirstapp.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp.demo
	*/ 
	getControllerName : function() {
		console.log("Inside getControllerName");
		return "myfirstapp.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp.demo
	*/ 
	createContent : function(oController) {
		
		var oSimpleInput = new sap.m.Input({
			placeholder: "Enter Name"
		});
		
		var oBtn = new sap.m.Button({
			text: "Submit"
		});
		var oPage = new sap.m.Page({
			title: "Simple App",
			content: [
						oSimpleInput, 
						oBtn
			]
		});
		console.log("Inside createContent");
		return oPage;
		
	}

});