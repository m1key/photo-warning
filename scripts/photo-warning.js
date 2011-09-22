$(function() {	
	// This will run on windows onload.
	
	// Set onmouseover for the image.
	$('div.warning a').bind('click', function(event) {
		var $warningMessage = $(event.target);
		var $hiddenImage = $warningMessage.closest('div.aroundImage').children('img');
		
		$hiddenImage.css('visibility', 'visible');
		$warningMessage.css('visibility', 'hidden');
	});
	
	// Set style for the console box.
	$('#console').css('font-size', '10px');
});

// Log messages to console.
function log(message) {
	$('#console').prepend("{0}: {1}<br />".format(new Date(), message));
}

// "{0}: blah {1}".format(a, b)
// http://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery
String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};
