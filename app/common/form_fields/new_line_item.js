export default {
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
    valueField: 'plant',
    label: 'name',
    required: true
  },
  part_number: {
    name: 'manufacturer_part_number',
    floatingLabel: 'Manufacturer Part Number',
    type: 'string'
  },
  purchasing_organization: {
    name: 'purchasing_organization',
    floatingLabel: 'Pruchasing Organization',
    type: 'string'
  },
  price: {
    name: 'price',
    floatingLabel: 'Price',
    type: 'number',
    required: true
  },
  total_price: {
    name: 'total_price',
    floatingLabel: 'Total Value',
    type: 'string',
    required: true,
    disabled: true
  },
  currency: {
    name: 'currency',
    floatingLabel: 'Currency',
    type: 'dropdown',
    dataSource: [{ code: 'usd', description: 'USD' }, { code: 'eur', description: 'EUR' }, { code: 'inr', description: 'INR' }],
    required: true
  },
  quantity: {
    name: 'quantity',
    floatingLabel: 'Quantity',
    type: 'number',
    required: true
  },
  notes: {
    name: 'notes',
    floatingLabel: 'Notes',
    type: 'string',
    multiLine: true,
    required: false
  },
  uom: {
    name: 'uom',
    floatingLabel: 'UOM',
    type: 'dropdown',
    required: true
  },
  expected_deliver_date: {
    name: 'expected_delivery_date',
    floatingLabel: 'Expected Delivery Date',
    type: 'string'
  },
  vendor: {
    name: {
      name: 'vendor_name',
      floatingLabel: 'Vendor Name',
      type: 'dropdown',
      dataSource: [{ code: '1', description: 'Vendor 1' }, { code: '2', description: 'Vendor 2' }],
      required: true
    },
    material_number: {
      name: 'vendor_material_number',
      floatingLabel: 'Vendor Material Number',
      type: 'string'
    },
    address: {
      name: 'vendor_address',
      floatingLabel: 'Vendor Address',
      type: 'string',
      disabled: true
    }
  },
  material: {
    name: {
      name: 'material_name',
      floatingLabel: 'Item/Service',
      type: 'dropdown',
      label: 'material',
      valueField: 'material'
    },
    description: {
      name: 'description',
      floatingLabel: 'Item Description',
      type: 'string',
      disabled: true
    },
    group: {
      name: 'material_group',
      floatingLabel: 'Material Group',
      type: 'string',
      disabled: true
    }
  },
  accounting: {
    distribution: {
      name: 'account_distribution',
      floatingLabel: 'Account Distribution',
      type: 'dropdown',
      dataSource: [{ code: 'percentage', description: 'Percentage' }, { code: 'quantity', description: 'Quantity' }]
    },
    assignment_category: {
      name: 'assignment_category',
      floatingLabel: 'Account Assignment Category',
      type: 'dropdown',
      dataSource: [{ code: 'with_goods_receipt', description: 'With Goods Receipt' },
      { code: 'without_goods_receipt', description: 'Without Goods Receipt' }]
    },
    ledger_account: {
      name: 'ledger_account',
      floatingLabel: 'General Ledger Account',
      type: 'string'
    }
  }
}
