const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	}
}

const getMovies = (movie,year) =>{
	fetch(`https://omdbapi.com/?i=${movie}&y=${year}&apikey=337b036b`)
	.then(response => response.json())
	.then(response => renderPage(response))
	.catch(err => console.log(err));

}
const renderPage = (movie) => {
	
	const resultsCard = `
	
	<div id="poster">
                    <img src="${movie[0].Poster}" alt=""/>
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
let container = document.querySelector('#movie-container')

	let selectEl = document.getElementById('search-type')
	const formSection = document.getElementById('#form-section') 
	const searchForm = document.querySelector('form.search-form')
	const movieInput = document.querySelector('#search-input')
	let year = document.querySelector("#year")
	let searchLabel = document.querySelector('form #search-label')
	selectEl.addEventListener(`change`, (e) => {
		const select = e.target;
		const selectedValue = select.options[select.selectedIndex].text;
		if (selectedValue === "Search by id"){
			searchForm.setAttribute("id", "search-by-id")
			movieInput.setAttribute("name", "i")
			//year.setAttribute("name", "y")
			searchLabel.innerText = "Id"
		}else{
			searchForm.setAttribute("id", "search-by-title")
			movieInput.setAttribute("name", "t")
			searchLabel.innerText = "Title"

			}
	  });
	  container.innerHTML = resultsCard

	const searchButton = document.querySelector('#search-button')
	//console.log(searchButton)
	searchButton.addEventListener('click', (e) =>{
		e.preventDefault();
		container.innerHTML = ''
		const movieInput = document.querySelector('#search-input').value
		const year = document.querySelector("#year").value
		console.log(movieInput,year)
		getMovies(movieInput,year)
	})
}

const init = () =>{
	document.addEventListener('DOMContentLoaded',()=>{
		getMovies()
		//renderPage()

	})
}
init()