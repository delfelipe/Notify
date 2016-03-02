/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  #btnAlert */
    $(document).on("click", "#btnAlert", function(evt)
    { 
        navigator.notification.alert("Mensagem qualquer...",
                                     "Informação",
                                     "OK");
    });
    
        /* listitem  #btnConf */
    $(document).on("click", "#btnConf", function(evt)
    {
        navigator.notification.confirm("Confirma a ação?",
                                       function(buttonID){
                                        navigator.notification.alert("Você clicou no botão: "+buttonID,
                                                                     "Informação",
                                                                     "OK");},
                                       "Confirme para continuar", 
                                       ["Sim", "Não"])
    });
    
        /* listitem  #btnBeep */
    $(document).on("click", "#btnBeep", function(evt)
    {
        navigator.notification.beep(2);
    });
    
        /* listitem  #btnVibrar */
    $(document).on("click", "#btnVibrar", function(evt)
    { 
        navigator.vibrate(1000);
        
    });
    
        /* listitem  #btnInfo */
    $(document).on("click", "#btnInfo", function(evt)
    {
        var info = "MODELO: "+device.model+"<br/>";
            info += "PLATAFORMA: "+device.platform+" / VERSÃO (S.O.): "+device.version+"<br/>";
            info += "UUID (IMEI): "+device.uuid;
        
        navigator.notification.alert(info, "INFORMAÇÕES", "OK")
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
