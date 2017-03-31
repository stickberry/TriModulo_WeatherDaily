$(document).ready(function(){

	$("#submitWeather").click(function(){

		var city = $("#city").val();

		if(city!=''){

			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=0af57a70ef1804c3a3bf757f153d6d6b",
				type: "GET",
				dataType: "jsonp",
				success: function(data){

					var widget = show(data);

					$("#show").html(widget);

					$("#city").val('');

				}

			});
		}
		else
		{
			$("#error").html("<div class='alert alert-info text-center' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Field cannot be empty!</strong> Indicates a successful or positive action.</div>");
			
		}
	});
});

function show(data){

	return "<h3 style = 'font-family: Cinzel; font-size:34px; text-align:center; font-weight: bold; margin-top:-10px; padding-top: 10px;'> CURRENT WEATHER FOR" + " " + data.name + ", " + data.sys.country + "</h3>" +
		   "<h3 style='font-family: Cinzel; padding-left:500px; margin-top:30px;'><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" + 
		   "<h3 style='font-family: Cinzel; padding-left:500px;'><strong>Description</strong>: <img src =  'http://openweathermap.org/img/w/" + data.weather[0].icon+ ".png'>" +  data.weather[0].description + "</h3>" +
		   "<h3 style='font-family: Cinzel; padding-left:500px;'><strong>Current Temperature</strong>: "+ data.main.temp + "&deg;C</h3>" + 
		   "<h3 style='font-family: Cinzel; padding-left:500px;'><strong>Pressure</strong>: "+ data.main.pressure + "hPa</h3>" + 
		   "<h3 style='font-family: Cinzel; padding-left:500px;'><strong>Humidity</strong>: "+ data.main.humidity +"%</h3>" + 
		   "<h3 style='font-family: Cinzel; padding-left:500px;'><strong>Visibility</strong>: "+ data.visibility+"m</h3>" + 
		   "<h3 style='font-family: Cinzel; padding-left:500px;'><strong>Wind Speed</strong>: "+ data.wind.speed +"m/s</h3>" + 
		   "<h3 style='font-family: Cinzel; padding-left:500px; padding-bottom: 10px; margin-bottom: -5px;'><strong>Wind Direction</strong>: "+ data.wind.deg +"<br></h3>" ;

};

