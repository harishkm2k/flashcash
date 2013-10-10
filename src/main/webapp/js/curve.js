function animate()
{
  
  var path = {
            start: {
              x: 50,
              y: 50,
              angle: 315.012,
              length: 0.707
            },
            end: {
              x: 540,
              y: 540,
              angle: 315.012,
              length: 0.707
            }
          };

  $('.animatingDiv').animate(
      {
        path : new $.path.bezier(path)
      },
      2000,
      animate
    );
}

animate();