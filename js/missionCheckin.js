infowindow = new google.maps.InfoWindow();
		
		var content_infowindow
		

		function show_myInfowindow(entreprise,position) {
			infowindow.close(map);
			content_infowindow = '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>'+entreprise.nom+'</b><br/></center><button id="checkin" disabled>Check-in</button><button id="info">Fiche entreprise</button></div>'
			$('#infowindow_content').html(content_infowindow);
			infowindow.setContent($('#infowindow_content').html());
			// Replace our Info Window's position
			infowindow.setPosition(position);
			
			
			infowindow.open(map);
			//Si la zone est accessible par le joueur, on autorise le check-in (si le joueur est la BMC, on autorise le checkin partout
			if ((location_contained_or_edge(entreprise.Objet)) ||(google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet))) {
				document.getElementById('checkin').disabled = false;
			}
			
		} 

		function checkin(entreprise) {
			var teleportation = false;
			//Si le joueur se trouve à la BMC et qu'il fait un checkin dans une société à laquelle il n'a pas accès, on met le booléen "teleportation" à vrai
			if (google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet)) {
				if (!(location_contained_or_edge (entreprise.Objet))) {
					teleportation = true;
				}
			}
			//On envoie les données du checkin
			socket.emit('setCheckin',{
			idEntreprise : entreprise.index,
			idJoueur : idJoueur,
			teleportation : teleportation
			});
			
		}
		socket.on('resultSetCheckin', function (result) {
			alert(result);
			socket.emit('getArgentDisponibleJoueur',idJoueur);
			});
