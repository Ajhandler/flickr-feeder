$(document).ready(function(){
	$('button').click(function(){
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format : "json"
		};
		var displayPhotos = function(data){
			var photoHtml = '<ul>';
			$.each(data.items, function(i,photo){
				photoHtml += '<li>'
				photoHtml += '<a href="'+ photo.link +'">'
				photoHtml += '<img src = "'+ photo.media.m +'"></a></li>'
			});
			photoHtml += '</ul>'
			$('#photos').html(photoHtml);
		}
		$.getJSON(flickerAPI,flickrOptions,displayPhotos);
	});
}); //end ready