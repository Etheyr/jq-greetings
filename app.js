$("button").click(function(){

	var firstName = $("#firstName").val();

	var city = $("#city").val();

	var lastName = $("#lastName").val();

	var texte = {

		firstName : firstName,
		city : city,
		lastName : lastName

	}
	
	$("span").html(texte.firstName +" "+lastName)

});

