const apiKey = 'AIzaSyBtLihEEX2iv7wtWM8yKRrzsLuadJtL5NA'
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

//ajax setup
function getDataFromApi(searchTerm, callback) {
	const settings = {
		url: YOUTUBE_SEARCH_URL,
		type: 'GET',
		dataType:'json',
		data: {
			part: 'snippet',
			key: apiKey,
			q: searchTerm,
			type: 'video'
			},
		success: callback
		};
	$.ajax(settings);
}

//handle submit
function handleSubmit () {
	$('.js-search-form').on('submit', event => {
		event.preventDefault();
		console.log('Search');
		const queryTarget = $('input');
		const query = queryTarget.val();
		$('input').val('');
		getDataFromApi(query, displayYoutubeSearchData);
	});
}


//access items in the obj for api map them to renderResult
function displayYoutubeSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

//render values from displayYoutubeSearchData display thumbnail of video
function renderResult(result) {
	console.log(result);
  return `
    <div class='results'>
      <h3>
      ${result.snippet.title}
      </h3>
      <a href="http://www.youtube.com/watch?v=${result.id.videoId}" target='_blank'>
      <img src="${result.snippet.thumbnails.medium.url}" alt="Thumbnail">
      </a>
      <hr>
    </div>
  `;
}


handleSubmit();