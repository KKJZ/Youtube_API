const apiKey = 'AIzaSyBtLihEEX2iv7wtWM8yKRrzsLuadJtL5NA'
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
console.log(apiKey);
console.log(YOUTUBE_SEARCH_URL);

//ajax setup
function getDataFromApi(searchTerm, callback) {
	const settings = {
		url: YOUTUBE_SEARCH_URL,
		data:{
			part: 'snippet',
			key: apiKey,
			q: searchTerm,
			maxResults: 5,
			type: 'video',
			dataType:'json',
			type: 'GET',
			success: callback,
			}
		};
	$.ajax(settings);
}

//handle submit
function handleSubmit () {
	$('.js-search-form').on('submit', event => {
		event.preventDefault();
		console.log('Search');
		const queryTarget = $('event.currentTarget').find('js-query');
		const query = queryTarget.val();
		getDataFromApi(query, displayYoutubeSearchData);
	});
}


//access items in the obj for api map them to renderResult
function displayYoutubeSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

//render values from displayYoutubeSearchData
function renderResult(result) {
  return `
    <div>
      <h2>
      videos here!!
      </h2>
    </div>
  `;
}

handleSubmit();