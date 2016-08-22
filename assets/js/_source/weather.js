var weather_items = $('.weather');
var weather = '';
var gibberish = ['█', '▓', '▒', '░', '█', '▓', '▒', '░', '█', '▓', '▒', '░', '<', '>', '/'];

var initWeather = function() {
  if (!weather_items.length) return;

  createFakeWeather();

  fetchWeather();

  window.weatherInterval = setInterval(function() {
    updateWeather(weather_items);
  }, 50);
};

var createFakeWeather = function() {
  weather_items.text(randomString(5, 5, gibberish));
};

var fetchWeather = function() {
  $.when(
    $.getJSON("https://api.forecast.io/forecast/43f19489529ed6c8a31a12b48fa82071/40.6776231,-73.9935831?exclude=hourly,minutely,daily,flags,alerts&callback=?")
  ).then(function(data) {
    weather = data['currently']['icon'];

    if (weather.indexOf('clear') > -1) {
      weather = 'sunny';
    } else if (weather.indexOf('cloud') > -1) {
      weather = 'cloudy';
    } else if (weather.indexOf('rain') > -1) {
      weather = 'rainy';
    } else if (weather.indexOf('snow') > -1) {
      weather = 'snowy';
    } else if (weather.indexOf('wind') > -1) {
      weather = 'windy';
    } else if (weather.indexOf('fog') > -1) {
      weather = 'foggy';
    } else {
      // catches sleet, hail, thunderstorm, tornado, etc (https://developer.forecast.io/docs/v2)
      weather = 'murky';
    }
  })
};

// This does a few things:
//   1. Lengthen or shorten the text to the correct length (`correct_text`, passed in)
//   2. Replace a random bit of gibberish with a piece of correct text
//   3. Shuffles the gibberish in the node's text (makes the "loading" effect)
var replaceWeatherGibberish = function (node, correct_text) {
  var text = node.text().split('');
  var correct_text = correct_text.split('')

  // Too long, let's shorten it by one character
  if (text.length > correct_text.length) {
    text = text.slice(0, text.length - 1);
  }

  // Too short, let's lengthen it by one gibberish character
  else if (text.length < correct_text.length) {
    text.push(randomElement(gibberish));
  }

  // Make an array of all of the indexes of the gibberish characters
  var gibberish_indexes = text.map(function(char, i) {
    if (gibberish.indexOf(char) > -1) {
      return i;
    }
  }).filter(function(elem) {
    return elem != undefined
  });

  // If it's the correct length, replace a random gibberish character (by randomly
  // grabbing an index from the gibberish index array) with that element in the
  // correct text array. Then remove that index from the gibberish indexes so
  // we don't replace that later on
  if (text.length == correct_text.length) {
    var index = Math.floor(Math.random() * gibberish_indexes.length);

    var random_gibberish_index = gibberish_indexes[index];

    var correct_char = correct_text[random_gibberish_index];

    text[random_gibberish_index] = correct_char;

    gibberish_indexes.splice(index, 1);
  }

  // Loop through the gibberish, and replace them
  for (var i = 0; i < gibberish_indexes.length; i++) {
    // If it's another piece of gibberish, replace it
    text[gibberish_indexes[i]] = gibberish[Math.floor(Math.random() * gibberish.length)];
  }

  // Set the node text to the new text
  node.text(text.join(''));
}

// weather every list item by replacing the gibberish
var updateWeather = function () {
  var weather_updated = true;

  // If the entries array has a length bigger than 0, the Ajax call has finished
  if (weather.length > 0) {
    replaceWeatherGibberish(weather_items, weather);

    // Any of the different parts aren't what they need to be at the end, we're not done yet
    if (weather_items.text() != weather) {
      weather_updated = false;
    }
  }

  // Just shuffle the gibberish if there's no weather yet
  else {
    replaceWeatherGibberish(weather_items, weather_items.text());

    weather_updated = false;
  }

  // If everything is what it should be, stop the interval and we're done!
  if (weather_updated === true) {
    clearInterval(window.weatherInterval);
  }
}
