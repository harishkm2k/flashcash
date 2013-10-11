<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html  xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
 <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<title>Charlie's Galaxy</title>
<script src="http://jqueryfordesigners.com/demo/jquery.js" type="text/javascript"></script>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery.crSpline.js"></script>

<script type="text/javascript" src="js/spline.js"></script>

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
	width: 40px;
	height: 40px;	
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("http://www.rw-designer.com/cursor-view/52792.png");
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
	border: 0;
	font-family: "Lucida Console", "Monaco", "Arial", "Verdana";
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
<body bgcolor="#333333">
<h1 style="color: white; ">Charlie's - Four Wishes !! </h1>
<div class="bubbleInfo">
          <div>
              <img class="trigger" style="left:145px;" src="images/goal.png" id="download" />
          </div>
          <table id="dpop" class="popup">
          	<tbody><tr>
          		<td id="topleft" class="corner"></td>
          		<td class="top"></td>
          		<td id="topright" class="corner"></td>
          	</tr>
          	<tr>
          		<td class="left"></td>
          		<td><table class="popup-contents">
          		<form action="#">

          			<tbody>
          			<tr>
          				<th>Give Charlie</th>
          				<td><input type="text"/></td>
          			</tr>
          			<tr>
          				<th>For</th>
          				<td><select>
                                <option value="Christmas">Christmas</option>
                                <option value="Birthday">Birthday</option>
                              </select></td>
          			</tr>
          			<tr>
          				<th>Personal Message</th>
          				<td><textarea>Enter personal message for Charlie </textarea></td>
          			</tr>
          			<tr>
          				<th></th>
          				<td><input type="submit" value="Give" /></td>
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
