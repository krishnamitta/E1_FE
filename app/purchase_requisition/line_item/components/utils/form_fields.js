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
    type: 'string',
    maxValueLength: 18
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
    required: true,
    expression: /^\d{1,11}(\.\d{0,2})?$/
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
    fieldType: 'decimal',
    required: true,
    expression: /^\d{1,13}(\.\d{0,3})?$/
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
    multiLine: true,
    maxValueLength: 255
  },
  expected_deliver_date: {
    name: 'expected_delivery_date',
    floatingLabel: 'Expected Delivery Date',
    type: 'date',
    required: true
  },
  ship_to_address: {
    street: {
      name: 'shipToAddress_street',
      floatingLabel: 'Street',
      type: 'string',
      disabled: true
    },
    city: {
      name: 'shipToAddress_city',
      floatingLabel: 'City',
      type: 'string',
      disabled: true
    },
    zip: {
      name: 'shipToAddress_postalCode',
      floatingLabel: 'Postal Code',
      type: 'string',
      disabled: true
    },
    country: {
      name: 'shipToAddress_country',
      floatingLabel: 'Country',
      type: 'string',
      disabled: true
    },
    state: {
      name: 'shipToAddress_region',
      floatingLabel: 'State',
      type: 'string',
      disabled: true
    }
  },
  vendor_name: {
    name: 'vendor_name',
    floatingLabel: 'Vendor Name',
    type: 'dropdown',
    dataSource: [{ code: '1', description: 'Vendor 1' }, { code: '2', description: 'Vendor 2' }],
    required: true
  },
  vendor_material_number: {
    name: 'vendor_material_number',
    floatingLabel: 'Vendor Material Number',
    type: 'string',
    maxValueLength: 35
  },
  material_exists: {
    name: 'material_exists'
  },
  material_name: {
    name: 'material_name',
    floatingLabel: 'Item/Service',
    type: 'dropdown',
    label: 'materialdesc',
    valueField: 'material',
    customDisplay: true
  },
  material_description: {
    name: 'material_description',
    floatingLabel: 'Item Description',
    type: 'string',
    disabled: true
  },
  material_group: {
    name: 'material_group',
    floatingLabel: 'Material Group',
    type: 'dropdown'
  },
  material_uom: {
    name: 'material_uom',
    floatingLabel: 'UOM',
    type: 'string',
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
