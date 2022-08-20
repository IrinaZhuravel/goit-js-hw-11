import { getGallery } from "./getGallery";
import { gallery, createMarkup, addMarkup, clearGallery } from "./galleryOperations";
import { gallerySimpleLightbox } from "../index";
import Notiflix from "notiflix";

const loadMoreBtn = document.querySelector('.load-more');
export default async function onLoadMoreButtonClick() {
    const galleryData = await getGallery();

    if (galleryData.hits.length === 0) {
      loadMoreBtn.classList.add('visually-hidden');
      Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
      return;
    }
   
    const markupArray = galleryData.hits.map(createMarkup);
    addMarkup(markupArray.join(''));
    const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
    });
    gallerySimpleLightbox.refresh();
}

