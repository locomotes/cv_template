

// skicknav settings 

$(document).ready(function(){
  $('header').slicknav({
    'label' : 'MENU', // Label for menu button. Use an empty string for no label.
    'duplicate': true, // If true, the mobile menu is a copy of the original.
    'duration': true, // The duration of the sliding animation.
    'easingOpen': 'swing', // Easing used for open animations.
    'easingClose': 'swing' // Easing used for close animations.
    // 'prependTo': '#navigate' // Element, jQuery object, or jQuery selector string to prepend the mobile menu to.
    // 'closeOnClick': false // Close menu when a link is clicked.
	});
});


