
DEMO = {
	showWaypoints: true,
	showTrail: false
	};

DEMO.run = function() {

	var minX = 200;
	var minY = 200;
	var maxX = $(document).width() - 100;
	var maxY = $(document).height() - 100;

	var numPoints = 5;
	var dotsPerSeg = 15;
	var i;

	var points = [];
	
	// Make a random list of waypoints for the animation to follow
	for (i=0; i<numPoints; i++) {
		// points.push( [Math.floor(Math.random()*(maxX-minX))+minX, Math.floor(Math.random()*(maxY-minY))+minY] );
		// points.push( [Math.floor( i *(maxX-minX)) + minX + Math.random(), Math.floor( Math.random() *(maxY-minY)) + minY ] );
		// points.push( [ i * Math.random() , Math.floor(Math.random()*(maxY-minY))+minY] );
		// points.push( [  i * 200 , Math.floor(Math.random()*(maxY-minY))+minY] );
	}

	points.push( [  130 , 110 ] );

	points.push( [  200 , 350 ] ); // To show the events - 1
	
	points.push( [  200 , 350 ] ); // To show the tiny squeezed image
	
	points.push( [  405 , 560 ] ); // To show the First goal
	
	points.push( [  625 , 400 ] ); // To show the Trophy - 3
	
	points.push( [  780 , 140 ] ); // To show the Second goal

	points.push( [  1000 , 180 ] );
	
	points.push( [  1100 , 350 ] );
	
	points.push( [  1100 , 350 ] );
	
	
	
	
	// -- Important bit #1: Generate the spline animation object --
	var spline = $.crSpline.buildSequence(points);
	
	// Clean up visuals if we've run this once already
	$(".mover").remove();
	$(".waypoint").remove();
	$(".path-dot").remove();

	// Scary-looking stuff to visualize the waypoints and the trail of dots
	// NOT needed for animation
	for (i=0; i<numPoints; i++) {
		
		$('<div class="waypoint' + i + '"> </div>')
			.appendTo($(document.body))
			.css({
				left: points[i][0],
				top: points[i][1],
				display: (DEMO.showWaypoints ? "inline" : "none")
			});
		
		
		for (var j=0; j<dotsPerSeg; j++) {
			var t = (i + j/dotsPerSeg) / points.length;
			var pos = spline.getPos(t);
			$('<div class="path-dot" />')
				.appendTo($(document.body))
				.css({
					left: pos.left,
					top: pos.top,
					display: (DEMO.showTrail ? "inline" : "none")
				});
		}
	}

	// -- Important bit #2: Actually animate our mover object. --
	$('<div class="mover" />')
		.appendTo($(document.body))
		.animate({ crSpline: spline }, 20000, function () {
			// Re-run the demo with a new spline after we're done
			window.setTimeout(function() {
				//DEMO.run();
			}, 5000);
		});
	
};

$(document).ready(function() {
	$("#show-trail").click(function () {
		if ($(this).is(":checked")) {
			$(".path-dot").css({display: "inline"});
			DEMO.showTrail = true;
		}
		else {
			$(".path-dot").css({display: "none"});
			DEMO.showTrail = false;
		}
	});

	$("#show-waypoints").click(function () {
		if ($(this).is(":checked")) {
			$(".waypoint").css({display: "inline"});
			DEMO.showWaypoints = true;
		}
		else {
			$(".waypoint").css({display: "none"});
			DEMO.showWaypoints = false;
		}
	});

	$("#show-trail").attr("checked", DEMO.showTrail);
	$("#show-waypoints").attr("checked", DEMO.showWaypoints);

	DEMO.run();

	// Tool tip to show my events
	$(".waypoint1").click(function () {
		alert('I am happy that my granny gifted me 20£ on my last birthday :) ');
	});
	
	// Tool tip to show my trophies
	$(".waypoint3").click(function () {
		alert('I am happy that my bank Lloyds gifted me a trophy :) ');
	});		
	
});

function navigateToAlicePage() {
	// alert('Navigating to Alice Page');
	window.open("my-friend.jsp");
}


$(function () {
    $('.bubbleInfo').each(function () {
        var distance = 10;
        var time = 250;
        var hideDelay = 500;

        var hideDelayTimer = null;

        var beingShown = false;
        var shown = false;
        var trigger = $('.trigger', this);
        var info = $('.popup', this).css('opacity', 0);


        $([trigger.get(0), info.get(0)]).mouseover(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);
            if (beingShown || shown) {
                // don't trigger the animation again
                return;
            } else {
                // reset position of info box
                beingShown = true;

                info.css({
                    top: -90,
                    left: -33,
                    display: 'block'
                }).animate({
                    top: '-=' + distance + 'px',
                    opacity: 1
                }, time, 'swing', function() {
                    beingShown = false;
                    shown = true;
                });
            }

            return false;
        }).mouseout(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);
            hideDelayTimer = setTimeout(function () {
                hideDelayTimer = null;
                info.animate({
                    top: '-=' + distance + 'px',
                    opacity: 0
                }, time, 'swing', function () {
                    shown = false;
                    info.css('display', 'none');
                });

            }, hideDelay);

            return false;
        });
    });
});
