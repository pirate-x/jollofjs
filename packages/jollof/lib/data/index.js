/**
 * Created by iyobo on 2016-10-27.
 */
const registry = require('./registry');

/**
 * These module loaders should be dumb.
 * All they should do is run files, who should registers themselves.
 *
 * @type {{registerModel, registerType, types: *, models: *}}
 */
const jollofQL = require('./jollofql');

module.exports ={
	registerModel: registry.registerModel,
	registerType: registry.registerType,
	registerService: registry.registerService,
	types: registry.types,
	models: registry.models,
	services: registry.services,
	init: registry.init,
    jollofql: jollofQL,
    parser: jollofQL.parser,
    jql: jollofQL.jql
}