export const BASE_URL = 'https://pixabay.com/api/',
    API_KEY = '36286221-b78f60100fc91add48c9ae52d',
    SEARCH_PARAMS = new URLSearchParams({
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '12'
    })