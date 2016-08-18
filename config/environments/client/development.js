module.exports = {
  services: {
    endpoint: 'http://rnd1ec301.corp.copart.com:8000/sap/opu/odata/sap/ZP2P_MASTERDATA_SRV',
    references: {
      vendorList: "/VendorMaster?acctgroup='ZPUL'&sap-client=300&$format=json",
      countries: "/CountryMaster?locale='E'&sap-client=300&$format=json",
      UOMList: "/UomMaster?locale='E'&sap-client=300&$format=json",
      plantList: "/PlantMaster?sap-client=300?locale='E'&$format=json",
      currencyList: "/CurrencyMaster?locale='E'&sap-client=300&$format=json",
      materialList: "/MaterialMaster?locale='E'&materialtype='ZAWA'&sap-client=300&$format=json",
      businessUnitList: "/CostCenterMaster?locale='E'&sap-client=300&$format=json"
    }
  }
}
