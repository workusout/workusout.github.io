var sports = ['hiking', 'cycling', 'running'];

$(document).ready(function() {

	$('.sports div').on('click', function() {
		var sport = $(this).attr('id');
		sports.push(sport);
	});


	var getSports = function() 
		{
		    var path = "../data.json";
		    var informationArray= [];
		    console.log("Loading ....");
		    $.getJSON(path, function(data) 
		    {
		        $.each(data, function(key, val) 
		        {
		            informationArray.push(key + '-' + val);
		        });
		    }); 
		    return informationArray; 
		}

});