let brHelpers = (function() {
    return {
        get: function(selector, scope) {
            scope = scope ? scope : document;
            return scope.querySelector(selector)
        },
        getAll: function(selector, scope) {
            scope = scope ? scope : document;
            return scope.querySelectorAll(selector)
        }
    }
})();