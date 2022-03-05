(() => {
	// make connections to the elements on the page
	// that we want the user to interact
	let theButtons = document.querySelectorAll("#buttonHolder img"),
	      puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
		  dropZones = document.querySelectorAll(".drop-zone"),
	      theGameBoard = document.querySelector(".puzzle-board");

	const piecePath = ["topLeft", "topRight", "bottomleft", "bottomRight"];

	function changeImageset(){
		//debugger;
		let key = this.dataset.bgref;
		// console.log(key);

		theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;

		piecePath.forEach((piece, index) => {
          puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg`;
		})
	}


	function startDrag(event){
		// console.log("started dragging");
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	function dragged0ver(event) {
		event.preventDefault();
		// console.log("dragged it over");
	}

	function dropOn(event) {
		event.preventDefault();
		// console.log("drop it here");
		let currentEl = event.dataTransfer.getData("draggedElement");

		console.log(`dropped the element:`, currentEl);
		this.appendChild(document.querySelector(`#${currentEl}`));
	}



    theButtons.forEach(button => button.addEventListener("click", changeImageset));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", dragged0ver);
		zone.addEventListener("drop", dropOn);
	});


})();
