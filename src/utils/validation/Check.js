export default class Check {

    IsNullOrUndefined(val) {
        return val == null;
    }

    IsNumber(val) {
        return !this.IsNullOrUndefined(val) && (val instanceof Number || typeof val === 'number');
    }

    IsText(val) {
        return !this.IsNullOrUndefined(val) && (val instanceof String || typeof val === 'string');
    }

    IsNullOrWhiteSpace(val) {
        return this.IsNullOrUndefined(val) || !(/\S/.test(val));
    }

    IsArray(obj){
        return Array.isArray(obj);
    }

    IsFunction(obj){
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    IsObject(obj){
        return obj !== null && typeof obj === 'object';
    }
}