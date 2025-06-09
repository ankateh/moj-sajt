    var ukSto6=4;
    var ukSto4=8;
    var ukSto2=10;


    function toggleKolicina(checkboxId, className) {
    const checkbox = document.getElementById(checkboxId);
    const elements = document.querySelectorAll('.' + className);

    checkbox.addEventListener('change', () => {
      elements.forEach(el => {
        el.style.display = checkbox.checked ? 'inline-block' : 'none';
      });
    });
  }

  toggleKolicina('sto2', 'kolicina2');
  toggleKolicina('sto4', 'kolicina4');
  toggleKolicina('sto6', 'kolicina6');





    function rezervisi(){
    var sto2 = document.getElementById('sto2');
    var sto2br = document.getElementById('sto2br').value;

    var sto4 = document.getElementById('sto4');
    var sto4br = document.getElementById('sto4br').value;

    var sto6 = document.getElementById('sto6');
    var sto6br = document.getElementById('sto6br').value;

    if(sto2.checked)
    {
        ukSto2-=sto2br;
        if(ukSto2<0)
            window.alert("Svi stolovi ovog tipa su rezervisani \nMolim vas izaberite drugu opciju");
    }
    if(sto4.checked)
    {
        ukSto4-=sto4br;
        if(ukSto4<0)
            window.alert("Svi stolovi ovog tipa su rezervisani \nMolim vas izaberite drugu opciju");
    }
    if(sto6.checked)
    {
        ukSto6-=sto6br;
        if(ukSto6<0)
            window.alert("Svi stolovi ovog tipa su rezervisani \nMolim vas izaberite drugu opciju");
    }
}