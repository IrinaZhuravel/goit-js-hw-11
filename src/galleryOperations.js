const gallery = document.querySelector(".gallery");

function createMarkup ({ webformatURL, largeImageURL, tags, likes, comments }) {
    return `
    <div class="photo-card">
        <a href = "${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
        <div class="info">
        <p class="info-item">
            <b>Likes</b> ${likes}
        </p>
        <p class="info-item">
            <b>Comments</b> ${comments}
        </p>
        </div>
    </div>
    `;
}

function addMarkup(markup) {
    gallery.insertAdjacentHTML('beforeend', markup);
}

function clearGallery() {
    gallery.innerHTML = '';
}

export { gallery, createMarkup, addMarkup, clearGallery };
