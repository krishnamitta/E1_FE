export default {
  title: {
    name: 'title',
    floatingLabel: 'Title',
    type: 'string',
    required: true
  },
  vendor: {
    name: 'vendor',
    floatingLabel: 'Vendor',
    type: 'dropdown',
    dataSource: [{ code: '1', description: 'Vendor 1' }, { code: '2', description: 'Vendor 2' }],
    required: true
  },
  business_unit: {
    name: 'business_unit',
    floatingLabel: 'Business Unit',
    type: 'dropdown',
    dataSource: [{ code: 'p2p', description: 'G1 P2P' }],
    required: true
  },
  plant: {
    name: 'plant',
    floatingLabel: 'Plant',
    type: 'dropdown',
    dataSource: [{ code: '5001', description: 'Dallas' }, { code: '5002', description: 'Miami' }],
    required: true
  },
  currency: {
    name: 'currency',
    floatingLabel: 'Currency',
    type: 'dropdown',
    dataSource: [{ code: 'usd', description: 'USD' }, { code: 'eur', description: 'EUR' }, { code: 'inr', description: 'INR' }],
    required: true
  }
}
