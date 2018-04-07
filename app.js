var tl = new TimelineMax();

tl.to( '.square-1', 2, { x: 150, ease:Sine.easeInOut, repeat: 5, yoyo: true }, 0 );
tl.to( '.square-2', 1, { x: 150, ease:Sine.easeInOut, repeat: 11, yoyo: true }, 0 );
tl.to( '.square', 0.5, { scale: 1.2, ease:Expo.easeOut, repeat: 7, yoyo: true, repeatDelay: 1 }, 0 );