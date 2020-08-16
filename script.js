const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// function test() {
// 	VoiceRSS.speech({
// 		key: '99e221e2aa6c4d5dafd60023f01266ec',
// 		src: 'Hello, world!',
// 		hl: 'en-us',
// 		v: 'Linda',
// 		r: 0, 
// 		c: 'mp3',
// 		f: '44khz_16bit_stereo',
// 		ssml: false
// 	});
// }

// test();

// Get Jokes from Joke API
async function getJokes() {
	let joke = '';
	const apiURL = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=religious,political,racist,sexist';
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		if (data.setup) {
			joke = `${data.setup} ... ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		console.log(joke);
	} catch (error) {
		console.log('error', error);
	}
}

getJokes();