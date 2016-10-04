// var requirejs = require('requirejs');

// requirejs.config({
// 	nodeRequire: require
// });

require([
	'Environment',
    'Player',
    'Controls'
	], function (Environment, Player, Controls) {
    
	
    var env = new Environment(Phaser);
    env.start();
});

