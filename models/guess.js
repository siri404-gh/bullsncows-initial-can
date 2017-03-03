import can from 'can';

var Guess = can.Model.extend({
	resource: '/guesses'
}, {});

export default Guess;