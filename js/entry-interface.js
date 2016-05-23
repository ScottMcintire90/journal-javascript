var Entry = require('./../js/entry.js').Entry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#journalTitle').val();
    var entry = $('#journalEntry').val();

    var newEntry = new Entry(title, entry);

    $('#results').append("<div>" + "<h2>" +newEntry.readTitle() + ": " + "</h2>" + "<p>" + newEntry.readEntry() + "</p>" + "</div>");
  });
});
