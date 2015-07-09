$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault();
		var search = $("#search").val();
		var $searchField = $("#search")
		var submitbutton = $("#submit");

		$searchField.prop("disabled", true)
		submitbutton.attr("disabled",true).val("searching....")
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var flickrOptions = {
			tags: search,
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
			$searchField.prop("disabled",false)
			submitbutton.attr("disabled",false).val("search for this")
		}
		$.getJSON(flickerAPI,flickrOptions,displayPhotos);
	});
}); //end ready