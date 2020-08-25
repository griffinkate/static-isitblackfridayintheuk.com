/**
 * @file
 * Scripting for single-serving site
 */
jQuery("html").addClass("js");


jQuery(function() {
  var onMoreClick = function(ev) {
    jQuery("article").slideToggle();
    ev.preventDefault();
    jQuery(this).remove();
  }

  var footerLink = jQuery("<a href='#' id='more-link'>- more -</a>").click(onMoreClick);
  jQuery("#vertical-aligner > footer").prepend(footerLink);
});
