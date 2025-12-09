    const artistNameElement = document.getElementById('artistName');
    let isStevenJulien = true;

    setInterval(() => {
        if (isStevenJulien) {
            artistNameElement.textContent = '808 PRINCE';
        } else {
            artistNameElement.textContent = 'STEVEN JULIEN';
        }
        isStevenJulien = !isStevenJulien;
    }, 2000);
