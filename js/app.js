// Main Application Controller

let chatInstance;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Chat
    const langSelector = document.getElementById('language-selector');
    const initialLang = langSelector.value;
    
    chatInstance = new ChatBot(initialLang);
    updateStaticUI(initialLang);
    chatInstance.showNode('start');

    // 2. Handle Language Changes
    langSelector.addEventListener('change', (e) => {
        const newLang = e.target.value;
        updateStaticUI(newLang);
        chatInstance.setLanguage(newLang);
    });

    // 3. Live Customizer (Educational Feature)
    setupCustomizer();

    // 4. Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered!', reg))
            .catch(err => console.error('Service Worker Registration Failed!', err));
    }
});

// Updates the text of static HTML elements that are outside the chat
function updateStaticUI(lang) {
    document.getElementById('app-title').textContent = getStr(lang, 'title');
    document.title = getStr(lang, 'title');
    
    // Customizer UI
    document.getElementById('customizer-title').textContent = getStr(lang, 'customizerTitle');
    document.getElementById('customizer-desc').textContent = getStr(lang, 'customizerDesc');
    document.getElementById('lbl-color-primary').textContent = getStr(lang, 'lblPrimary');
    document.getElementById('lbl-color-bg').textContent = getStr(lang, 'lblBg');
    document.getElementById('lbl-font').textContent = getStr(lang, 'lblFont');
    document.getElementById('reset-theme-btn').textContent = getStr(lang, 'btnReset');
}

// Sets up the event listeners for the Live Customizer panel
function setupCustomizer() {
    const root = document.documentElement; // Represents the <html> element (:root in CSS)
    
    const toggleBtn = document.getElementById('toggle-editor-btn');
    const panel = document.getElementById('customizer-panel');
    const colorPrimaryInput = document.getElementById('color-primary');
    const colorBgInput = document.getElementById('color-bg');
    const fontSelector = document.getElementById('font-selector');
    const resetBtn = document.getElementById('reset-theme-btn');

    // Toggle Panel
    toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
    });

    // Change Primary Color
    colorPrimaryInput.addEventListener('input', (e) => {
        root.style.setProperty('--primary-color', e.target.value);
        root.style.setProperty('--user-msg-bg', e.target.value); // Sync chat bubble
    });

    // Change Background Color
    colorBgInput.addEventListener('input', (e) => {
        root.style.setProperty('--bg-color', e.target.value);
    });

    // Change Font
    fontSelector.addEventListener('change', (e) => {
        root.style.setProperty('--font-family', e.target.value);
    });

    // Reset Theme
    resetBtn.addEventListener('click', () => {
        root.style.removeProperty('--primary-color');
        root.style.removeProperty('--user-msg-bg');
        root.style.removeProperty('--bg-color');
        root.style.removeProperty('--font-family');
        
        // Reset input values to defaults matching CSS
        colorPrimaryInput.value = '#4a90e2';
        colorBgInput.value = '#f4f7f6';
        fontSelector.selectedIndex = 0;
    });
}
