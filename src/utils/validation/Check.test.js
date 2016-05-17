import Check from './Check';

describe('Check', ()=>{

    var _check = new Check();
    console.log(Check);
    describe('IsNullOrUndefined', ()=>{

    });
    describe('IsNumber', ()=>{

    });
    describe('IsText', ()=>{

    });
    describe('IsArray', ()=>{
        it('should return true for an array', ()=>{
            expect(_check.IsArray([])).toBeTrue();
        });
        it('should return false if not an array', ()=>{
            let afunction =function(){};
            expect(_check.IsArray(afunction)).toBeFalse();
            expect(_check.IsArray(null)).toBeFalse();
            expect(_check.IsArray('')).toBeFalse();
            expect(_check.IsArray(0)).toBeFalse();
            expect(_check.IsArray('a')).toBeFalse();
            expect(_check.IsArray(undefined)).toBeFalse();
            expect(_check.IsArray({})).toBeFalse();            
        });
    });
    describe('IsFunction', ()=>{
        it('should return true for a function', ()=>{
            let afunction =function(){};
            expect(_check.IsFunction(afunction)).toBeTrue();
        });
        it('should return false if not a function', ()=>{
            expect(_check.IsFunction([])).toBeFalse();
            expect(_check.IsFunction(null)).toBeFalse();
            expect(_check.IsFunction('')).toBeFalse();
            expect(_check.IsFunction(0)).toBeFalse();
            expect(_check.IsFunction('a')).toBeFalse();
            expect(_check.IsFunction(undefined)).toBeFalse();
            expect(_check.IsFunction({})).toBeFalse();            
        });
    });
    describe('IsNullOrWhiteSpace', ()=>{
        it('should return true if is Null', ()=>{
            expect(_check.IsNullOrWhiteSpace(null)).toBeTrue();
        });
        it('should return true if undefined', ()=>{
            expect(_check.IsNullOrWhiteSpace(undefined)).toBeTrue();
        });
        it('should return true if is whitepsace', ()=>{
            expect(_check.IsNullOrWhiteSpace('       ')).toBeTrue();
        });
        it('should return true if is empty string', ()=>{
            expect(_check.IsNullOrWhiteSpace('')).toBeTrue();
        });
        it('should return true if an empty array', ()=>{
            expect(_check.IsNullOrWhiteSpace([])).toBeTrue();
        });

        
        it('should return false if contains character', ()=>{
            expect(_check.IsNullOrWhiteSpace('      a')).toBeFalse();
        });        
        it('should return false if contains number', ()=>{
            expect(_check.IsNullOrWhiteSpace(1)).toBeFalse();
        });        
        it('should return false if an object', ()=>{
            expect(_check.IsNullOrWhiteSpace({})).toBeFalse();
        });
    });

    describe('IsObject', ()=>{
        it('should return false for a function', ()=>{
            let afunction = function(){};
            expect(_check.IsObject(afunction)).toBeFalse();
        });
        it('should return false for null', ()=>{
            expect(_check.IsObject(null)).toBeFalse();
        }); 
        it('should return false for number', ()=>{
            expect(_check.IsObject(1)).toBeFalse();
        }); 
        it('should return false for string', ()=>{
            expect(_check.IsObject('abc')).toBeFalse();
        });    
        fit('should return true for an object', ()=>{
            console.log(_check.IsObject);
            var result = _check.IsObject({});
            console.log(result);
            expect(result).toBeTrue();
        });
    });
});