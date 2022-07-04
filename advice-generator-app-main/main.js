const button = document.getElementById("button");
const adviceNumber = document.getElementById("advice-number");
const adviceQuote = document.getElementById("advice-quote-block");
const url = "https://api.adviceslip.com/advice";

// GET Random Advice from https://api.adviceslip.com
function getRandomAdvice() {
	axios({
		method: "get",
		url: "https://api.adviceslip.com/advice",
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
