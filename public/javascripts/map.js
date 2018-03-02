let map;
let markers = [];

function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
    minZoom: 2
  });

  initTweets();
}

function addMarker(map, tweet) {
  const marker = new google.maps.Marker({
    position: { 
      lat: tweet.lat,
      lng: tweet.lng
    },
    map,
    zIndex: 99 + markers.length,
    animation: google.maps.Animation.DROP,
    icon: tweet.img,
    title: tweet.user
  });

  markers.push(marker);
}

function clean() {
  document.querySelector('#tweets').innerHTML = '';

  markers.forEach((marker) => marker.setMap(null));
  markers = [];
}

function renderTweet(tweet) {
  const container = document.querySelector('#tweets');
  const tweetContainer = document.createElement('div');
  
  tweetContainer.classList.add('card');
  tweetContainer.innerHTML = `
    <div class="card-body">
      <img class="card-img-left" src="${tweet.img}">
      <h5 class="card-title">${tweet.user}</h5>
      <p class="card-text">${tweet.text}</p>
    </div>
    `;

  $(container).prepend(tweetContainer);
}

function loadHashtag(hashtag) {
  // We dont need to wait until service responds, just start receiving twitter events.
  fetch(`${window.location.href}?hashtag=${hashtag}`, { method: 'put'});

  // -----------------------------
  // Start coding here!
  // Connect to firebase, retrieve last 5 tweets and listen to new additions
  // Once tweet has been received, call 'renderTweet' and 'addMarker'
  // -----------------------------
  
}

function logout() {
  // -----------------------------
  // Start coding here!
  // Logout and redirect to /
  // -----------------------------

}

function initTweets() {
  const logout = document.querySelector('#logout');
  const input = document.querySelector('input');

  logout.addEventListener('click', () => {
    logout();
  });

  input.addEventListener('keyup', (event) => {
    // -----------------------------
    // Start coding here!
    // Load tweets on user input
    // -----------------------------
  });

  // -----------------------------
  // Start coding here!
  // Redirect to / if user is not logged in
  // -----------------------------
  
};
