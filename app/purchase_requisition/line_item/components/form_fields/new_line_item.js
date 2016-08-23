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
  total_price: {
    name: 'totalPrice',
    floatingLabel: 'Total Value',
    type: 'string',
    required: true,
    disabled: true
  },
  currency: {
    name: 'currency',
    floatingLabel: 'Currency',
    type: 'autocomplete',
    required: true
  },
  quantity: {
    name: 'quantity',
    floatingLabel: 'Quantity',
    type: 'string',
    required: true
  },
  notes: {
    type: 'string',
    multiLine: true,
    required: false
  },
  noteTypes: {
    type: 'dropdown',
    multiLine: true,
    required: false,
    dataSource: [{ code: '1', description: 'Internal' }, { code: '2', description: 'External' }]
  },
  expected_deliver_date: {
    name: 'expected_delivery_date',
    floatingLabel: 'Expected Delivery Date',
    type: 'date'
  },
  ship_to_address: {
    street: {
      name: 'shipToAddress.street',
      floatingLabel: 'Street',
      type: 'string',
      disabled: true
    },
    city: {
      name: 'shipToAddress.city',
      floatingLabel: 'City',
      type: 'string',
      disabled: true
    },
    zip: {
      name: 'shipToAddress.postalCode',
      floatingLabel: 'Postal Code',
      type: 'string',
      disabled: true
    },
    country: {
      name: 'shipToAddress.country',
      floatingLabel: 'Country',
      type: 'string',
      disabled: true
    },
    state: {
      name: 'shipToAddress.region',
      floatingLabel: 'State',
      type: 'string',
      disabled: true
    }
  },
  vendor: {
    name: {
      name: 'vendor.name',
      floatingLabel: 'Vendor Name',
      type: 'dropdown',
      dataSource: [{ code: '1', description: 'Vendor 1' }, { code: '2', description: 'Vendor 2' }],
      required: true
    },
    material_number: {
      name: 'vendor.material_number',
      floatingLabel: 'Vendor Material Number',
      type: 'string'
    },
    address: {
      name: 'vendor.address',
      floatingLabel: 'Vendor Address',
      type: 'string',
      disabled: true
    }
  },
  material: {
    name: {
      name: 'material.name',
      floatingLabel: 'Item/Service',
      type: 'dropdown',
      label: 'material',
      valueField: 'material'
    },
    description: {
      name: 'material.description',
      floatingLabel: 'Item Description',
      type: 'string',
      disabled: true
    },
    group: {
      name: 'material.group',
      floatingLabel: 'Material Group',
      type: 'dropdown'
    },
    price: {
      name: 'material.price',
      floatingLabel: 'Price',
      type: 'string',
      required: true
    },
    uom: {
      name: 'material.uom',
      floatingLabel: 'UOM',
      type: 'string',
      required: true,
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
