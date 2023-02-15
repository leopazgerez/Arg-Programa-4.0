function bringData(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          fotoDePerfil = data.results[0].picture.large;
          $('#fotoDePerfil').attr("src",fotoDePerfil);
          nombre = data.results[0].name.first + ' ' + data.results[0].name.last
          $('.nombre').html(nombre);
          ubicacion = data.results[0].location.city + ', ' + data.results[0].location.country
          $('#ubicacion').html(ubicacion);
          mail = data.results[0].email;
          $('.mail').attr("href","mailto:"+mail);
          $('.mailTexto').html(mail);
          console.log(data.results[0])
         // obj = JSON.parse(data.results[0]);
          //console.log(obj);
        }
      });
}

$(document).ready(function() { 
  bringData();
  var fecha = new Date();
  var ano = fecha.getFullYear();
  $('.year').html(ano);
})

