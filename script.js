// Motyw
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
};

// Funkcja otwierania
function openWindow(id, title) {
    if (document.getElementById('win-' + id)) return;

    const template = document.getElementById('window-template');
    const newWin = template.cloneNode(true);
    
    newWin.id = 'win-' + id;
    newWin.style.display = 'flex';
    newWin.querySelector('.window-title').innerText = "CapyOF - " + title;

    // Treści dla każdego okna
    const contents = {
        'skills': 'Moje umiejętności to: Ustawienie FPBX, Robienie serwerów Minecraft i discord oraz tworzeniem animacji i grafik w Affinity Studio, Adobe After Effects i Adobe Photoshop.',
        'learning': 'Obecnie uczę się tworzenia stron.',
        'interests': 'Interesuję się Minecraftem, programowaniem, radiem i telewizją oraz VoIP.',
        'projects': 'Oto niektóre z moich projektów: <ul style="margin-top: 10px;"><li><b>Serwer Minecraft</b> "<a href="http://astrolandia.pl" class="astro-link"><b>AstroLandia.pl</b></a>",</li><li><b><a href="http://capyof.pl/serwis-dip/" class="serwis-link">Serwis "Działało i Przestało"</a></b>.</li></ul>',
        'numbers': 'Numery: <ul><li>0211 - Główny numer</li><br><li>0805 - Infolinia</li></ul>',
        'about': '<br>Cześć! Jestem CapyOF. Tworzę treści do internetu i bawię się kodem. Miło Cię poznać!'
    };

    // Obsługa zdjęcia tylko dla "O mnie"
    const avatar = newWin.querySelector('.avatar-circle');
    if (id !== 'about') {
        avatar.classList.add('hide');
    }

    newWin.querySelector('.placeholder-text').innerHTML = contents[id] || "";

    document.body.appendChild(newWin);
    makeDraggable(newWin);
}

function closeWindow(btn) {
    btn.closest('.window').remove();
}

// Przeciąganie
function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = el.querySelector('.window-header');
    
    header.onmousedown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Na wierzch
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 100);
        el.style.zIndex = 1000;

        document.onmousemove = (e) => {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            // Nowa pozycja bez transform (bo transform: translate(-50%, -50%) psuje drag)
            el.style.transform = 'none'; 
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        };

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}
