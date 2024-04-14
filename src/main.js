import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchCards, API_KEY, BASE_URL } from './js/pixabay-api';

import { getMarkup } from './js/render-function';

const searchForm = document.querySelector('.form');
const imageList = document.querySelector('.image-list');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');
const cardStorage = document.querySelector('.cards');

searchForm.addEventListener('submit', onSearchFormSubmit);
loadBtn.addEventListener('click', loadBtnClick);

const instance = new SimpleLightbox('.card-item a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'caption',
});

let page = 1;
let totalPages;
let searchQuery;

async function onSearchFormSubmit(e) {
  e.preventDefault();
  page = 1;
  searchQuery = e.currentTarget.elements.search.value.trim();
  e.currentTarget.elements.search.value = '';

  if (!searchQuery) {
    return iziToast.error({
      title: '',
      message: 'The field can not be empty!!!',
      position: 'topRight',
      timeout: 3000,
    });
  }
  imageList.innerHTML = '';
  toggleLoader();

  await await fetchCards(searchQuery, page)
    .then(res => checkEndColections(res))
    .then(res => renderCards(res));
}

async function loadBtnClick(e) {
  page += 1;
  console.log(page);

  e.preventDefault();
  toggleLoader();

  return await fetchCards(searchQuery, page)
    .then(res => checkEndColections(res))
    .then(res => renderCards(res))
    .catch(error => console.log(error));
}

async function checkEndColections({ data }) {
  console.log(data);
  totalPages = Math.ceil(data.totalHits / data.hits.length);
  if (page >= totalPages && data.totalHits) {
    iziToast.info({
      position: 'topRight',
      timeout: 3000,
      message: "We're sorry, but you've reached the end of search results.",
      color: 'blue',
    });
    loadBtn.classList.add('is-hidden');
  } else {
    loadBtn.classList.remove('is-hidden');
  }
  return data;
}

function renderCards({ hits }) {
  if (!hits.length) {
    iziToast.error({
      title: 'Error',
      timeout: 3000,
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    loader.classList.add('is-hidden');
    loadBtn.classList.add('is-hidden');
    return;
  } else {
    const markup = getMarkup(hits);
    imageList.insertAdjacentHTML('beforeend', markup);

    toggleLoader();
    instance.refresh();

    const { height } = cardStorage.getBoundingClientRect();
    window.scrollBy({
      top: height,
      behavior: 'smooth',
    });
  }
}

function toggleLoader() {
  loader.classList.toggle('is-hidden');
}
