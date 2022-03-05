(() => {
	// make connections to the elements on the page
	// that we want the user to interact
	const theButtons = document.querySelectorAll("#buttonHolder img"),
	      theGameBoard = document.querySelector(".puzzle-board");

	function changeBgImg(){
		//debugger;
		let key = this.dataset.bgref;
		console.log(key);

		theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
	}
    theButtons.forEach(button => button.addEventListener("click", changeBgImg));

	
})();
