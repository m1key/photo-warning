$(function() {	
	// This will run on windows onload.
	
	$('div.warning a').bind('click', function(event) {
		var $aroundImage = $(event.target).closest('div.aroundImage').click();
	});
	
	$('div.aroundImage').bind('click', function(event) {
		var $aroundImage = $(event.target);
		var $hiddenImage = $aroundImage.children('img');
		var $warningMessage = $aroundImage.children('div.warning');
		
		$hiddenImage.show();
		$warningMessage.hide();
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
