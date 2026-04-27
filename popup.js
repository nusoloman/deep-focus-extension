const defaultShortcut = { key: 's', shift: true, ctrl: false, alt: false };

const shortcutDisplay = document.getElementById('shortcutDisplay');
const recordBtn = document.getElementById('recordBtn');
const resetBtn = document.getElementById('resetBtn');
const hint = document.getElementById('hint');

let recording = false;

function formatShortcut(sc) {
    const parts = [];
    if (sc.ctrl) parts.push('Ctrl');
    if (sc.alt) parts.push('Alt');
    if (sc.shift) parts.push('Shift');
    parts.push(sc.key.length === 1 ? sc.key.toUpperCase() : sc.key);
    return parts.join(' + ');
}

function loadShortcut() {
    chrome.storage.sync.get('shortcut', (result) => {
        const sc = result.shortcut || defaultShortcut;
        shortcutDisplay.textContent = formatShortcut(sc);
    });
}

function saveShortcut(sc) {
    chrome.storage.sync.set({ shortcut: sc }, () => {
        shortcutDisplay.textContent = formatShortcut(sc);
        hint.textContent = 'Saved!';
        setTimeout(() => { hint.textContent = ''; }, 2000);
    });
}

function stopRecording() {
    recording = false;
    recordBtn.textContent = 'Change Shortcut';
    recordBtn.classList.remove('recording');
    hint.textContent = '';
}

recordBtn.addEventListener('click', () => {
    if (recording) {
        stopRecording();
        return;
    }
    recording = true;
    recordBtn.textContent = 'Press your shortcut...';
    recordBtn.classList.add('recording');
    hint.textContent = 'Press a key combo (e.g. Ctrl+Shift+D)';
});

document.addEventListener('keydown', (e) => {
    if (!recording) return;
    e.preventDefault();
    e.stopPropagation();

    const modifierKeys = ['Shift', 'Control', 'Alt', 'Meta'];
    if (modifierKeys.includes(e.key)) return;

    const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
    if (!hasModifier) {
        hint.textContent = 'Use at least one modifier (Shift, Ctrl, or Alt)';
        return;
    }

    const sc = {
        key: e.key.length === 1 ? e.key.toLowerCase() : e.key,
        shift: e.shiftKey,
        ctrl: e.ctrlKey || e.metaKey,
        alt: e.altKey
    };

    saveShortcut(sc);
    stopRecording();
});

resetBtn.addEventListener('click', () => {
    saveShortcut(defaultShortcut);
    stopRecording();
});

loadShortcut();
