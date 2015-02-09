$(document).on("pageinit", "#missions", function() {
	
		var joueur = {idJoueur : idJoueur}
		var socket = io.connect(adresse_serveur);

		//Mission Check-In
	
	exports.Checkin = function(aConnection, aIdJoueur, aIdEntreprise, aCallback) {
	flagA = false,
	flagB = false,
	falgC = false;
	set.CheckIn(aConnection, aIdJoueur, aIdEntreprise, function(err) {
		if(err) {
			console.log(err);
			fonctions.EnvoyerMailErreur(nodemailer, err, "set.Checkin");
		}
		flagA = true;
		if((typeof aCallback === "function") && flagA && flagB && flagC) {
			aCallback();
		};
	});
	set.IncrementerCheckInJoueur(aConnection, aIdJoueur, aIdEntreprise, function(err2) {
		if(err2) {
			console.log(err2);
			fonctions.EnvoyerMailErreur(nodemailer, err2, "set.IncrementerCheckInJoueur");
		}
		flagB = true;
		if((typeof aCallback === "function") && flagA && flagB && flagC) {
			aCallback();
		};
	});
	set.IncrementerCheckinEntreprise(aConnection, aIdEntreprise, function(err3) {
		if(err3) {
			console.log(err3);
			fonctions.EnvoyerMailErreur(nodemailer, err3, "set.IncrementerCheckinEntreprise");
		}
			flagC = true;
			if((typeof aCallback === "function") && flagA && flagB && flagC) {
				aCallback();
			};
	});

		
		
		
		
		
});
