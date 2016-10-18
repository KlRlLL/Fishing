var Elements = (function (){
'use strict'

var _elemet = [{
    input: ['fishing-rod.png','worm.png'],
    output:'fish.png'
},{
    input: ['fishing-rod.png','fish.png'],
    output:'shark.png'
},{
    input: ['worm.png','fish.png'],
    output:'fish-eaten.png'
},
    
];
    var _thing = ['fishing-rod.png', 'worm.png'];
    
    function Thing(){
        return _thing;
    }
    
    function setThing(value){
        _thing.push(value);
    }
    
    function Creator (worcsThing) {
		var answer = '';
		for (var i = 0; i < _elemet.length; i++) {

			var Massive = _elemet[i].input.slice();
			var amount = 0;
			
			for (var j = 0; j < worcsThing.length; j++) {
				
				var index = Massive.indexOf(worcsThing[j]);
				if ( index >= 0 ) {
					Massive.splice(index, 1);
					amount++;
				}
			}

			if (Massive.length === 0 && amount === worcsThing.length) {
				answer = _elemet[i].output;
			}
		}
		return (answer.length !== 0) ? answer : 0;
	}

	return {
		Thing : Thing,
		setThing : setThing,
		Creator : Creator
	};

    
})();