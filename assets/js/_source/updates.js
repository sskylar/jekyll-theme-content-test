var entries = [];
var gibberish = ['█', '▓', '▒', '░', '█', '▓', '▒', '░', '█', '▓', '▒', '░', '<', '>', '/'];
var list_items = $('.js-updates li');

var initUpdates = function () {
  if (!list_items.length) return;
  createFakes();

  // Run fetchEntries(), it'll set `entries` when it's done
  fetchEntries();

  // Update the entries every 25ms
  window.updatesInterval = setInterval(function() {
    updateEntries(list_items)
    updateEntries(list_items)
  }, 50);
}

// Random string from a given alphabet
var randomString = function(min_length, max_length, alphabet) {
  var result = '';

  for (var i = (Math.floor(Math.random() * (max_length - min_length + 1)) + min_length); i > 0; i--) {
    result += randomElement(gibberish);
  }

  if (result.indexOf('</') != -1) {
    return randomString(min_length, max_length, alphabet);
  }

  return result;
}

// Gets a random element from an array
var randomElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Create fake entries to begin with
var createFakes = function() {
  for (var i = 0; i < 5; i++) {
    var item = list_items[i],
        title = '<h3 class="inline fade"><a href="#" class="underline">' + randomString(15, 40, gibberish) + '</a></h3> ',
        date = '<time>' + randomString(5, 6, gibberish) + '</time> ',
        source = '<span>' + randomString(5, 6, gibberish) + '</span>';

    item.innerHTML = title + date + source;
  }
}

// Actually does the Ajax call to get the feed items
var fetchEntries = function () {
  $.when(
    $.ajax({
      url: 'https://ajax.googleapis.com/ajax/services/feed/load',
      dataType: 'jsonp',
      data: {
        v: '1.0',
        q: "http://feeds.feedburner.com/dropmark",
        num: 10
      }
    }),

    $.ajax({
      url: 'https://ajax.googleapis.com/ajax/services/feed/load',
      dataType: 'jsonp',
      data: {
        v: '1.0',
        q: "http://feeds.feedburner.com/siteleaf",
        num: 10
      }
    })
  ).then(function(r1, r2) {
    // Get the entries from Dropmark and Siteleaf (Oak entries are set in the
    // Jekyll page)
    var dropmark_entries = r1[0].responseData.feed.entries,
        siteleaf_entries = r2[0].responseData.feed.entries;

    // Attach the source to each entries and concatenate them
    oak_entries.map(function (e)      { e.source = "Oak" });
    dropmark_entries.map(function (e) { e.source = "Dropmark" });
    siteleaf_entries.map(function (e) { e.source = "Siteleaf" });

    // Put them all together
    entries = entries.concat(oak_entries).concat(dropmark_entries).concat(siteleaf_entries);

    // Replace their published dates with moment objects
    entries.map(function (e) {
      e.publishedDate = moment(e.publishedDate, ["YYYY-MM-DD HH:mm:ss ZZ", "ddd, DD MMM YYYY HH:mm:ss ZZ"])
    });

    // Sort in reverse chronological order
    entries = entries.sort(function(a, b) {
      return b.publishedDate.unix() - a.publishedDate.unix();
    });
  });
}

// This does a few things:
//   1. Lengthen or shorten the text to the correct length (`correct_text`, passed in)
//   2. Replace a random bit of gibberish with a piece of correct text
//   3. Shuffles the gibberish in the node's text (makes the "loading" effect)
var replaceGibberish = function (node, correct_text) {
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

// Updates every list item by replacing the gibberish
var updateEntries = function () {
  var entries_updated = true;

  for (var i = 0; i < list_items.length; i++) {
    var item = $(list_items[i]),
        item_title_link = item.find('h3').find('a')
        item_date  = item.find('time'),
        item_source = item.find('span');

    // If the entries array has a length bigger than 0, the Ajax call has finished
    if (entries.length > 0) {
      var entry = entries[i],
          entry_link = entry.link,
          entry_title = entry.title,
          entry_date = entry.publishedDate.format("MMM DD"),
          entry_source = '— ' + entry.source;

      item_title_link.attr('href', entry_link);
      // Add target attribute for external links
      if (entry.source != "Oak") item_title_link.attr('target', '_blank');

      replaceGibberish(item_title_link, entry_title);
      replaceGibberish(item_date, entry_date)
      replaceGibberish(item_source, entry_source)

      // Any of the different parts aren't what they need to be at the end, we're not done yet
      if (item_title_link.text() != entry_title || item_date.text() != entry_date || item_source.text() != entry_source) {
        entries_updated = false;
      }
    }

    // Just shuffle the gibberish if there's no entries yet
    else {
      replaceGibberish(item_title_link, item_title_link.text());
      replaceGibberish(item_date, item_date.text());
      replaceGibberish(item_source, item_source.text());

      entries_updated = false;
    }
  }

  // If everything is what it should be, stop the interval and we're done!
  if (entries_updated === true) {
    clearInterval(window.updatesInterval);
  }
}
