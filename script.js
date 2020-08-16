const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function test() {
	VoiceRSS.speech({
		key: '99e221e2aa6c4d5dafd60023f01266ec',
		src: 'Hello, world!',
		hl: 'en-us',
		v: 'Linda',
		r: 0, 
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false
	});
}

test();