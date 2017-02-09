(function (global, $) {
  'use strict'

  var LCC = global.LCC || {}
  LCC.Modules = LCC.Modules || {}

  LCC.Modules.GoogleMap = function () {
    this.loadMap = function(element) {
        var zoom = element.data('map-zoom');
        var defaultLat = element.data('map-lat');
        var defaultLng = element.data('map-lng');

        var lat = document.getElementById("latitude").value;
        var lng = document.getElementById("longitude").value;
        var showPointer = false;
        
        var latlng;
        if (!lat && !lng) {
            latlng = new google.maps.LatLng(defaultLat, defaultLng);
        }
        else {
            latlng = new google.maps.LatLng(lat, lng);
            showPointer = true;
        }
        var mapProps = {
            center: latlng,
            zoom: zoom ? zoom : 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: true,
            mapTypeControl: true,
            mapTypeControlOptions:
            {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.TOP_RIGHT,
                mapTypeIds: [google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.TERRAIN,
                    google.maps.MapTypeId.HYBRID,
                    google.maps.MapTypeId.SATELLITE]
            },
            navigationControl: true,
            navigationControlOptions:
            {
                style: google.maps.NavigationControlStyle.ZOOM_PAN
            },
            scaleControl: true,
            disableDoubleClickZoom: true,
            draggable: true,
            streetViewControl: true,
            draggableCursor: 'move'
        };

        var map = new google.maps.Map(element[0], mapProps);

        map.setCenter(latlng);

        if (showPointer) {
            var marker = new google.maps.Marker({
                map: map,
                position: latlng,
                icon: "/_layouts/15/images/LCC.Events.SharePoint/map-pins-purple.png"
            });
            marker.setMap(map);
        }
    },
    this.start = function (element) {
        var self = this;
        $(document).ready(function ($) {
            google.maps.event.addDomListener(window, 'load', self.loadMap(element)); 
        });
    }   
  }

  global.LCC = LCC
  
})(window, jQuery);

(function (global, $) {
    "use strict";
    var LCC = global.LCC || {};
	    LCC.SearchResults = LCC.SearchResults || {};

    $(global).on('load', function () {
        LCC.SearchResults.resizeSearchResults();
    });

    $(global).resize(function () {
        LCC.SearchResults.resizeSearchResults();
    });        

    LCC.SearchResults.resizeSearchResults = function () {
        var browserViewport = $(window).width();
        if (browserViewport <= 992) {
            $(".relDate").prependTo(".eventsFilterType.first");
        }
        if (browserViewport > 992) {
            $('.relDate').appendTo('.eventsSearchSort .pull-right');
        }
    }

    global.LCC = LCC;

})(window, jQuery);


(function (global, $) {
    "use strict";
    var LCC = global.LCC || {};
	    LCC.SearchFilter = LCC.SearchFilter || {};

    $(document).ready(function () {
        LCC.SearchFilter.addClickEvent();
    });

    LCC.SearchFilter.addClickEvent = function () {
                 $('#filterhide a').click(function (event) {
                event.preventDefault();
                $('.eventsFilter.col-md-3').toggleClass("active");
            });
            $('#filterCloseButton a').click(function (event) {
                event.preventDefault();
                $('.eventsFilter.col-md-3.active').removeClass("active");
            });
            $('#closeIcon').click(function (event) {
                event.preventDefault();
                $('.eventsFilter.col-md-3.active').removeClass("active");
            });
    };

    global.LCC = LCC;

})(window, jQuery);


(function (global, $) {
    "use strict";
    var LCC = global.LCC || {};
	    LCC.Scrollto = LCC.Scrollto || {};





     $('.page-navigation a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.show-all-parts').prepend('<span class="Show">Show </span>');
  $('.show-all-parts').click(function(){
         $('.page-navigation').toggleClass('page-navigation-open');
         $(this).toggleClass('active');
         
         if( $(this).hasClass('active')){
             $(this).prepend('<span class="Hide">Hide </span> ');   
             $('span.Show').remove();
         }
        else {
           $(this).prepend('<span class="Show">Show </span>');
            $('span.Hide').remove();
         } 
   });    





    global.LCC = LCC;

})(window, jQuery);


 