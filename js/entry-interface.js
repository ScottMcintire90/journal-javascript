function wordCount(entry) {
  var split = entry.split(" ");
  var i = split.length;
  return i;
}

function resetFields() {
  $('#journalTitle').val("");
  $('#journalEntry').val("");
}

var Entry = require('./../js/entry.js').Entry;
var moment = require('moment');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#journalTitle').val();
    var entry = $('#journalEntry').val();
    var words = wordCount(entry);
    var date = moment().format("MMM Do YY");
    var newEntry = new Entry(title, entry, date);
    $('#journalEntry').empty();
    $('#results').append("<div>" + "<h2>" +newEntry.readTitle() + ": " + "</h2>" + "<p>" + newEntry.readEntry() + "</p>" + "<h3>Date: " + newEntry.readDate() + "</h3>" + "<h3>Total Words: " + words + "</h3>" + "</div>");
    resetFields()
  });
});
