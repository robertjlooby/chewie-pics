var numPics = 26;

module.exports = {
  random: function() {
    var index = Math.floor(Math.random() * numPics);
    return "chewie" + index + ".jpg";
  }
}
