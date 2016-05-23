exports.Entry = function (journalTitle, journalEntry, date) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
  this.date = date;
};

exports.Entry.prototype.readTitle = function() {
  return this.journalTitle;
};

exports.Entry.prototype.readEntry = function() {
  return this.journalEntry;
};

exports.Entry.prototype.readDate = function() {
  return this.date;
};

// exports.Entry.prototype.wordCount = function() {
//   var split = this.journalEntry.split(" ");
//   var i = split.length;
//   return i;
// }
