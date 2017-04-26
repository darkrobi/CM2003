// JavaScript Document
//Aquiring Authorisation Key
var cuisine = 'italian';
var API_KEY = 'Basic VGVjaFRlc3RBUEk6dXNlcjI=';



function callApi(postcode){
	var ENDPOINT = ['https://public.je-apis.com/restaurants?q='+postcode+'&c='+cuisine];
$.ajax({
	headers:{
	'Accept-Tenant':'uk',
	'Accept-Language': 'en-GB',
	'Accept-Charset': 'utf-8',
	'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI=',
	},
	url: ENDPOINT,
	
	
	success:function(data){
		console.log(data);
		data.Restaurants.slice(1,6).forEach(function(restaurant){
			var content = "<div class='rest'>" + "<div class='rest_logo'>" + "<img src='" + restaurant.Logo["0"].StandardResolutionURL + "'>" + "</div>" + "<h2>"+restaurant.Name+"</h2>" + "<p class='rest_p'>Cuisine Type: " + restaurant.CuisineTypes["0"].Name + "<br/> Address:" + restaurant.postcode + ", " + restaurant.Address+"</p>" + 
				"</div>" + "<hr>";

			$("#list").append(content);
			$('#search-box-1').val('');
			
		});

		
		$("#overlay").fadeIn(300);
		//console.log(data.Restaurants[0].Name);
		//console.log(data.Restaurants[0].CuisineTypes);
	},
		error: function(error) {
			console.log(error);
		
			alert( 'Please refresh the page and try again later' );}
});
}
		
/*["AB10", "AB11", "AB12", "AB13", "AB14", "AB15", "AB16", "AB21", "AB22", "AB23", "AB24", "AB25", "AB30", "AB31", "AB32", "AB33", "AB34", "AB35", "AB36", "AB37", "AB38", "AB39", "AB41", "AB42", "AB43", "AB44", "AB45", "AB51", "AB52", "AB53", "AB54", "AB55", "AB56", "AB99"];*/