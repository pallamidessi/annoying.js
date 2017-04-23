if (window.jQuery) {
  $(document).ajaxSuccess(() => {
    let sound = new Howl({
      src: ['assets/win.mp3'],
    });

    sound.play();
  });

  $(document).ajaxError(() => {
    let sound = new Howl({
      src: ['assets/lose.mp3'],
    });

    sound.play();
  });
}
