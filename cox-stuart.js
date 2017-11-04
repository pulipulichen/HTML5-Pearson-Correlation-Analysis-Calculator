
var _test_of_trend_cox_stuart = function (_array) {
    _array = [201,206,223,235,264,237,217,188,204,182];
    _array = [206,223,235,264,237,217,188,204,182,230,223,227,242,238,207,201,225,243,215,260,228,214,215,260,225,240,239,226,260,248];
    
    var _m = parseInt(_array.length / 2, 10);
    
    var _pair_result = [];
    var _minus_count = 0;
    for (var _i = 0; _i < _m; _i++) {
        var _a = _array[_i];
        var _b = _array[(_i+_m)];
        if (_a >= _b) {
            _minus_count++;
        }
        _pair_result.push((_a < _b));
    }
    
    if (_m < 10) {
        var _p = 0;
        for (var _i = 0; _i < _minus_count; _i++) {
            _p = _p + (_i * _m) * Math.pow(0.5, _m);
        }
        
        if (_p > 0.025) {
            return false;
        }
        else {
            return true;
        }
    }
};