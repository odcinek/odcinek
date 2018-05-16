$(function(){
  $("#container1").twentytwenty({
    default_offset_pct: 1.0, // How much of the before image is visible when the page loads
    no_overlay: true, //Do not show the overlay with before and after
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });
});
