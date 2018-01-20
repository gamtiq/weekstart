'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var api = require('./api.js');
var langRegionMap = _interopDefault(require('./fullLangRegionMap.js'));
var regionDayMap = _interopDefault(require('./regionDayMap.js'));

function getWeekStartByRegion$1(regionCode) {
    return api.getWeekStartByRegion(regionCode, regionDayMap);
}

function getWeekStartByLocale$1(locale) {
    return api.getWeekStartByLocale(locale, langRegionMap, regionDayMap);
}

exports.getWeekStartByRegion = getWeekStartByRegion$1;
exports.getWeekStartByLocale = getWeekStartByLocale$1;
//# sourceMappingURL=full.js.map
