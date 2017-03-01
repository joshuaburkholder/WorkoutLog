$(document).ready(function() {
  $("#word_count").on('keyup', function() {
    var words = this.value.match(/\S+/g).length;

    // if (words > 200) {
    //   // Split the string on first 200 words and rejoin on spaces
    //   var trimmed = $(this).val().split(/\s+/, 200).join(" ");
    //   // Add a space at the end to make sure more typing creates new words
    //   $(this).val(trimmed + " ");
    // }
    // else {
      $("#log-wordCount").text(words);
      $("#word_left").text(1667-words);
    // }
  });
}); 