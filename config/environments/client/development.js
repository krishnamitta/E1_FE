module.exports = {
  services: {
    endpoint: 'http://rnd1ec301.corp.copart.com:8000/sap/opu/odata/sap/ZP2P_MASTERDATA_SRV',
    references: {
      getVendorList: "/VendorMaster?Ktokk='ZPUL'&sap-client=300",
      getCountries: "/CountryMaster?locale='E'&sap-client=300",
      getUOMList: "/UomMaster?$format=json&locale='E'",
      getPlantList: '/PlantMaster?sap-client=300&$format=json'
    }
  }
}
