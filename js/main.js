function isValidDate(day,month,year)
{
    var dteDate;

    month=month-1;
    dteDate=new Date(year,month,day);

    //Devuelva true o false...
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}

function validate_fecha(fecha)
{
    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

    if(fecha.search(patron)==0)
    {
        var values=fecha.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}

function validarCampos() {
   var campo_dia = document.getElementById("dia").value;
   var campo_mes = document.getElementById("mes").value;
   var campo_anio = document.getElementById("anio").value;

   if( campo_dia === "" | campo_dia === null | campo_dia == 0){
     var campo_dia_error = document.getElementById("p_error_campos");
     campo_dia_error.className = "error";
   }
   if( campo_mes === "" | campo_mes === null | campo_mes == 0){
     var campo_mes_error = document.getElementById("p_error_campos");
     campo_mes_error.className = "error";
   }
   if( campo_anio === "" | campo_anio === null | campo_anio == 0){
     var campo_anio_error = document.getElementById("p_error_campos");
     campo_anio_error.className = "error";
   }
}

function calcularEdad()
{
    validarCampos();
        var day = document.getElementById("dia").value;
        var month = document.getElementById("mes").value;
        var year = document.getElementById("anio").value;

        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth()+1;
        var ahora_dia = fecha_hoy.getDate();

        // realizamos el calculo
        var edad = (ahora_ano + 1900) - year;
        if ( ahora_mes < month )
        {
            edad--;
        }
        if ((month == ahora_mes) && (ahora_dia < day))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }

        // calculamos los meses
        var meses=0;
        if(ahora_mes>month)
            meses=ahora_mes-month;
        if(ahora_mes<month)
            meses=12-(month-ahora_mes);
        if(ahora_mes==month && day>ahora_dia)
            meses=11;

        // calculamos los dias
        var dias=0;
        if(ahora_dia>day)
            dias=ahora_dia-day;
        if(ahora_dia<day)
        {
            ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
            dias=ultimoDiaMes.getDate()-(day-ahora_dia);
        }


    var pais = document.getElementById("pais");
    var opcion_pais = pais.options[pais.selectedIndex].value;

    if(opcion_pais === "mexico"){
        if(edad >= 18) {
          document.getElementById("enlace").href="casa2/index.html"; //link en español (poner dentro de comillas)
        }
        else {
          var parrafo_error = document.getElementById("p_error_esp");
          parrafo_error.className = "error";
          var parrafo_error = document.getElementById("p_error_eng");
          parrafo_error.className = "oculto";
      }
    } else
   if(opcion_pais === "usa"){
        if (edad >= 21) {
          document.getElementById("enlace").href="casa2/Ingles.html"; //link en ingles (poner dentro de comillas)
        } else {
          var parrafo_error = document.getElementById("p_error_eng");
          parrafo_error.className = "error";
          var parrafo_error = document.getElementById("p_error_esp");
          parrafo_error.className = "oculto";
      }
    }
  }