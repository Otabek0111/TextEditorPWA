const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update the install UI to notify the user app can be installed
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }

    // Show the install prompt.
    promptEvent.prompt();

    // reset the deferred prompt variable
    window.deferredPrompt = null;

    // Hide the install button.
    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // clear promt on install
    window.deferredPrompt = null;
});
