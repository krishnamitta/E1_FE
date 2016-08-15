module.exports = {
  services: {
    endpoint: 'http://rnd1ec301.corp.copart.com:8000/sap/opu/odata/sap/ZP2P_MASTERDATA_SRV',
    references: {
      getVendorList: "/VendorMaster?Ktokk='ZPUL'&$format=json",
      getCountries: '/CountryMaster',
      getUOMList: '/UomMaster'
    }
  }
}
