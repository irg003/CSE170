function setupButtons() {
    document.getElementById('basic').onclick = function() {
        choosePackage('basic');
    };
    document.getElementById('premium').onclick = function() {
        choosePackage('premium');
    };
    document.getElementById('luxury').onclick = function() {
        choosePackage('luxury');
    };
}

function choosePackage(package) {
    localStorage.setItem('package', package);
}

function populate() {
    var package = localStorage.getItem('package');
    if (package == 'basic') {
        document.getElementById('departureAirline').innerHTML = "Ryanair";
        document.getElementById('hotelRating').innerHTML = "78% Recommended on TripAdvisor";
        document.getElementById('returnAirline').innerHTML = "Ryanair";
        document.getElementById('total').innerHTML = "Total = $2,000";
    }

    else if (package == 'premium') {
        document.getElementById('departureAirline').innerHTML = "American Airlines";
        document.getElementById('hotelStars').innerHTML = '<i class="fa fa-star fa-2x" aria-hidden="true"></i><i class="fa fa-star fa-2x" aria-hidden="true"></i><i class="fa fa-star fa-2x" aria-hidden="true"></i><i class="fa fa-star fa-2x" aria-hidden="true">';
        document.getElementById('hotelRating').innerHTML = "87% Recommended on TripAdvisor";
        document.getElementById('returnAirline').innerHTML = "American Airlines";
        document.getElementById('total').innerHTML = "Total = $2,700";
    }

    else if (package == 'luxury') {
        document.getElementById('departureAirline').innerHTML = "Air France";
        document.getElementById('hotelStars').innerHTML = '<i class="fa fa-star fa-2x" aria-hidden="true"></i><i class="fa fa-star fa-2x" aria-hidden="true"></i><i class="fa fa-star fa-2x" aria-hidden="true"></i><i class="fa fa-star fa-2x" aria-hidden="true"></i><i class="fa fa-star fa-2x" aria-hidden="true"></i>';
        document.getElementById('hotelRating').innerHTML = "95% Recommended on TripAdvisor";
        document.getElementById('returnAirline').innerHTML = "Air France";
        document.getElementById('total').innerHTML = "Total = $3,200";
    }
}
