import { elements } from "../base";

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.movieList.innerHTML = '';
}

export const displayResults = (keyword, data) => {
    data.results.forEach(movie => {
        const html = `
        <div class="d-flex my-2">
            <div class="flex-shrink-0">
                <img class="rounded" src="https://www.themoviedb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://placeimg.com/92/138/movies';" alt="${movie.title}">
            </div>
            <div class="flex-grow-1 ms-3">
                <h5><span class="bg-warning px-1 rounded ">${movie.vote_average}</span> <a href="#${movie.id}">${movie.title}</a></h5>
                <p>${movie.overview}</p>
            </div>
        </div>
        `;


        
        elements.movieListHeader.innerHTML = `${keyword} için ${data.total_results} sonuç bulundu`;
        elements.movieListContainer.className = 'd-block';
        elements.movieList.insertAdjacentHTML('beforeend', html);

        setTimeout(() => 
            {elements.movieListHeader.innerHTML = ""}, 5000)

    });
} 