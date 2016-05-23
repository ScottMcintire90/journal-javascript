

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#journalTitle').val();
    var entry = $('#journalEntry').val();
    var newEntry = new Entry(title, entry);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
