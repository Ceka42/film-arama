import { elements } from "../base";

export const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

export const closeDetails = () => {
    elements.movieDetailsContainer.className = 'd-none';
}

export const displayMovie = movie => {
    var html = '<div class="row">';

    var genres = "";

    movie.genres.forEach(genre =>{
        genres += `<span class="bg-warning ms-1 p-1 rounded">${genre.name}</span>`;
    });

    html += `
        <div class="col-md-4">
        <img class="rounded img-fluid" src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}" onerror="this.src='https://placeimg.com/92/138/movies';" alt="${movie.title}">
        </div>
        <div class="col-md-8">
            <div>
                <h5>${movie.original_title}</h5>
                <p>${movie.overview}</p>
                <p><small class="bg-warning rounded p-1">${movie.vote_average}</small></p>
                <hr>
                ${genres}
            </div>
        </div>
    `;

    html += '</div>';

    elements.movieDetailsContainer.className = 'd-block';
    elements.movieDetails.innerHTML = html;
};