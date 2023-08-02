jQuery(document).ready(function($) {

	// nav
	$('#open_mobile_nav').click(function(event) {
		$('html').addClass('overflow_hidden');
		$('#mobile_nav').addClass('active').fadeIn(300);
	});
	$('#mobile_nav .btn_close').click(function(event) {
		$('html').removeClass('overflow_hidden');
		$('#mobile_nav').removeClass('active').fadeOut(300);
	});



	// Fix nav to top
	
	var fixmeTop = 100;

	$(window).scroll(function() {                  // assign scroll event listener
	    var currentScroll = $(window).scrollTop(); // get current position
	    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
	        $('#header').addClass('fixed');
	    } else {                                   // apply position: static
	        $('#header').removeClass('fixed');
	    }
	});


	$('.scroll_to_top').click(function(event) {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$('#hero_frontpage .scroll_down').click(function(event) {
		$("html, body").animate({ scrollTop:  $("#front_offer").offset().top }, "slow");
	});
	

/*
	$('some').click(function(event) {
		if($(this).hasClass('active'))
			return false;

		$(this).addClass('active');


		// 

		
	});
*/


	var marquee_speed = 50;
	if($(window).width() < 1200)
		marquee_speed = 30;
	
	$('.locations_scroller').marquee({
		duplicated : true,
		speed : marquee_speed,
		pauseOnHover : true,
		startVisible : true,
	});





	$('#faq_box .items .item h4').click(function(){
		var box = $(this).parents('.item');
		if(!box.hasClass('active')) {
			box.addClass('active');
			box.find('p').slideDown(400);
		} else {
			box.removeClass('active');
			box.find('p').slideUp(400);
		}
	});


	$('.link_download').click(function(event) {
		/* Act on the event */
	});


});


	/* MAP */
	var maps_boxes = ['footer_map','map_inner'];
  	function initMap() {

  	jQuery(document).ready(function($) {

  		for (var i = maps_boxes.length - 1; i >= 0; i--) {
  			// console.log(maps_boxes[i]);
  			if($('#'+maps_boxes[i]).length)
  				render_map(maps_boxes[i]);
  		}

  		


    });




  }

function render_map(box_id) {
jQuery(document).ready(function($) {
	var infoWindows = [];
	var markers = [];
	var bounds = new google.maps.LatLngBounds();

		

    var style = [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}];

  	
    var map = new google.maps.Map(document.getElementById(box_id), {
      zoom: 16,
      disableDefaultUI: true,
      center: {lat : 51.507351, lng : -0.127758}, // London
      styles : style
    });


    // $('#page_locations .locations_row .item').each(function(index, el) {

	$.each(location_map_data, function(index, val) {

	    var marker = new google.maps.Marker({
			position: { lat : location_map_data[index]['lat'], lng : location_map_data[index]['lng']},
			title : location_map_data[index]['title'],
			icon : '/wp-content/themes/karaage/assets/images/map-pointer.png',
	    });

	    // To add the marker to the map, call setMap();
	    marker.setMap(map);

	    //extend the bounds to include each marker's position
	    bounds.extend(marker.position);
	    markers.push(marker);

	    // console.log({ lat : $(this).data('lat'), lng : $(this).data('lng')});

	    var data = $('#map_section .location').html();

	    var content = '<h4>'+location_map_data[index]['title']+'</h4><p class="big">'+location_map_data[index]['text']+'</p>';

	    if(location_map_data[index]['order_online'] != '')
	    	content = content + '<a target="_blank" href="'+location_map_data[index]['order_online']+'" class="btn btn-primary btn-large">Order Online</a>'

	    var infowindow = new google.maps.InfoWindow({
	      content: content,
	    });

	    infoWindows.push(infowindow); 

	    google.maps.event.addListener(marker, 'click', function() {
	    	for (var i=0;i<infoWindows.length;i++)
	    		infoWindows[i].close();

    		infowindow.open(map,marker);
	    });
	    
    });


    //now fit the map to the newly inclusive bounds
	map.fitBounds(bounds);

	// Add a marker clusterer to manage the markers.
	new MarkerClusterer(map, markers, {
	imagePath:
	  "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});

	//(optional) restore the zoom level after the map is done scaling
	var listener = google.maps.event.addListener(map, "idle", function () {
	    map.setZoom(9);
	    google.maps.event.removeListener(listener);
	});

    


	// var markerCluster = new MarkerClusterer(map, markers, {imagePath: '${path}/m'});



	$('.see_on_map').click(function(event) {
		event.preventDefault();
		var index = $(this).parents('.item').index();

		// new google.maps.event.trigger( , 'click');
		var latLng = markers[index].getPosition(); // returns LatLng object
		map.setCenter(latLng); // setCenter takes a LatLng object
		map.setZoom(18);

	});  		
});
}





(function(){
	function id(v){ return document.getElementById(v); }
	function loadbar() {

		var ovrl = id("overlay"),
				prog = id("progress"),
				// stat = id("progstat"),
				img = document.images,
				c = 0,
				tot = img.length;
		if(tot == 0) return doneLoading();

		function imgLoaded(){
			c += 1;
			var perc = ((100/tot*c) << 0) +"%";
			prog.style.width = perc;
			// stat.innerHTML = "Loading "+ perc;
			if(c===tot) return doneLoading();
		}
		function doneLoading(){

			if(typeof WOW === 'function')
				new WOW().init();

				var long_load = true;

				if(jQuery(window).width() < 1200) {
					long_load = false;
				}

				if (long_load) {

					jQuery('#overlay .bird').addClass('first');

					setTimeout(function(){
						jQuery('#overlay .bird').addClass('second');

						setTimeout(function(){
							jQuery('#overlay').fadeOut(1500);


						}, 1500);

						
						

					}, 1500);

					setTimeout(function(){
						jQuery('#header').addClass('loaded');
					}, 3100);

				}
				else {
					jQuery('#overlay').fadeOut(300);
					setTimeout(function(){
						jQuery('#header').addClass('loaded');
					}, 300);
				}


				

				





		}
		for(var i=0; i<tot; i++) {
			var tImg     = new Image();
			tImg.onload  = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src     = img[i].src;
		}    
	}
	document.addEventListener('DOMContentLoaded', loadbar, false);
}());

