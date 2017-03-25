    var options = {
      types: ['(cities)'],
      // componentRestrictions: {country: 'in'}
    };
        google.maps.event.addDomListener(window, 'load', function () {
            var places = new google.maps.places.Autocomplete(document.getElementById('city_name'),options);
            google.maps.event.addListener(places, 'place_changed', function () {
                var city_name = places.getPlace();                        
            });
        });
