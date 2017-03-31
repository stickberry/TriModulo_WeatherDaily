$(document).ready(function(){

	var avg=0;
	$('#button2').click(function(){

		var c1 = $("#in1").val();
		var c2 = $("#in2").val();
		var c3 = $("#in3").val();
		var c4 = $("#in4").val();
		var avg = 0;

		var urls = ['http://api.openweathermap.org/data/2.5/weather?q='+ c1 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244',
		'http://api.openweathermap.org/data/2.5/weather?q='+ c2 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244',
		'http://api.openweathermap.org/data/2.5/weather?q='+ c3 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244',
		'http://api.openweathermap.org/data/2.5/weather?q='+ c4 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244'];

		$.each(urls, function(i,u){ 
     		$.ajax(u, 
       		{ 
       			type: 'GET',
         		dataType: "jsonp",
         		success: function (data){
             		avg = avg + data.main.temp;
         		} 
       		});
     	});

		setTimeout(function(){
			avg = avg/4.0;
			var widget = show(avg);
			$("#show2").html(widget);
			avg = 0;
			$("#in1").val('');
			$("#in2").val('');
			$("#in3").val('');
			$("#in4").val('');
		},3500);

     });
});


function show(avg){
	return 	"<h3 style='font-family: Cinzel; padding-top: 55px; padding-left: 475px; margin-top:-10px; padding-bottom: 10px; margin-bottom: -5px;'><strong><br />Average Temperature</strong>: "+ avg +"&deg;C</h3>";
}
