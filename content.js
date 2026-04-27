let isCensored = true;
let shortcut = { key: 's', shift: true, ctrl: false, alt: false };

chrome.storage.sync.get('shortcut', (result) => {
    if (result.shortcut) {
        shortcut = result.shortcut;
    }
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.shortcut) {
        shortcut = changes.shortcut.newValue;
    }
});

document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.target.isContentEditable) return;

    const keyMatch = e.key.toLowerCase() === shortcut.key.toLowerCase();
    const shiftMatch = e.shiftKey === shortcut.shift;
    const ctrlMatch = (e.ctrlKey || e.metaKey) === shortcut.ctrl;
    const altMatch = e.altKey === shortcut.alt;

    if (keyMatch && shiftMatch && ctrlMatch && altMatch) {
        e.preventDefault();
        isCensored = !isCensored;

        if (isCensored) {
            document.body.classList.remove('sansur-disabled');
        } else {
            document.body.classList.add('sansur-disabled');
        }
    }
});
