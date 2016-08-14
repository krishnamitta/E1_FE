module.exports = {
  services: {
    endpoint: 'http://rnd1ec301.corp.copart.com:8000',
    references: {
      getVendorList: "/sap/opu/odata/sap/ZP2P_MASTERDATA_SRV/VendorMaster?Ktokk='ZPUL'&$format=json",
      getCountries: '/sap/opu/odata/sap/ZP2P_MASTERDATA_SRV/CountryMaster'
    }
  }
}
