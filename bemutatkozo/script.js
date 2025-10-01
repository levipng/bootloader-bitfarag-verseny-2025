idoh();
function idoh() {
    document.getElementById('time').innerText = (new Date().toLocaleTimeString());
    requestAnimationFrame(idoh);
}

let kepszam = 0;
function kep() {
    document.getElementById('kep').innerHTML = ('<img src="img/' + kepszam % 2 + '.jpg">');
    kepszam = kepszam + 1;
}

let szovegszam = '0'
let szoveg0 = '0';
let szoveg1 = `
<div class="row">
        <div class="col-12 mb-4">
            <div class="text-kozep">
                <div class="gomboshatter">
                    <h2 class="mb-4">Gomány Hunor</h2>
                    <div class="content-text">
                        <p class="lead mb-4">Az Egri Neumann János Gimnázium, Technikum és Kollégium tanulója vagyok, és a Bootloader csapat tagjaként veszek részt a versenyen.</p>
                        <p class="mb-4">A webfejlesztés mindig is lenyűgözött, különösen a front-end világ, ahol a design és
                        a funkcionalitás találkozik. Szeretek interaktív, felhasználóbarát felületeket létrehozni, ahol
                        minden részlet számít.</p>
                        <p class="mb-4">A verseny lehetőséget ad számomra, hogy kipróbáljam magam kreatív kihívásokban,
                        tanuljak másoktól, és új ötleteket valósítsak meg egy csapat részeként.
                        </p>
                        <p class="mb-0">A csapatmunka számomra nemcsak feladat, hanem inspiráció is: mindig igyekszem
                        hozzátenni a saját energiámat, miközben élvezem a közös problémamegoldást.</p>
                    </div>
                </div>
            </div>
        </div>
`;
let szoveg2 = `
<div class="row">
        <div class="col-12 mb-4">
            <div class="text-kozep">
                <div class="gomboshatter">
                    <h2 class="mb-4">Koós Levente</h2>
                    <div class="content-text">
                        <p class="lead mb-4">Az Egri Neumann János Gimnázium, Technikum és Kollégium tanulója vagyok, és a Bootloader csapat tagjaként veszek részt a versenyen.</p>
                        <p class="mb-4">Mindig is érdekelt az informatika világa, különösen a webfejlesztés és a kreatív
                            problémamegoldás.</p>
                        <p class="mb-4">Azért jelentkeztem a versenyre, mert szeretnék új tapasztalatokat szerezni,
                            fejlődni, és
                            kipróbálni magam egy olyan környezetben, ahol más tehetséges fiatalokkal mérhetjük össze
                            tudásunkat.
                        </p>
                        <p class="mb-0">Fontosnak tartom a csapatmunkát, és igyekszem mindig a legjobbat kihozni
                            magamból –
                            úgy,
                            hogy közben élvezzem is a feladatokat.</p>
                    </div>
                </div>
            </div>
        </div>
`;
let szoveg3 = `
<div class="row">
        <div class="col-12 mb-4">
            <div class="text-kozep">
                <div class="gomboshatter">
                    <h2 class="mb-4">Vincze Zsombor</h2>
                    <div class="content-text">
                        <p class="lead mb-4">Az Egri Neumann János Gimnázium, Technikum és Kollégium tanulója vagyok, és a Bootloader csapat tagjaként veszek részt a versenyen.</p>
                        <p class="mb-4">Már gyerekkorom óta érdekelt az elektronika a számítógépek felépítése és működése.</p>
                        <p class="mb-4">Nagyon éredekel a low level programozás és a számítógépes rendszerek készítése.</p>
                        <p class="mb-0">Tanulom a backendet és a javascriptet amit tudok gyakorolni ezen a versenyen.</p>
                    </div>
                </div>
            </div>
        </div>
`;

function g1() {
    if (szovegszam == '0') { szovegszam = '1'; document.getElementById('szoveg').innerHTML = szoveg1; document.getElementById('szoveg').style.display = 'block' }
    else {
        if (szovegszam == '1') { szovegszam = '0'; document.getElementById('szoveg').innerHTML = szoveg0; document.getElementById('szoveg').style.display = 'none' }
        else {
            szovegszam = '1'; document.getElementById('szoveg').innerHTML = szoveg1; document.getElementById('szoveg').style.display = 'block'
        }
    }
}

function g2() {
    if (szovegszam == '0') { szovegszam = '2'; document.getElementById('szoveg').innerHTML = szoveg2; document.getElementById('szoveg').style.display = 'block' }
    else {
        if (szovegszam == '2') { szovegszam = '0'; document.getElementById('szoveg').innerHTML = szoveg0; document.getElementById('szoveg').style.display = 'none' }
        else {
            szovegszam = '2'; document.getElementById('szoveg').innerHTML = szoveg2; document.getElementById('szoveg').style.display = 'block'
        }
    }
}

function g3() {
    if (szovegszam == '0') { szovegszam = '3'; document.getElementById('szoveg').innerHTML = szoveg3; document.getElementById('szoveg').style.display = 'block' }
    else {
        if (szovegszam == '3') { szovegszam = '0'; document.getElementById('szoveg').innerHTML = szoveg0; document.getElementById('szoveg').style.display = 'none' }
        else {
            szovegszam = '3'; document.getElementById('szoveg').innerHTML = szoveg3; document.getElementById('szoveg').style.display = 'block'
        }
    }
}
