var validator = require('tv4');

module.exports.validate = function(schema, json){

	result = validator.validateResult(json, schema);

	if(result.valid){
		return result;
	}else{
		delete result['error']['stack'];
		return result;
	}
}