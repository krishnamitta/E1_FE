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
  }
}
