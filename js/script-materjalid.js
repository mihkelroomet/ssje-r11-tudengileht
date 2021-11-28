//kuvab nupule vajutades muusikaplayliste
//kui algselt on need peidus siis nupuvajutusega teeb nähtavaks ning ka vastupidi
function tekstivahetus(){

    var nimek = document.getElementById('ullist')
    var nupp = document.getElementById('nimekiri')
    if (nimek.style.display == 'none'){
        nimek.style.display = 'block';
        nupp.innerHTML = "Vajuta siia, et playlistid jälle peitu viia :o"

    }else{
        nimek.style.display = 'none';
        nupp.innerHTML = "Vajuta siia, et näha erinevaid playliste"
    }
}

