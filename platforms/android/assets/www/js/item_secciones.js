
var obj;
var i;
var seccion;
var falcultad_novedades  = "";
var falcultad_efermeria  = "";
var falcultad_medicina = "";
var falcultad_instrumentacion = "";
var falcultad_siencias_sociales = "";

$(document).ready(function(){

    localStorage.setItem("titulo_curso", "");
    localStorage.setItem("ver_mas", "");

    $(".button-collapse").sideNav();

    seccion = localStorage.getItem("seccion");

    if (seccion == "Cursos") {
        DefinirContenido(seccion);
    }
    if (seccion == "Diplomados") {
        DefinirContenido(seccion);
    }
    if (seccion == "Programas de Extensión") {
        $("#pe").html("<h5 class='center-align' style='color: #ee6e73;'>Sede Cúcuta</h5>");
        DefinirContenido(seccion);
    }
    if (seccion == "Novedades") {
        DefinirContenido(seccion);
    }

});

function DefinirContenido(seccion)
{
    $("#titulo_seccion").html(seccion);

    obj = JSON.parse(localStorage.getItem("Content"));

    var cant_secciones = obj.length;

    for (i = 0; i < cant_secciones; i++) {

        var secciones = obj[i].secciones;

        if(secciones == seccion)
        {
            var facultad = obj[i].facultad;
            
            ConstruirHTML(facultad);
        }
    }

    if(falcultad_efermeria == "")
    {
        $("#falcultad_efermeria").html("<br><br><div><h5 class='center-align'>Nada que mostrar :(</h5></div>");
    }
    else
    {
        $("#falcultad_efermeria").html(falcultad_efermeria);
    }

    if(falcultad_medicina == "")
    {
        $("#falcultad_medicina").html("<br><br><div><h5 class='center-align'>Nada que mostrar :(</h5></div>");
    }
    else
    {
        $("#falcultad_medicina").html(falcultad_medicina);
    }

    if(falcultad_instrumentacion == "")
    {
        $("#falcultad_instrumentacion").html("<br><br><div><h5 class='center-align'>Nada que mostrar :(</h5></div>");
    }
    else
    {
        $("#falcultad_instrumentacion").html(falcultad_instrumentacion);
    }

    if(falcultad_siencias_sociales == "")
    {
        $("#falcultad_siencias_sociales").html("<br><br><div><h5 class='center-align'>Nada que mostrar :(</h5></div>");
    }
    else
    {
        $("#falcultad_siencias_sociales").html(falcultad_siencias_sociales);
    }

    if(falcultad_novedades != "")
    {
        $("#tabs_secciones").html("");
        $("#falcultad_efermeria").html(falcultad_novedades);
    }
    
}

