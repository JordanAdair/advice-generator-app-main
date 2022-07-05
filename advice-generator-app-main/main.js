const button = document.getElementById("button");
const adviceNumber = document.getElementById("advice-number");
const adviceQuote = document.getElementById("advice-quote-block");

// GET Random Advice from https://api.adviceslip.com
function getRandomAdvice() {
	const randomNum = Math.floor(Math.random() * 100) + 1;

	axios({
		method: "get",
		url: `https://api.adviceslip.com/advice/${randomNum}`,
	})
		.then((res) => {
			// Update the DOM with newly fetched info
			adviceNumber.textContent = `Advice #${res.data.slip.id}`;
			adviceQuote.textContent = `“${res.data.slip.advice}”`;
			console.log(res.data.slip.id);
		})
		.catch((error) => console.log(error));
}

// Load with initial data
getRandomAdvice();

button.addEventListener("click", getRandomAdvice);
