const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disabled/Enabled button
function toggleButton() {
	button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
	VoiceRSS.speech({
		key: '99e221e2aa6c4d5dafd60023f01266ec',
		src: joke,
		hl: 'en-us',
		v: 'Linda',
		r: 0, 
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false
	});
}

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
		// Text-to-Speech
		tellMe(joke);
		// Disable Button
		toggleButton();
	} catch (error) {
		console.log('error', error);
	}
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
