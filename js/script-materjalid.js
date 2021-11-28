//kuvab nupule vajutades muusikaplayliste
//kui algselt on need peidus siis nupivajutusega teeb nähtavaks ning ka vastupidi
function tekstivahetus(){

    var nimek = document.getElementById('ullist')
    if (nimek.style.display == 'none'){
        nimek.style.display = 'block';
        

    }else{
        nimek.style.display = 'none';
    }
}

