const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', (e) => {
  e.preventDefault()

  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

const counters = document.querySelectorAll('.counter');
const speed = 100; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = Math.ceil(target / speed);

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target+"+";
		}
	};

	updateCount();
});

const academy = document.getElementById('academy');
academy.addEventListener("click", function(){
	alert("We are updating our courses soon, Keep checking, THANK YOU")
 })
