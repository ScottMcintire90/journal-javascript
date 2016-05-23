exports.Entry = function(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
};

exports.Message.prototype.read = function() {
  return this.journalTitle + ": " + this.journalEntry;
};
