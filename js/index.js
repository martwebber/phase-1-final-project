const getMovies = () =>{
fetch('http://localhost:3000/movies/?i=tt3896198')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

const renderPage = () => {
	const searchByIdForm = `
	
	<div class="row">
		<div class="col-lg-12">
			<div class="bs-component">
				<form class="search-form" id="search-by-id" name="search-type" onsubmit="return false;">
					<label class="control-label" for="id">Id:</label>
					<input type="text" id="id" name="id" class="input-small">
					<label class="control-label" for="y">Year:</label>
					<input type="text" id="year" name="year" class="input-small" style="width: 100px;">
					<button id="search-button" type="button" class="btn-sm btn-primary">Search</button>
					<button id="search-reset" type="reset" class="btn-sm">Reset</button>
				</form>
			</div>
		</div>
	</div>
	`
	const searchByTitleForm = `
	
	<div class="row">
		<div class="col-lg-12">
			<div class="bs-component">
				<form class="search-form" id="search-by-id" name="search-type" onsubmit="return false;">
					<label class="control-label" for="title">Title:</label>
					<input type="text" id="title" name="title" class="input-small">
					<label class="control-label" for="year">Year:</label>
					<input type="text" id="year" name="year" class="input-small" style="width: 100px;">
					<button id="search-button" type="button" class="btn-sm btn-primary">Search</button>
					<button id="search-reset" type="reset" class="btn-sm">Reset</button>
				</form>
			</div>
		</div>
	</div>
	`
const container = document.querySelector('#movie-container')

	let selectEl = document.getElementById('search-type')

	selectEl.addEventListener(`change`, (e) => {
		const select = e.target;
		const selectedValue = select.options[select.selectedIndex].text;
		if (selectedValue === "Search by id"){
			container.innerHTML = searchByIdForm
			document.querySelector('#container').appendChild(container)
		}else{
			container.innerHTML = searchByTitleForm           
			document.querySelector('#container').appendChild(container)		}
	  });

}

const init = () =>{
	document.addEventListener('DOMContentLoaded',()=>{
		renderPage()
	})
}
init()