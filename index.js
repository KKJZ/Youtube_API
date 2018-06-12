const apiKey = 'AIzaSyBtLihEEX2iv7wtWM8yKRrzsLuadJtL5NA'
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromApi(searchTerm) {
	const settings = {
		method: 'GET',
		url: YOUTUBE_SEARCH_URL,
		key: apiKey,
		data: {
			'maxResults': '5',
			'part': 'snippet',
			'q' : searchTerm,
			'type': ''
		}); 
	$.ajax(settings);
}


function renderResult(item) {
	console.log(item);
}

function handleSubmit() {
	$('.js-search-form').submit(event => {
		event.preventDefault;
		const queryTarget = $(this).find('js-query');
		const query = queryTarget.val();
		console.log(queryTarget);
		getDataFromApi(query);

	})
}

handleSubmit();
