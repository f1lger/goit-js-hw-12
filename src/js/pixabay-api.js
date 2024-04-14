import axios from 'axios';

export const API_KEY = '34205532-dcd3b12e75460bc879dbf1602';
export const BASE_URL = 'https://pixabay.com/api/?';

export async function fetchCards(str, page) {
  const SEARCH_PARAMS = {
    params: {
      key: API_KEY,
      q: str,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  };


  return await axios
    .get(`${BASE_URL}`, SEARCH_PARAMS)
    .then(res => res)
    .catch(error => console.log(error.status));
}
