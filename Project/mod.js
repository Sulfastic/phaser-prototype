define('mod', function() {
    function showModule() {
        alert('hello from module!');
    }
 
    return {
        showModule: showModule
    };
});