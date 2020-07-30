const schema = {
  type: 'array',
  items: {
    type: 'object',
    oneOf: [
      {
        properties: {
          name: {
            type: 'string',
            enum: ['guy']
          },
          age: {
            type: 'number'
          }
        },
        required: ['name', 'age'],
        additionalProperties: false
      },
      {
        properties: {
          name: {
            type: 'string',
            enum: ['liav']
          },
          grade: {
            type: 'string'
          }
        },
        required: ['name', 'grade'],
        additionalProperties: false
      }
    ],
  }
}

module.exports = schema;
