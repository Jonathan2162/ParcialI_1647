
llamadato();

function llamadato(){
  
  var NoDepa = document.getElementById("depart");  
  if (NoDepa !=null){ 
  var url = "https://censopoblacion.gt/indicadores/2/" + NoDepa.value;
     }
  else {
    var url = "https://censopoblacion.gt/indicadores/2/999" ;
  }   
  fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divdata = document.getElementById('divdata');
            var TotalHombres = document.getElementById('totalH');
            TotalHombres.innerText  = data[0].total_sexo_hombre;
          
            var divdata = document.getElementById('divdata');
            var PorcentajeHombres = document.getElementById('porcentajeH');
            PorcentajeHombres.innerText  = data[0].porc_sexo_hombre;

            var divdata = document.getElementById('divdata');
            var TotaljeMujeres = document.getElementById('totalM');
            TotaljeMujeres.innerText  = data[0].total_sexo_mujeres;
            
            var divdata = document.getElementById('divdata');
            var PorcentajeMujeres = document.getElementById('porcentajeM');
            PorcentajeMujeres.innerText  = data[0].porc_sexo_mujeres;

         });
}