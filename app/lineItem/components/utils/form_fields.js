export default {
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
    floatingLabel: 'Internal Note',
    hintText: 'Internal Note',
    type: 'string',
    multiLine: true
  },
  external_note: {
    name: 'externalNote',
    hintText: 'External Note',
    floatingLabel: 'External Note',
    type: 'string',
    multiLine: true,
    maxValueLength: 255
  },
  expected_delivery_date: {
    name: 'deliveryDate',
    floatingLabel: 'Expected Delivery Date',
    type: 'date',
    required: true
  },
  vendor_name: {
    name: 'desVendor',
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
  material_not_found: {
    name: 'material_not_found',
    label: 'Item not found?',
    type: 'checkbox',
    labelPosition: 'right',
  },
  material_name: {
    name: 'material',
    floatingLabel: 'Item/Service',
    type: 'dropdown',
    label: 'materialdesc',
    valueField: 'material',
    customDisplay: true
  },
  material_description: {
    name: 'shortText',
    floatingLabel: 'Item Description',
    type: 'string'
  },
  material_group: {
    name: 'matGroup',
    floatingLabel: 'Material Group',
    type: 'dropdown'
  },
  material_uom: {
    name: 'unit',
    floatingLabel: 'UOM',
    type: 'string',
    disabled: true
  },
  accounting: {
    distribution: {
      name: 'reqToAccount.distPercentage',
      floatingLabel: 'Account Distribution',
      type: 'dropdown',
      dataSource: [{ code: 'percentage', description: 'Percentage' }, { code: 'quantity', description: 'Quantity' }]
    },
    business_unit: {
      name: 'reqToAccount.costCenter',
      floatingLabel: 'Business Unit',
      type: 'dropdown',
      dataSource: [{ code: 'p2p', description: 'G1 P2P' }],
      required: true
    },
    assignment_category: {
      name: 'acctAssCat',
      floatingLabel: 'Account Assignment Category',
      type: 'dropdown',
      dataSource: [{ code: 'with_goods_receipt', description: 'With Goods Receipt' },
      { code: 'without_goods_receipt', description: 'Without Goods Receipt' }]
    }
  }
}
