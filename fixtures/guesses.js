import 'can/util/fixture/';

var store = can.fixture.store(0, function(i) {
	return {};
});

can.fixture('GET /guesses', store.findAll);

export default store;