var tl = new TimelineMax();

TweenMax.set('.twee',{autoAlpha:0});
tl.to(TweenMax.to('.twee', 2, {autoAlpha:1}));
tl.to( '.drie', 3, { x: 150, ease:Sine.easeInOut, repeat: 5, yoyo: true }, 0 );
// tl.to( '.square-2', 1, { x: 150, ease:Sine.easeInOut, repeat: 11, yoyo: true }, 0 );
// tl.to( '.square', 0.5, { scale: 1.2, ease:Expo.easeOut, repeat: 7, yoyo: true, repeatDelay: 1 }, 0 );