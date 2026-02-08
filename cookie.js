document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('semplifica-cookie-badge');
    const sidebar = document.getElementById('cookie-sidebar-panel');
    const closeBtn = document.getElementById('close-sidebar');
    const saveBtn = document.querySelector('.save-preferences-btn');
    const overlay = document.querySelector('.cookie-overlay'); 

    // Funzione per aprire la sidebar cliccando sul badge fucsia
    if (badge) {
        badge.addEventListener('click', () => {
            sidebar.classList.add('open');
            // L'overlay principale non viene nascosto, come richiesto.
        });
    }

    // Funzione per chiudere la sidebar cliccando la 'X'
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    // Funzione per simulare il salvataggio e sbloccare la pagina
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            alert('Preferenze semplificate salvate! La navigazione è ora sbloccata.');
            sidebar.classList.remove('open');
            
            // Rimuovi l'overlay principale e il badge
            if (overlay) {
                overlay.remove();
            }
            if (badge) {
                badge.remove();
            }
            
            // Sblocca il testo dell'articolo (rimuovendo la sfocatura)
            document.querySelectorAll('.blurred-text').forEach(el => {
                el.classList.remove('blurred-text');
                el.style.filter = 'none';
                el.style.color = '#333'; // Ripristina il colore del testo
                el.style.pointerEvents = 'auto'; // Rende cliccabile il testo
            });
        });
    }
});

// Funzione per bloccare lo scroll del body
const toggleBodyScroll = (block) => {
    document.body.style.overflow = block ? 'hidden' : '';
};

if (badge) {
    badge.addEventListener('click', () => {
        sidebar.classList.add('open');
        toggleBodyScroll(true); // Impedisce lo scroll sotto la sidebar
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
        toggleBodyScroll(false); // Riattiva lo scroll
    });
}

// Nel pulsante saveBtn, ricorda di riattivare lo scroll
if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        // ... (tuo codice esistente)
        toggleBodyScroll(false);
    });
}