$(document).ready(function() {

  //Show the first tab as selected when page loads
  $('.tab-content:first').show();
  $(".tab-list li:first a").addClass('active');

  // Give each tab content a unique numbered ID
  $('.tab-content').each(function(i) {
    $(this).attr("id", "tab-" + (i + 1));
  });

  // Give each tab a unique href that maps to the tab content IDs
  $(".tab-list li a").each(function(i) {
    $(this).attr("href", "#tab-" + (i + 1));
    $(this).addClass("tab-" + (i + 1));
  });

  // On click of each tab link, show the associated tab content
  $(".tab-list li a").each(function(i) {

    var href = $(this).attr('href');

    $(this).click(function(e) {
      $(".tab-list li a").removeClass('active');
      $(this).addClass('active');
      $('.tab-content').hide();
      $(href).show();
      e.preventDefault();
    });
  });

});
