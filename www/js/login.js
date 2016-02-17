
/*
 * JS manejo de index.html
*/

$(document).ready(function(){

    $.ajax({
        type:'GET',
        url: "http://104.130.1.174/fucsapi/GetContent.php?callback=?",
        dataType:'jsonp',
        async:true,
        success:function(respuesta){                    

            console.log(respuesta, arguments);
            var json = JSON.stringify(respuesta);
            
            var obj = JSON.parse(json);

            localStorage.setItem("Content", json);

            var cant_secciones = obj.length;

            console.log('cant secciones: ' + cant_secciones);

        },
        error:function(xhr,err,e){
            console.log('xhr: ' + xhr);
            console.log('err: ' + err);
            console.log('e: ' + e);
        }
    });

    $("#btn_login").click(function(){

        $("#cargando").html('<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>');

        var email = document.getElementById('email');
        var clave = document.getElementById('clave');

        // Patron para el correo
        var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(email.value.search(patron)==0)
        {
            if(clave.value.length > 6)
            {

                $.ajax({
                    type:'GET',
                    url: "http://104.130.1.174/fucsapi/Users.php?callback=?",
                    dataType:'jsonp',
                    async:true,
                    data: {
                        ACCION : "consultar_usuario",
                        usuario: email.value,
                        clave: clave.value
                    },
                    success:function(respuesta){                    

                        console.log(respuesta, arguments);
                        var json = JSON.stringify(respuesta);
                        console.log(json);
                        var obj = JSON.parse(json);

                        console.log(obj.codigo);
                        var codigo = obj.codigo;
                        
                        if (codigo == "Usuario o clave invalida")
                        {                    
                            $("#cargando").html('');
                            Materialize.toast(codigo, 4000);
                            email.focus();
                        }
                        else
                        {
                            if(document.getElementById('recordar_datos_acceso').checked == true)
                            {
                                // ..
                                localStorage.setItem("email", email.value);
                                localStorage.setItem("clave", clave.value);
                                localStorage.setItem("UserData", json);
                                location.href = "home.html";
                            }
                            else
                            {
                                localStorage.setItem("UserData", json);
                                location.href = "home.html";
                            }
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
                Materialize.toast('ingrese su clave!', 4000);
                clave.focus();
            }
        }
        else
        {
            $("#cargando").html('');
            Materialize.toast('verifique su email!', 4000);
            email.focus();
        }

    });

    $("#btn_recuperar_clave").click(function(){

        var re_email = document.getElementById('re_email');

        var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(re_email.value.search(patron)==0)
        {
            $.ajax({
                type:'GET',
                url: "http://104.130.1.174/fucsapi/Users.php?callback=?",
                dataType:'jsonp',
                async:true,
                data: {
                    ACCION : "recuperar_clave",
                    usuario: re_email.value
                },
                success:function(respuesta){                    

                    console.log(respuesta, arguments);
                    var json = JSON.stringify(respuesta);
                    console.log(json);
                    var obj = JSON.parse(json);

                    console.log(obj.codigo);
                    var codigo = obj.codigo;
                    
                    if (codigo == "Email no existe")
                    {                    
                        Materialize.toast(codigo, 4000);
                        re_email.focus();
                    }
                    else
                    {
                        Materialize.toast("La clave ha sido enviada a su email", 4000, '', function(){location.href='index.html';});
                        re_email.focus();
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
            Materialize.toast('verifique su email!', 4000);
            email.focus();
        }

    });

});