const Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
const schema = require('./schema');
const data = require('./data');

var validate = ajv.compile(schema);
var valid = validate(data);
if (!valid) console.log(validate.errors);
