var tl = new TimelineMax();

TweenMax.set('.drie',{autoAlpha:0});
TweenMax.set('.vier',{autoAlpha:0});
TweenMax.set('.vijfa',{autoAlpha:0});
tl.to('.twee', 0.5, {autoAlpha:1, });
tl.to('.vier', 1, {autoAlpha:1, });
tl.to('.drie', 3, {x: -310, y: -5, autoAlpha:1, ease:Back.easeOut}, "-=1");
tl.to('.vijfa', 2, {autoAlpha:1, }).delay(1);
tl.to('.vijf', 2, {x: 310, autoAlpha:1, ease:Back.easeOut}, "-=1");
tl
  .to('.vijf', 0.5, {rotation:5, 
    ease:Power1.easeInOut, repeat:1, yoyo:true, repeatDelay:0.5}, "-=1")
  .to('.vijf', 0.25, {rotation:0}, "-=0.3");


