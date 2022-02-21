import axios from 'axios';

const API_KEY = '24451823-1c74d237c0aee111026f7cb82';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchString, page = 1) {
  const response = await axios.get(
    `${axios.defaults.baseURL}?q=${searchString}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal`
  );
  return response;
}
