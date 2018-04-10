var tl = new TimelineMax();

TweenMax.set('.twee',{autoAlpha:0});
TweenMax.set('.drie',{autoAlpha:0});
TweenMax.set('.vier',{autoAlpha:0});
tl.to('.twee', 1, {autoAlpha:1, });
tl.to('.drie', 2, {x: 310, autoAlpha:1, ease:Back.easeOut}, "-=0.8");
tl
  .to('.drie', 0.5, {rotation:5, 
    ease:Power1.easeInOut, repeat:1, yoyo:true, repeatDelay:0.5}, 0.5)
  .to('.drie', 0.25, {rotation:0},);
tl.to('.vier', 1, {autoAlpha:1, });
tl.to('.vijf', 2, {x: -310, y: -5, autoAlpha:1, ease:Back.easeOut}, "-=0.8");
