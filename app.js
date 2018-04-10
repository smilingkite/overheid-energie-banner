var tl = new TimelineMax();

TweenMax.set('.twee',{autoAlpha:0});
TweenMax.set('.drie',{autoAlpha:0});
tl.to('.twee', 1, {autoAlpha:1, });
tl.to('.drie', 2, {x: 310, autoAlpha:1, ease:Back.easeOut}, "-=0.8");
tl
  // .to('.drie', 0.25, {rotation:10})
  .to('.drie', 0.5, {rotation:5, 
    ease:Power1.easeInOut, repeat:1, yoyo:true, repeatDelay:0.5}, 0.5)
//end at 0
  .to('.drie', 0.25, {rotation:0},)
// tl.to( '.square-2', 1, { x: 150, ease:Sine.easeInOut, repeat: 11, yoyo: true }, 0 );
// tl.to( '.square', 0.5, { scale: 1.2, ease:Expo.easeOut, repeat: 7, yoyo: true, repeatDelay: 1 }, 0 );