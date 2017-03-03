import can from 'can';
import './gameBoard.less!';
import template from './gameBoard.stache!';
import VM from './viewmodel';

var board = can.Component.extend({
	tag: 'game-board',
	template: template,
	viewModel: VM,
	events: {
		inserted:function(el,ev) {
			el.find('input#guess1').focus();
		},
		//TODO: This event would only need
		//to be concerned about setting focus
		'input keyup': function(el,ev) {
			//console.log(el.next('input'));
			if(ev.keyCode>=65 && ev.keyCode<=90) {
				if(el.next('input').length>0) {
					el.next('input').focus();
				}
				else {
					var l1=el.prev('input').prev('input').prev('input').val(),
					l2=el.prev('input').prev('input').val(),
					l3=el.prev('input').val(),
					l4=el.val();

					if(l1 && l2 && l3 && l4) {
						this.viewModel.evaluate(l1,l2,l3,l4);
						el.parent().find('input').val('');
						el.parent().find('input')[0].focus();
					}
				}
			}
			else {
					el.val('');
			}
		}
	}
});

export default board;