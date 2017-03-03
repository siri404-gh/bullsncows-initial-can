import $ from 'jquery';
import template from './index.stache!';
import Guess from 'models/guess';
import 'components/gameBoard/';
import 'fixtures/guesses';

$('body').html(template({
	guesses: Guess.findAll()
}));
