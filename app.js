var tl = new TimelineMax();

TweenMax.set('.vijfa',{autoAlpha:0});
TweenMax.set('.boodschap',{autoAlpha:0});
TweenMax.set('.eind',{autoAlpha:0});

tl.to('.drie', 2, {x: -310, y: -5, ease:Back.easeOut});
tl.to('.vijfa', 1, {autoAlpha:1, });
tl.to('.vijf', 2, {x: 310, autoAlpha:1, ease:Back.easeOut}, "-=0.5");
tl
  .to('.vijf', 0.5, {rotation:5, 
    ease:Power1.easeInOut, repeat:1, yoyo:true, repeatDelay:0.5}, "-=1")
  .to('.vijf', 0.25, {rotation:0}, "-=0.3");
tl.to('.boodschap',1, {autoAlpha:1}, "+=1");
tl.to('.moves',3, {autoAlpha:1, y:-47});
tl.to('.groen.moves',2, {autoAlpha:1, y:-90}, "-=1.5");
tl.to('.tekst',5, {zIndex:70}, "-=5");
tl.to('.eind',3, {autoAlpha:1});
tl.to('.big', 2, {scaleX:1.3, scaleY:1.3, y: -65}, "-=4")


