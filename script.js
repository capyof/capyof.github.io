<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Działało i Przestało - Autoryzowany Serwis Wszystkiego</title>
    <style>
        :root {
            --primary: #002f6c;
            --secondary: #008ba3;
            --dark: #1a1a1a;
            --light: #fafafa;
            --smoke: #cfd8dc;
            --danger: #b71c1c;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }

        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 3rem 1rem;
            text-align: center;
            border-bottom: 8px solid var(--smoke);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        header h1 {
            font-size: 2.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
        }

        header p {
            font-style: italic;
            font-size: 1.3rem;
            opacity: 0.9;
        }

        .alert-bar {
            background-color: var(--danger);
            color: white;
            padding: 0.8rem;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1px;
        }

        main {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        @media (min-width: 768px) {
            .grid {
                grid-template-columns: 2fr 1fr;
            }
        }

        .card {
            background: white;
            padding: 1.8rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border-top: 5px solid var(--secondary);
            margin-bottom: 1.5rem;
        }

        .card h2 {
            color: var(--primary);
            margin-bottom: 1.2rem;
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5rem;
        }

        .service-item {
            padding: 0.8rem 0;
            border-bottom: 1px dashed #ddd;
        }

        .service-item:last-child {
            border: none;
        }

        .service-title {
            font-weight: bold;
            color: var(--primary);
        }

        /* Styl dla nowo dodanego linku */
        .pks-link {
            color: var(--danger);
            text-decoration: underline;
            font-weight: bold;
        }

        .pks-link:hover {
            color: var(--secondary);
        }

        .price-list {
            list-style: none;
        }

        .price-list li {
            padding: 0.6rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f0f0f0;
        }

        .badge {
            background-color: var(--primary);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
            font-weight: bold;
            font-size: 0.9rem;
        }

        .infoline-box {
            background: #fff3e0;
            border-top-color: #ff9800;
            text-align: center;
        }

        .infoline-number {
            font-size: 1.8rem;
            font-weight: bold;
            color: #e65100;
            margin: 0.5rem 0;
        }

        .faq-item {
            margin-bottom: 1rem;
        }

        .faq-item strong {
            color: var(--danger);
            display: block;
            margin-bottom: 0.2rem;
        }

        footer {
            background-color: var(--dark);
            color: #999;
            text-align: center;
            padding: 1.5rem;
            margin-top: 3rem;
            font-size: 0.9rem;
            border-top: 5px solid var(--secondary);
        }
    </style>
</head>
<body>

    <header>
        <h1>🛠️ Serwis „Działało i Przestało”</h1>
        <p>"Naprawiamy usterki, które sam stworzyłeś, oglądając YouTube!"</p>
    </header>

    <div class="alert-bar">
        ⚠️ UWAGA: Nie przyjmujemy urządzeń naprawianych wcześniej przez szwagra, chyba że szwagier dopłaci.
    </div>

    <main>
        <div class="grid">
            <!-- Lewa kolumna -->
            <div>
                <div class="card">
                    <h2>🔌 Nasza Oferta i Specjalizacje</h2>
                    <div class="service-item">
                        <div class="service-title">Informatyka Magiczna</div>
                        <p>Włączanie i wyłączanie komputera na trzy różne sposoby. Działa w 90% przypadków.</p>
                    </div>
                    <div class="service-item">
                        <div class="service-title">Regeneracja Kabli Słuchawkowych</div>
                        <!-- TUTAJ ZNAJDUJE SIĘ TWÓJ LINK -->
                        <p>Rozplątywanie węzłów gordyjskich stworzonych w kieszeniach pasażerów autobusów linii <a href="http://mpxd.pl/mzk_zd/" class="pks-link">MZK Zadupie Dolne</a>.</p>
                    </div>
                    <div class="service-item">
                        <div class="service-title">Lutowanie na Ślepo</div>
                        <p>Łączenie losowych drucików, dopóki z obudowy nie przestaną lecieć iskry.</p>
                    </div>
                    <div class="service-item">
                        <div class="service-title">Terapia dla Laptopów po Kawie</div>
                        <p>Suszenie, modlitwa i czyszczenie klawiatury z cukru. Szanse na sukces: pół na pół.</p>
                    </div>
                </div>

                <div class="card">
                    <h2>❓ Najczęściej Zadawane Pytania (FAQ)</h2>
                    <div class="faq-item">
                        <strong>„Panie, a czemu tak drogo, przecież to tylko jeden drucik?”</strong>
                        <p>Odp: Przylutowanie drucika kosztuje 5 zł. Wiedza, który to drucik, kosztuje całą resztę.</p>
                    </div>
                    <div class="faq-item">
                        <strong>„Czy naprawiacie telefony wrzucone do rosołu?”</strong>
                        <p>Odp: Tak, ale pod warunkiem, że rosół był z kury, a nie z kostki rosołowej (tłuszcz z kostki niszczy ekrany).</p>
                    </div>
                    <div class="faq-item">
                        <strong>„Mój telewizor nie działa, ale mocno w niego uderzyłem i na chwilę pomogło.”</strong>
                        <p>Odp: Gratulujemy udanej naprawy perkusyjnej. Od teraz diagnoza u nas kosztuje dwa razy więcej.</p>
                    </div>
                </div>
            </div>

            <!-- Prawa kolumna -->
            <div>
                <div class="card infoline-box">
                    <h2>📞 Pogotowie Resetu</h2>
                    <p>Twój sprzęt wydał dziwny dźwięk i zgasł? Zadzwoń!</p>
                    <div class="infoline-number">0-800-880-80</div>
                    <p style="font-size: 0.85rem; color: #555;">
                        Lub na FancyHub: <strong>0805</strong>, albo na IPTelefoniji: <strong>74547</strong>.
                    </p>
                </div>

                <div class="card">
                    <h2>💵 Cennik Oficjalny</h2>
                    <ul class="price-list">
                        <li>
                            <span>Diagnoza ("Samo spojrzenie")</span>
                            <span class="badge">50 zł</span>
                        </li>
                        <li>
                            <span>Naprawa po "Ja sam naprawię"</span>
                            <span class="badge">300 zł</span>
                        </li>
                        <li>
                            <span>Naprawa po Szwagru</span>
                            <span class="badge">600 zł</span>
                        </li>
                        <li>
                            <span>Dmuchnięcie w gniazdo USB</span>
                            <span class="badge">15 zł</span>
                        </li>
                        <li>
                            <span>Wymiana części, która została na stole</span>
                            <span class="badge">120 zł</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2026 Serwis Działało i Przestało Sp. z o.o. Nie odpowiadamy za smartfony, które uciekły z serwisu o własnych siłach.</p>
    </footer>

</body>
</html>
