function szamol() {
    var letszam = document.getElementById("letszam").value;
    var ejszaka = document.getElementById("ejszaka").value;
    var orszag = document.getElementById("orszag").value;
    var fizetendo;

    var ar = {};
    ar["b"] = 5600;
    ar["g"] = 6200;
    ar["b"] = 5000;
    ar["b"] = 5800;


    //--számolás--
     fizetendo = parseInt(letszam) * ar[orszag] * parseInt(ejszaka);
    //------------
    document.getElementById('eredmeny').value = fizetendo.toLocaleString +" Ft";
    
}