let feladatok = [];
let huzottIndex = null; 

function mutasdAFeladatokat() {
    document.getElementById('listtask').innerHTML = ''; 

    for (let i = 0; i < feladatok.length; i++) {
        const feladat = feladatok[i];
        
        const listaElem = document.createElement('li');
        listaElem.draggable = true; 
        
        listaElem.ondragstart = function() {
            huzottIndex = i; 
        };
        
        listaElem.ondragover = function(esemeny) {
            esemeny.preventDefault();
        };
        
        listaElem.ondrop = function(esemeny) {
            esemeny.preventDefault();
            
            const hovaIndex = i;
            
            if (huzottIndex !== null && huzottIndex !== hovaIndex) {
                
                const kivettFeladat = feladatok[huzottIndex];
                feladatok.splice(huzottIndex, 1);
                
                feladatok.splice(hovaIndex, 0, kivettFeladat);
                
                mutasdAFeladatokat();
            }
            
            huzottIndex = null;
        };

        const pipa = document.createElement('input');
        pipa.type = 'checkbox';
        pipa.checked = feladat.kesz; 

        pipa.onchange = function() {
            feladatok[i].kesz = pipa.checked;
        };

        const szovegElem = document.createElement('span');
        szovegElem.textContent = feladat.adottszoveg;
        
        const torlesGomb = document.createElement('button');
        torlesGomb.textContent = 'Töröl';
        
        torlesGomb.onclick = function() {
            feladatok.splice(i, 1); 
            mutasdAFeladatokat();
        };

        listaElem.appendChild(pipa);
        listaElem.appendChild(szovegElem);
        listaElem.appendChild(torlesGomb);
        
        document.getElementById('listtask').appendChild(listaElem);
    }
}

function kuld() {
    let szoveg = document.getElementById('ujtask').value;
    szoveg = szoveg.trim();
    
    if (szoveg === '') {
        document.getElementById('ujtask').focus();
        return;
    }

    const ujFeladat = {
        adottszoveg: szoveg,
        kesz: false
    };
    feladatok.push(ujFeladat);
    document.getElementById('ujtask').value = '';

    mutasdAFeladatokat(); 
}

mutasdAFeladatokat();