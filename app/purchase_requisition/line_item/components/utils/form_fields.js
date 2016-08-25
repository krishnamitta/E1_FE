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
    type: 'string',
    fieldType: 'decimal',
    required: true
  },
  total_price: {
    name: 'totalPrice',
    floatingLabel: 'Total Value',
    type: 'string',
    disabled: true
  },
  currency: {
    name: 'currency',
    floatingLabel: 'Currency',
    type: 'dropdown',
    required: true
  },
  quantity: {
    name: 'quantity',
    floatingLabel: 'Quantity',
    type: 'string',
    fieldType: 'number',
    required: true
  },
  internal_note: {
    name: 'internalNote',
    hintText: 'Internal Note',
    type: 'string',
    multiLine: true
  },
  external_note: {
    name: 'externalNote',
    hintText: 'External Note',
    type: 'string',
    multiLine: true
  },
  expected_deliver_date: {
    name: 'expected_delivery_date',
    floatingLabel: 'Expected Delivery Date',
    type: 'date',
    required: true
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
  vendor_name: {
    name: 'vendor.name',
    floatingLabel: 'Vendor Name',
    type: 'dropdown',
    dataSource: [{ code: '1', description: 'Vendor 1' }, { code: '2', description: 'Vendor 2' }],
    required: true
  },
  vendor_material_number: {
    name: 'vendor.material_number',
    floatingLabel: 'Vendor Material Number',
    type: 'string'
  },
  material_exists: {
    name: 'material_exists'
  },
  material_name: {
    name: 'material.name',
    floatingLabel: 'Item/Service',
    type: 'dropdown',
    label: 'material',
    valueField: 'material'
  },
  material_description: {
    name: 'material.description',
    floatingLabel: 'Item Description',
    type: 'string',
    disabled: true
  },
  material_group: {
    name: 'material.group',
    floatingLabel: 'Material Group',
    type: 'dropdown'
  },
  material_uom: {
    name: 'material.uom',
    floatingLabel: 'UOM',
    type: 'string',
    required: true,
    disabled: true
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
