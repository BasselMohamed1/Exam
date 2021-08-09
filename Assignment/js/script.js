var helloSpeaker = {
	speakword : "Hello",
};

(function () {
	helloSpeaker.speak = function (username){
		return (helloSpeaker.speakword+" "+username);
	}
})();

var byeSpeaker = {
	speakword : "Hello",
};

(function () {
	byeSpeaker.speak = function (username){
		return (byeSpeaker.speakword+" "+username);
	}
})();
(function () {
	var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
		} else {
			console.log(helloSpeaker.speak(name));
		
		}
	}
})();