function ConstruirHTML(facultad)
{
    if(facultad == "Facultad enfermería")
    {
        var imagen = obj[i].imagen;
        var categoria = obj[i].categoria;
        var titulo = obj[i].titulo;
        var descripcion = obj[i].descripcion;

        falcultad_efermeria = falcultad_efermeria + '<div id="" class="col s12"> ' +
                                ' <div class="row"> ' +
                                    ' <div class=""><!-- col s12 m7 --> ' +
                                        ' <div class="card"> ' +
                                            ' <div class="card-image"> ' +
                                                ' <img src="'+imagen+'"> ' +
                                                ' <span class="card-title">'+titulo+'</span> ' +
                                            ' </div> ' +
                                            ' <div class="card-content"> ' +
                                                ' <p>'+descripcion+'</p> ' +
                                            ' </div> ' +
                                            ' <div class="card-action"> ' +
                                                ' <a href="javascript:void(0)" onclick="VerMas('+obj[i].codigo+')">VER MAS...</a> ' +
                                            ' </div> ' +
                                        ' </div> ' +
                                    ' </div> ' +
                                ' </div> ' +
                            ' </div>';

    }
    if(facultad == "Facultad medicina")
    {
        var imagen = obj[i].imagen;
        var categoria = obj[i].categoria;
        var titulo = obj[i].titulo;
        var descripcion = obj[i].descripcion;

        falcultad_medicina = falcultad_medicina + '<div id="" class="col s12"> ' +
                                ' <div class="row"> ' +
                                    ' <div class=""><!-- col s12 m7 --> ' +
                                        ' <div class="card"> ' +
                                            ' <div class="card-image"> ' +
                                                ' <img src="'+imagen+'"> ' +
                                                ' <span class="card-title">'+titulo+'</span> ' +
                                            ' </div> ' +
                                            ' <div class="card-content"> ' +
                                                ' <p>'+descripcion+'</p> ' +
                                            ' </div> ' +
                                            ' <div class="card-action"> ' +
                                                ' <a href="javascript:void(0)" onclick="VerMas('+obj[i].codigo+')">VER MAS...</a> ' +
                                            ' </div> ' +
                                        ' </div> ' +
                                    ' </div> ' +
                                ' </div> ' +
                            ' </div>';

    }
    if(facultad == "facultad de instrumentación quirúrgica")
    {
        var imagen = obj[i].imagen;
        var categoria = obj[i].categoria;
        var titulo = obj[i].titulo;
        var descripcion = obj[i].descripcion;

        falcultad_instrumentacion = falcultad_instrumentacion + '<div id="" class="col s12"> ' +
                                ' <div class="row"> ' +
                                    ' <div class=""><!-- col s12 m7 --> ' +
                                        ' <div class="card"> ' +
                                            ' <div class="card-image"> ' +
                                                ' <img src="'+imagen+'"> ' +
                                                ' <span class="card-title">'+titulo+'</span> ' +
                                            ' </div> ' +
                                            ' <div class="card-content"> ' +
                                                ' <p>'+descripcion+'</p> ' +
                                            ' </div> ' +
                                            ' <div class="card-action"> ' +
                                                ' <a href="javascript:void(0)" onclick="VerMas('+obj[i].codigo+')">VER MAS...</a> ' +
                                            ' </div> ' +
                                        ' </div> ' +
                                    ' </div> ' +
                                ' </div> ' +
                            ' </div>';

    }
    if(facultad == "facultad de ciencias sociales – administrativ")
    {
        var imagen = obj[i].imagen;
        var categoria = obj[i].categoria;
        var titulo = obj[i].titulo;
        var descripcion = obj[i].descripcion;

        falcultad_siencias_sociales = falcultad_siencias_sociales + '<div id="" class="col s12"> ' +
                                ' <div class="row"> ' +
                                    ' <div class=""><!-- col s12 m7 --> ' +
                                        ' <div class="card"> ' +
                                            ' <div class="card-image"> ' +
                                                ' <img src="'+imagen+'"> ' +
                                                ' <span class="card-title">'+titulo+'</span> ' +
                                            ' </div> ' +
                                            ' <div class="card-content"> ' +
                                                ' <p>'+descripcion+'</p> ' +
                                            ' </div> ' +
                                            ' <div class="card-action"> ' +
                                                ' <a href="javascript:void(0)" onclick="VerMas('+obj[i].codigo+')">VER MAS...</a> ' +
                                            ' </div> ' +
                                        ' </div> ' +
                                    ' </div> ' +
                                ' </div> ' +
                            ' </div>';

    }
    if(facultad == "Novedades")
    {
        var imagen = obj[i].imagen;
        var categoria = obj[i].categoria;
        var titulo = obj[i].titulo;
        var descripcion = obj[i].descripcion;

        falcultad_novedades = falcultad_novedades + '<div id="" class="col s12"> ' +
                                ' <div class="row"> ' +
                                    ' <div class=""><!-- col s12 m7 --> ' +
                                        ' <div class="card"> ' +
                                            ' <div class="card-image"> ' +
                                                ' <img src="'+imagen+'"> ' +
                                                ' <span class="card-title">'+titulo+'</span> ' +
                                            ' </div> ' +
                                            ' <div class="card-content"> ' +
                                                ' <p>'+descripcion+'</p> ' +
                                            ' </div> ' +
                                            ' <div class="card-action"> ' +
                                                ' <a href="javascript:void(0)" onclick="VerMas('+obj[i].codigo+')">VER MAS...</a> ' +
                                            ' </div> ' +
                                        ' </div> ' +
                                    ' </div> ' +
                                ' </div> ' +
                            ' </div>';

    }
}

function VerMas(codigo)
{
    localStorage.setItem("ver_mas", codigo);
    location.href = 'item_seccion_interna.html';
}