sap.ui.jsview("eventsdemo1.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventsdemo1.demo
	*/ 
	getControllerName : function() {
		return "eventsdemo1.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventsdemo1.demo
	*/ 
	createContent : function(oController) {
		var oSimpleInput1 = new sap.m.Input("idInput",{
 			placeholder:"Enter Name",
 		   liveChange:[oController.liveChange,oController],

 			
 		});
 		var oBtn1 = new sap.m.Button({
 			text:"Submit"
 		});
 		var oPage1 = new sap.m.Page({
			title: "Event demo1",
			content: [
			          	oSimpleInput1,
			          	oBtn1      
			]
		});
		 		
 		return oPage1;
	}

});