define('show', ['mod'], function(mod) {
    function useModule() {
        mod.showModule(); // use dependent module
    }
 
    return {
        useModule: useModule
    };
});