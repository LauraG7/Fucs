/* javascript de registrar.html */

$(document).ready(function(){

    $('select').material_select();

    $("#btn_registrar").click(function(){

        if(document.getElementById('terminos_condiciones').checked == true)
        {
            $("#cargando").html('<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>');

            var nombre          = document.getElementById('nombre');
            var email           = document.getElementById('email');
            var clave           = document.getElementById('clave');
            var reclave         = document.getElementById('reclave');
            var profesion       = document.getElementById('profesion');
            var telefono        = document.getElementById('telefono');
            var area_interes    = document.getElementById('area_interes');

            if(nombre.value.length > 0)
            {
                var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
                if(email.value.search(patron)==0)
                {
                    if(clave.value.length > 6)
                    {
                        if(clave.value === reclave.value)
                        {
                            if(profesion.value.length > 0)
                            {
                                if (telefono.value.length > 6) 
                                {
                                    if(area_interes.value.length > 0)
                                    {
                                        if (document.getElementById('terminos_condiciones').checked == true) 
                                        {
                                            // Send Data...

                                            $.ajax({
                                                type:'GET',
                                                url: "http://104.130.1.174/fucsapi/Users.php?callback=?",
                                                dataType:'jsonp',
                                                data: {
                                                    ACCION : "registrar_usuario",
                                                    nombre: nombre.value,
                                                    email: email.value,
                                                    clave: clave.value,
                                                    profesion: profesion.value,
                                                    area_interes: area_interes.value
                                                },
                                                success:function(repuesta){                    

                                                    console.log(repuesta, arguments);
                                                    var json = JSON.stringify(repuesta);
                                                    var obj = JSON.parse(json);

                                                    console.log(obj.query_result);
                                                    var query_result = obj.query_result;
                                                    
                                                    if (!isNaN(query_result)) 
                                                    {
                                                        var UserData = '[{"codigo":"1","fecha_registro":"2015-09-02 06:09:29","nombre":"'+nombre.value+'","usuario":"'+email.value+'","clave":"'+clave.value+'","estado":"1"}]';
                                                        localStorage.setItem("UserData", UserData);
                                                        localStorage.setItem("email", email.value);
                                                        location.href = "home.html";
                                                    }
                                                    else{
                                                        $("#cargando").html('');
                                                        Materialize.toast("El email que ingreso ya existe", 4000);
                                                    }

                                                },
                                                error:function(xhr,err,e){
                                                    console.log('xhr: ' + xhr);
                                                    console.log('err: ' + err);
                                                    console.log('e: ' + e);
                                                }
                                            });
                                        }
                                        else
                                        {
                                            $("#cargando").html('');
                                            Materialize.toast('Debe aceptar los terminos y condiciones!', 4000);
                                            document.getElementById('terminos_condiciones').focus();
                                        }

                                    }
                                    else
                                    {
                                        $("#cargando").html('');
                                        Materialize.toast('Ingrese el area de interes!', 4000);
                                        area_interes.focus();
                                    }
                                }
                                else
                                {
                                    $("#cargando").html('');
                                    Materialize.toast('Ingrese su telefono!', 4000);
                                    area_interes.focus();
                                }
                            }
                            else
                            {
                                $("#cargando").html('');
                                Materialize.toast('Ingrese su profesión!', 4000);
                                profesion.focus();
                            }
                        }
                        else
                        {
                            $("#cargando").html('');
                            Materialize.toast('Las claves no coinciden!', 4000);
                            reclave.focus();
                        }
                    }
                    else
                    {
                        $("#cargando").html('');
                        Materialize.toast('La clave debe contener mas de 6 caracteres!', 4000);
                        clave.focus();
                    }
                }
                else
                {
                    $("#cargando").html('');
                    Materialize.toast('ingrese su email!', 4000);
                    email.focus();
                }
            }
            else
            {
                $("#cargando").html('');
                Materialize.toast('ingrese su nombre!', 4000);
                nombre.focus();
            }
        }
        else
        {
            Materialize.toast('Debe aceptar los terminos y condiciones de servicio!', 4000);
        }

    });

    $("#btn_limpiar_form").click(function(){
        var nombre          = document.getElementById('nombre');
        var email           = document.getElementById('email');
        var clave           = document.getElementById('clave');
        var reclave         = document.getElementById('reclave');
        var profesion       = document.getElementById('profesion');
        var area_interes    = document.getElementById('area_interes');

        nombre.value = "";
        email.value = "";
        clave.value = "";
        reclave.value = "";
        profesion.value = "";
        area_interes.value = ""; 

        $("#cargando").html('');
        nombre.focus();                   
    });

});





