// window.addEventListener('load', function(){


// 	let faq = document.querySelector('.item');

// 	faq.addEventListener('click', function(e){
// 		if(e.target.classList.contains('item__true')){
//             toogleItem(e.target.closest(".item__column"), true);

// 		} else if (e.target.classList.contains('item__false')) {
//             toogleItem(e.target.closest(".item__column"), false);
//         }
// 	});

// 	function toogleItem(ask, bool){
// 		// ask.nextElementSibling
// 		let answer = ask.parentNode.querySelector('.item__answer');
		
// 		if(answer.classList.contains('open')){

// 			let animate = answer.animate([
// 				{ height: answer.clientHeight + "px"},
// 				{ height: 0},
// 			], {duration: 500 });

// 			animate.addEventListener("finish", () => {
// 				answer.classList.remove("open");
// 			});
// 		}
// 		else{
// 			answer.classList.add("open")

// 			answer.animate([
// 				{ height: 0},
// 				{ height: answer.clientHeight + "px"},
// 			], {duration: 500 });
//             if ((bool == false || bool == true) && answer.id === "false") {
//                 answer.style.background = "red";
//             } else if ((bool == false || bool == true) && answer.id === "true"){
//                 answer.style.background = "green";
//             }
// 		}
// 	}


// });
const startButton = document.querySelector(".game__controls_start")
const nextButton = document.querySelector(".game__controls_next")
const questionContainerElement = document.querySelector(".game__body")

const questionElement = document.querySelector('.game__question')
const answerButtons = document.querySelector('.answer')

let shuffledQuestions = [];
let currentQuestionIndex = 0


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
	currentQuestionIndex++
	setNextQuestion()
})

function startGame() {
	console.log('started');
	questionContainerElement.classList.remove("hide")
	nextButton.classList.remove('hide')
	shuffledQuestions = questions.sort(() => Math.random() - 0.5)
	currentQuestionIndex = 0;
	setNextQuestion()

}

function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add("answer__btn")
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener("click", selectAnswer)
		answerButtons.appendChild(button)
	})
}

function resetState() {
	startButton.classList.add("hide")
	nextButton.classList.add("hide")
	clearStatusClass(document.querySelector(".game__inner"))
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild)
	}
}

function selectAnswer(e) {
	const correct = e.target.dataset.correct
	setStatusClass(document.querySelector(".game__inner"), correct)
	Array.from(answerButtons.children).forEach(button => setStatusClass(button, button.dataset.correct))
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide')
	} else {
		startButton.innerText = "Заново"
		startButton.classList.remove('hide')
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add("correct")
	} else {
		element.classList.add("wrong")
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


const questions = [
	{ 
		question: 'Рэй Брэдбэри много читал Достоевского', 
		answers: [
			{ text: 'Правда', correct: true },
			{ text: 'Неправда', correct: false }
		]
	},
	{ 
		question: 'Какое своё произведение Рэй Брэдбери считал лучшим?', 
		answers: [
			{ text: 'Марсианские хроники', correct: true },
			{ text: '451 градус по Фаренгейту', correct: false },
			{ text: 'И грянул гром', correct: false },
			{ text: 'Вельд', correct: false }
		]
	},
	{ 
		question: 'Еще до окончания школы Брэдбери понял, что хочет стать писателем. Тогда он взял себе в привычку каждый день писать не менее тысячи слов.', 
		answers: [
			{ text: 'Правда', correct: true },
			{ text: 'Неправда', correct: false }
		]
	},
	{ 
		question: 'Рэй Брэдбэри спал 2 часа в сутки', 
		answers: [
			{ text: 'Правда', correct: false },
			{ text: 'Неправда', correct: true }
		]
	},
	{ 
		question: 'Брэдбери хотел дожить до ста лет, о чем не раз подчеркивал в интервью. В каком возрасте умер писатель?', 
		answers: [
			{ text: '100', correct: false },
			{ text: '82', correct: false },
			{ text: '91', correct: true },
			{ text: '105', correct: false },
		]
	},
	{ 
		question: 'Рэй Брэдбери всю жизнь боялся автомобилей и никогда не садился за руль.', 
		answers: [
			{ text: 'Правда', correct: true },
			{ text: 'Неправда', correct: false }
		]
	},
	{ 
		question: 'Кем работал Брэдбери до того, как его творчество обрело успех?', 
		answers: [
			{ text: 'Водитель', correct: false },
			{ text: 'Разносчик газет', correct: true },
			{ text: 'Художник', correct: false },
			{ text: 'Повар', correct: false }
		]
	},
	{ 
		question: 'Брэдбери решил стать писателем после знакомства с фокусником', 
		answers: [
			{ text: 'Правда', correct: true },
			{ text: 'Неправда', correct: false }
		]
	},
]