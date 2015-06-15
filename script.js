var DD = {}

DD.Map = function()
{
	var map;
      function initialize() {
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(0, 0),
            // Add your own lon and lat
            scrollwheel: false,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
            // These make the map greyscale. You can add other styles for different effects
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scroll:{x:$(window).scrollLeft(),y:$(window).scrollTop()},
        };

        var icon = { 
            url: 'assets/img/pin.png'
            //insert image path here
        };

        map = new google.maps.Map(document.getElementById('client-map'),
        // Must match the ID of map div in markup
        mapOptions);

        new google.maps.Marker({map:map,icon:icon,position:map.getCenter()});
        
        var offset=$(map.getDiv()).offset();
            map.panBy(((mapOptions.scroll.x-offset.left)/3),((mapOptions.scroll.y-offset.top)/3));
            google.maps.event.addDomListener(window, 'scroll', function(){
        
            var scrollY=$(window).scrollTop(),
            scrollX=$(window).scrollLeft(),
            scroll=map.get('scroll');
            
            if(scroll){
                map.panBy(-((scroll.x-scrollX)/3),-((scroll.y-scrollY)/3));
            }
            
            map.set('scroll',{x:scrollX,y:scrollY})
      
        });
    }

      google.maps.event.addDomListener(window, 'load', initialize);
}

DD.Map();
