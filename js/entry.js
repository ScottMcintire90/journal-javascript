exports.Entry = function (journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
};

exports.Entry.prototype.readTitle = function() {
  return this.journalTitle;
};

exports.Entry.prototype.readEntry = function() {
  return this.journalEntry;
};
