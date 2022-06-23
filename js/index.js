const getMovies = (url) =>{
	fetch(url)
	.then(response => response.json())
	.then(response => { 
        if(response.Response === 'False'){
            alert(response.Error)
        }else{
            const test = document.getElementById("movie-container")
            test.classList.remove('hidden')
            renderPage(response)
        }
    })
	.catch(err => err);

}
const renderPage = (movie) => {
	
	const resultsCard = `
	
	<div id="poster">
                    <img src="${movie.Poster}" alt=""/>
                </div>
                <div id="movie-info">
                    <table>
                        <tr>
                            <td>Title:</td>
                            <td>${movie.Title}</td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>${movie.Year}</td>
                        </tr>
                        <tr>
                            <td>Rated:</td>
                            <td>${movie.Rated}</td>
                        </tr>
                        <tr>
                            <td>Released:</td>
                            <td>${movie.Released}</td>
                        </tr>
                        <tr>
                            <td>Runtime:</td>
                            <td>${movie.Runtime}</td>
                        </tr>
                        <tr>
                            <td>Genre:</td>
                            <td>${movie.Genre}</td>
                        </tr>
                        <tr>
                            <td>Director:</td>
                            <td>${movie.Director}</td>
                        </tr>
                        <tr>
                            <td>Writer:</td>
                            <td>${movie.Writer}</td>
                        </tr>
                        <tr>
                            <td>Actors:</td>
                            <td>${movie.Actors}</td>
                        </tr>
                        <tr>
                            <td>Plot:</td>
                            <td>${movie.Plot}</td>
                        </tr>
                        <tr>
                            <td>Language:</td>
                            <td>${movie.Language}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>${movie.Country}</td>
                        </tr>
                        <tr>
                            <td>Awards:</td>
                            <td>${movie.Awards}</td>
                        </tr>
                        <tr>
                            <td>Ratings:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Metascore: </td>
                            <td>${movie.Metascore}</td>
                        </tr>
                        <tr>
                            <td>ImdbRating:</td>
                            <td>${movie.imdbRating}</td>
                        </tr>
                        <tr>
                            <td>Imdb Votes</td>
                            <td>${movie.imdbVotes}</td>
                        </tr>
                        <tr>
                            <td>ImdbID</td>
                            <td>${movie.imdbID}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>${movie.Type}</td>
                        </tr>
                        <tr>
                            <td>DVD</td>
                            <td>${movie.DVD}</td>
                        </tr>
                        <tr>
                            <td>BoxOffice</td>
                            <td>${movie.BoxOffice}</td>
                        </tr>
                        <tr>
                            <td>Production</td>
                            <td>${movie.Production}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>${movie.Website}</td>
                        </tr>
                    </table>
                </div>
	`
    let container = document.querySelector('#movie-container')

	container.innerHTML = resultsCard
	const searchButton = document.querySelector('#search-button')
	searchButton.addEventListener('submit', (e) =>{
		e.preventDefault();
		container.innerHTML = ''
		const movieInput = document.querySelector('#search-input').value
		const year = document.querySelector("#year").value
		getMovies(movieInput,year)           
	})
}

const renderSearchForm = () =>{
    const baseUrl = 'https://omdbapi.com'
    const apiKey = '337b036b'
    let searchBy = ''
    let selectEl = document.getElementById('search-type')
	const searchForm = document.querySelector('form.search-form')
	const movieInput = document.querySelector('#search-input')
	let searchLabel = document.querySelector('form #search-label')
    document.querySelector('#search-button').disabled=true
	selectEl.addEventListener('change', (e) => {
        e.preventDefault()
       document.querySelector('#search-button').disabled=false
		const select = e.target;
		const selectedValue = select.options[select.selectedIndex].text;
		if (selectedValue === "Search by id"){
			searchForm.setAttribute("id", "search-by-id")
			movieInput.setAttribute("name", "i")
            searchBy = 'i'
			searchLabel.innerText = "Id"
		}else{
			searchForm.setAttribute("id", "search-by-title")
			movieInput.setAttribute("name", "t")
            searchBy = 't'
			searchLabel.innerText = "Title"
			}
	  });
      const searchButton = document.querySelector('#search-button')

    searchButton.addEventListener('click', (e) =>{
        e.preventDefault();
        const movieInput = document.querySelector('#search-input').value
        const year = document.querySelector("#year").value
        if(movieInput === ''){
            alert('You did not type a movie title or IMDB id. Try again!')
        }
        else{
        let fullUrl = `${baseUrl}/?${searchBy}=${movieInput}&y=${year}&apiKey=${apiKey}`
        getMovies(fullUrl)           
        }
      })

      const resetButton = document.querySelector('#search-button')

      resetButton.addEventListener('click',(e) =>{
        e.preventDefault();
        document.querySelector('form.search-form').reset()     
     })
}

const init = () =>{
	document.addEventListener('DOMContentLoaded',()=>{
		renderSearchForm()
	})
}
init()