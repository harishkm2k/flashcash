<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html  xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
 <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<title>Charlie's FourWishes</title>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery.crSpline.js"></script>

<script type="text/javascript" src="js/myview/my-view-spline.js"></script>
<style>
.waypoint {
	position: absolute;
	z-index: 4;
	width: 25px;
	height: 25px;
	
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("http://www.sacred-texts.com/the/sd/sd1-4a.jpg");
	
}

.path-dot {
	position: absolute;
	z-index: 1;
	width: 4px;
	height: 4px;
	font: 0px;
	background-color: #dca3a3;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
}

.mover {
	position: absolute;
	z-index: 5;
	width: 50px;
	height: 21px;	
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("images/myview/spaceship.png");
}

#snippet {
	float: left;
	clear: both;
	z-index: 0;
	color: #dcdccc;
	font-family: "Lucida Console", "Monaco", "Arial", "Verdana"
}

#snippet pre {
	font-family: "Lucida Console", "Monaco", "Arial", "Verdana"
}

#snippet a {
	/*color: #4f4faf;*/
	color: #5fbf5f;
	text-decoration: none;
}

#snippet a:hover {
	text-decoration: underline;
	color: #4fff4f;
}

#settings {
	float: left;
	clear: both;
	color: #dcdccc;
}

.option {
	clear: both;
}

* {

	font-family: "Lucida Console", "Monaco", "Arial", "Verdana";
 	margin:0 ;
    padding: 0;
}
        body {
            padding: 10px;
        }

        h1 {
            margin: 14px 0;
            font-family: 'Trebuchet MS', Helvetica;
        }

        p {
            margin: 14px 0;
            font-family: 'Trebuchet MS', Helvetica;
        }

        .bubbleInfo {
            position: relative;
            top: 300px;
            left: 140px;
            width: 800px;
        }
        .trigger {
            position: absolute;
        }

        /* Bubble pop-up */

        .popup {
        	position: absolute;
        	display: none;
        	z-index: 50;
        	border-collapse: collapse;
        }

        .popup td.corner {
        	height: 15px;
        	width: 19px;
        }
        textarea {
   font-size: 10pt;
   font-family: Arial;
} 
       option {
   font-size: 10pt;
   font-family: Arial;
} 
       select {
   font-size: 10pt;
   font-family: Arial;
} 
       input {
   font-size: 10pt;
   font-family: Arial;
}

        .popup td#topleft { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-1.png); }
        .popup td.top { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-2.png); }
        .popup td#topright { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-3.png); }
        .popup td.left { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-4.png); }
        .popup td.right { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-5.png); }
        .popup td#bottomleft { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-6.png); }
        .popup td.bottom { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-7.png); text-align: center;}
        .popup td.bottom img { display: block; margin: 0 auto; }
        .popup td#bottomright { background-image: url(http://static.jqueryfordesigners.com/demo/images/coda/bubble-8.png); }

        .popup table.popup-contents {
        	font-size: 12px;
        	line-height: 1.2em;
        	background-color: #fff;
        	color: #666;
        	}

        table.popup-contents th {
        	text-align: right;
        	padding:10px;
        	margin:10px;
        	}

        table.popup-contents td {
        	text-align: left;
        	}

        tr#release-notes th {
        	text-align: left;
        	text-indent: -9999px;
        	background: url(http://jqueryfordesigners.com/demo/images/coda/starburst.gif) no-repeat top right;
        	height: 17px;
        	}

        tr#release-notes td a {
        	color: #333;
        }

</style>
<script type="text/javascript">

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
</script>
</head>
<body bgcolor="#333333" background="images/myview/Canvas_WIP.png">
<h1 style="color: white; "></h1>
<div class="bubbleInfo">
        <div>
            <img class="trigger" style="left:180px;top:70px;" src="images/goal.png" id="download" />
        </div>
        <table id="dpop" class="popup">
        	<tbody><tr>
        		<td id="topleft" class="corner"></td>
        		<td class="top"></td>
        		<td id="topright" class="corner"></td>
        	</tr>
        	<tr>
        		<td class="left"></td>
        		<td><table class="popup-contents"><tbody>
        		<form action="my-view-after.jsp">
        			<tr>
        				<th>Give Charlie � </th>
        				<td><input type="text" size="10"/ value="20"></td>
        			</tr>
        			<tr>
        				<th padding="">For</th>
        				<td><select>
                              <option value="Christmas">Birthday</option>
                              <option value="Birthday">Christmas</option>
                            </select></td>
        			</tr>
        			<tr>
        				<th>Personal Message</th>
        				<td><textarea class="popup-contents"> </textarea></td>
        			</tr>
        			<tr>
        				<th></th>
        				<td><input type="image" value="Give" src="images/give-gift.png" name="image" width="89" height="37"/> </td>
        			</tr>
        		</tbody></table>

        		</td>
        		<td class="right"></td>
        	</tr>

        	<tr>
        		<td class="corner" id="bottomleft"></td>
        		<td class="bottom"><img width="30" height="29" alt="popup tail" src="http://static.jqueryfordesigners.com/demo/images/coda/bubble-tail2.png"/></td>
        		<td id="bottomright" class="corner"></td>
        	</tr>
        </tbody></table>
    </div>
</body>
</html>
