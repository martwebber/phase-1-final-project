const getMovies = () =>{
fetch('http://localhost:3000/movies/?i=tt3896198')
	.then(response => response.json())
	.then(response => renderPage(response))
	.catch(err => console.error(err));

}

const renderPage = (movie) => {
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
	const resultsCard = `
	
	<div id="poster">
                    <img src="${movie[0].Poster}" alt="">
                </div>
                <div id="movie-info">
                    <table>
                        <tr>
                            <td>Title:</td>
                            <td>${movie[0].Title}</td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>${movie[0].Year}</td>
                        </tr>
                        <tr>
                            <td>Rated:</td>
                            <td>${movie[0].Rated}</td>
                        </tr>
                        <tr>
                            <td>Released:</td>
                            <td>${movie[0].Released}</td>
                        </tr>
                        <tr>
                            <td>Runtime:</td>
                            <td>${movie[0].Runtime}</td>
                        </tr>
                        <tr>
                            <td>Genre:</td>
                            <td>${movie[0].Genre}</td>
                        </tr>
                        <tr>
                            <td>Director:</td>
                            <td>${movie[0].Director}</td>
                        </tr>
                        <tr>
                            <td>Writer:</td>
                            <td>${movie[0].Writer}</td>
                        </tr>
                        <tr>
                            <td>Actors:</td>
                            <td>${movie[0].Actors}</td>
                        </tr>
                        <tr>
                            <td>Plot:</td>
                            <td>${movie[0].Plot}</td>
                        </tr>
                        <tr>
                            <td>Language:</td>
                            <td>${movie[0].Language}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>${movie[0].Country}</td>
                        </tr>
                        <tr>
                            <td>Awards:</td>
                            <td>${movie[0].Awards}</td>
                        </tr>
                        <tr>
                            <td>Ratings:</td>
                            <td>United States</td>
                        </tr>
                        <tr>
                            <td>Metascore: </td>
                            <td>${movie[0].Metascore}</td>
                        </tr>
                        <tr>
                            <td>ImdbRating:</td>
                            <td>${movie[0].imdbRating}</td>
                        </tr>
                        <tr>
                            <td>Imdb Votes</td>
                            <td>${movie[0].imdbVotes}</td>
                        </tr>
                        <tr>
                            <td>ImdbID</td>
                            <td>${movie[0].imdbID}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>${movie[0].Type}</td>
                        </tr>
                        <tr>
                            <td>DVD</td>
                            <td>${movie[0].DVD}</td>
                        </tr>
                        <tr>
                            <td>BoxOffice</td>
                            <td>${movie[0].BoxOffice}</td>
                        </tr>
                        <tr>
                            <td>Production</td>
                            <td>${movie[0].Production}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>${movie[0].Website}</td>
                        </tr>
                    </table>
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
	  container.innerHTML = resultsCard
}

const init = () =>{
	document.addEventListener('DOMContentLoaded',()=>{
		//renderPage()
		getMovies()
	})
}
init()