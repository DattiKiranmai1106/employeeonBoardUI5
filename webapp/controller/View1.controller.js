sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.emp.emponboard.controller.View1", {
            onInit: function (oEvent) {
                var jsonCounData={"country":[{
                    "key":"IN",
                    "des":"India"
                },{
                    "key":"GER",
                    "des":"Germany"
                },{
                    "key":"JA",
                    "des":"Japan"
                },{
                    "key":"KE",
                    "des":"Kenya"
                },{
                    "key":"NO",
                    "des":"Norway"
                },{
                    "key":"PO",
                    "des":"Poland"
                },{
                    "key":"KR",
                    "des":"South Korea"
                },{
                    "key":"ES",
                    "des":"Spain"
                },{
                    "key":"CH",
                    "des":"SwizerLand"
                }]}

                var oModel=new sap.ui.model.json.JSONModel();
                oModel.setData(jsonCounData);//data set to the model
                this.getView().setModel(oModel, "oCountryModel");//data set to the view
                
                var jsonStateData={"state":[{
                    "ckey":"IN",
                    "skey":"AP",
                    "sdes":"Andhra Pradesh"
                },{
                    "ckey":"IN",
                    "skey":"TN",
                    "sdes":"Tamil Nadu"
                },{
                    "ckey":"IN",
                    "skey":"KA",
                    "sdes":"Karnataka"
                },{
                    "ckey":"IN",
                    "skey":"GA",
                    "sdes":"Goa"
                },{
                    "ckey":"IN",
                    "skey":"KL",
                    "sdes":"Kerala"
                },{
                    "ckey":"IN",
                    "skey":"HP",
                    "sdes":"Himachal Pradesh"
                },{
                    "ckey":"GER",
                    "skey":"SL",
                    "sdes":"Saarland"
                },{
                    "ckey":"GER",
                    "skey":"SN",
                    "sdes":"Saxony"
                },{
                    "ckey":"GRE",
                    "skey":"BE",
                    "sdes":"Berlin"
                }]}
                
                var oModelState=new sap.ui.model.json.JSONModel();
                oModelState.setData(jsonStateData);
                this.getView().setModel(oModelState,"oStateModel");

                
            },
            onChangecontry:function(oEvent){
                var oFilter=new sap.ui.model.Filter("ckey",sap.ui.model.FilterOperator.EQ,oEvent.getParameter("selectedItem").getKey());
                this.byId("stateId").getBinding("items").filter(oFilter);
            }

        });
    });
