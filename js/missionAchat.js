 <!--Page mission Achat -->

<!-- Onglet mission achat UN ORDRE -->
<div data-role="page" id="missionAchat">
      <div data-role="header">
      <a href='#' data-rel="back" class="ui-btn ui-corner-all ui-icon-home ui-btn-icon-notext"></a>
        <h1>Mission Achat</h1>
      </div>
      <div data-role="content">

                  <!-- Nom de l'entreprise -->     
                      
                <label for="select-custom-100">Entreprise</label>
                        <select name="select-custom-100" id="Selectentreprise" data-native-menu="false">
                              <option value="Veuiller sélectionner une entreprise" selected="selected">Veuillez sélectionner une entreprise</option>
                              <option value="Hill Tone">Hill Tone</option>
                              <option value="Genius Electrics">Genius Electrics</option>
                              <option value="SoTech Materials">SoTech Materials</option>
                              <option value="ITech">ITech</option>
                              <option value="Miam Inc.">Miam Inc.</option>
                              <option value="Campanule">Campanule</option>
                              <option value="Wilbedon & Co">Wilbedon & Co</option>
                              <option value="Blue Telecom">Blue Telecom</option>
                              <option value="Green Energy & Co">Green Energy & Co</option>
                              <option value="Biotech">Biotech</option>
                              <option value="Total Logistics">Total Logistics</option>
                              <option value="Brodewei">Brodewei</option>
                              <option value="Center Park">Center Park</option>
                              <option value="Mech. Entreprise">Mech. Entreprise</option>
                              <option value="Club Mad">Club Mad</option>
                              <option value="Sport Center">Sport Center</option>
                              <option value="Leonard Construction">Leonard Construction</option>
                              <option value="Doua Postal">Doua Postal</option>
                              <option value="ORPIste">ORPIste</option>
                              <option value="Palais des Congrès">Palais des Congrès</option>
                              <option value="Airboost">Airboost</option>
                              <option value="Lion Formation">Lion Formation</option>
                              <option value="Pedro de Fermat">Pedro de Fermat</option>
                              <option value="Badison Square Garden">Badison Square Garden</option>
                              <option value="Formula One">Formula One</option>

                          </select>                        
        </div>
</div>        
          
                <!-- Type d'ordre  -->
  
              
                          <label for="select-custom-51">Type d'ordre</label>
                          <select name="select-custom-51" id="selectordre" data-native-menu="false">
                              <option value="cours_limite" selected="selected">Ordre à cours limité</option>
                              <option value="au_marche">Ordre au marché </option>
                              <option value="seuil_declenchement">Ordre à déclenchement </option>
                              <option value="meilleure_limite">Ordre à la meilleure limite</option>
                          </select>
                      
                <!-- Listview qui contient PRIX, NOMBRE et DATE DE VALIDITE  -->
                      
                      <ul data-role="listview" data-inset="true">
                      
                <!--PRIX-->                   
                          <li class="ui-field-contain">
                            <div>
                            <label for="Prix">Prix (en ฿)</label>
                            <input type="number" name="number" id="Prix" value=""  /> 
                             </div>
                             <div id="consult_argentDisp">
                             </div>
                          </li>  
                          
    <!--TYPE DE DECLENCHEMENT-->                   
                          <li class="ui-field-contain" style="display:none;" id="declenchement">
                            <fieldset data-role="controlgroup" data-type="horizontal" style="border:none;" id="typedeclenchement">
                                <legend>Type de déclenchement</legend>
                                <input type="radio" name="radio-choice-type-declenchement" id="radio-choice-h-2a" value="Seuil" checked="checked">
                                <label for="radio-choice-h-2a">Seuil</label>
                                <input type="radio" name="radio-choice-type-declenchement" id="radio-choice-h-2b" value="Plage">
                                <label for="radio-choice-h-2b">Plage</label>
                            </fieldset>  
                                                    
      <!--SAISIE DU SEUIL OU DE LA PLAGE-->    

        <!--SAISIE DU SEUIL-->    
      
                            <label for="vseuil" style="margin-top:10px;"id="vseuillabel">Saisir le seuil
                            </label>
                            <textarea cols="40" rows="8" name="textarea" id="vseuil" style="width:80px; height:40px; resize:none;  margin-top:10px;">
                            </textarea>  

     <!--SAISIE DE LA PLAGE-->    
                             
                            <div data-role="rangeslider" style="margin-top:10px; display:none;" id="vplage">
                              <label for="range-10a" id="vplagelabel" style="display:none; margin-top:10px;">Saisir la plage
                                </label>
                                <input type="range" name="range-10a" id="range-10a" min="0" max="100" step=".01" value="0">
                                <label for="range-10b">Saisir la plage
                                </label>
                                <input type="range" name="range-10b" id="range-10b" min="0" max="100" step=".01" value="100">
                              </div>
                          
                          </li>
      <!--NOMBRE-->
                      
                          <li class="ui-field-contain">
                              <label for="Nombre">Nombre</label>
                              <input type="range" name="slider" id="Nombre" value="1" min="1" max="100"  />
                          </li>
                          
      <!--Date de validite-->
                          
                          <li class="ui-field-contain">                 
                              <fieldset data-role="controlgroup" data-type="horizontal" data-mini="false" id="validite" style="border:none">
                                  <legend>Date de validité</legend>
                                  <input type="radio" name="radio-choice-type-date" id="radio-choice-1" value="Aujourdhui" checked="true" >
                                  <label for="radio-choice-1">Aujourd'hui</label>
                                  <input type="radio" name="radio-choice-type-date" id="radio-choice-2" value="Date">
                                  <label for="radio-choice-2">Date</label>
                                  <input type="radio" name="radio-choice-type-date" id="radio-choice-3" value="Révocation">
                                  <label for="radio-choice-3">Révocation</label>
                              </fieldset>
                              
      <!-- Date Picker -->
                              
                              <div style="margin-top:10px">
                                  <label for="saisiedate" id="legendedate"></label>
                                  <input type="text" id="saisiedate" data-inline="false"  data-role="date">
                              </div>
                          </li>
                      
                      
      <!-- Bouton d'envoi -->
                      
                       <div class="ui-field-contain">
                          <input type="submit" value="Passer ordre" />

      </div>
      
    </div>
</div>
