monogatari.registerListener('next', {
    keys: 'enter',
    callback: () => {
        monogatari.proceed ({ userInitiated: true, skip: false, autoPlay: false }).then(() => {
        }).catch((e) => {
          monogatari.debug.log(`Proceed Prevented\nReason: ${e}`);
        });
    }
});

monogatari.unregisterListener("back");