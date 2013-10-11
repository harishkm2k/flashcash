
<html>
<head>
<title>Charlie's Galaxy</title>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery.crSpline.js"></script>

<!-- 
<script type="text/javascript" src="http://ijin.net/crSpline/demo.js"></script>
 -->
<script type="text/javascript" src="js/myview/my-view-spline.js"></script>

<style>
.waypoint {
	position: absolute;
	z-index: 4;
	width: 25px;
	height: 25px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	
	
}

.waypoint0 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint1 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 56px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("images/myview/my-events.png");
}

.waypoint2 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	
}

.waypoint3 {
	position: absolute;
	z-index: 4;
	width: 34px;
	height: 36px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("images/myview/my-trophy.png");	
}

.waypoint4 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}


.waypoint5 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint6 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint7 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint8 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
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
	border: 0;
	font-family: "Lucida Console", "Monaco", "Arial", "Verdana";
}
        
</style>

   <style type="text/css" media="screen">
        * {
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
            position: absolute;
            top: 350px;
            left: 100px;
            width: 800px;
            bottom: 100px;
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
        	font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif;
        	}

        table.popup-contents th {
        	text-align: right;
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
    

</head>
<body background="images/myview/Canvas_WIP.png">

<!-- 
	<div id="snippet">
		<pre>
// jQuery.crSpline
// - <a
				href="http://github.com/MmmCurry/jquery.crSpline/raw/master/jquery.crSpline.js">Download</a> - <a
				href="http://github.com/MmmCurry/jquery.crSpline">View Source</a> - <a
				href="http://plugins.jquery.com/project/crSpline">Plugin Page</a> -

$(".mover").animate({
	crSpline: $.crSpline.buildSequence([[x0, y0], [x1, y1], ... [x9, y9]]),
	duration: 20000
});
</pre>

	</div>
 -->
 
 	<!--  
	<div id="settings">
		<div class="option">
			<input type="checkbox" id="show-waypoints" checked="checked">
			Show Waypoints
		</div>
		<div class="option">
			<input type="checkbox" id="show-trail" checked="checked">
			Show Trail
		</div>
	</div>
 	-->	
<div>
	<div align="right">
		<table>
		
		<tr><td>
		<img src="images/myview/new-01.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/new-02.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/new-03.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/new-04.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/new-05.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/new-06.png" alt="Friends Contribution" align="right" onclick="navigateToAlicePage()"/>
		</td></tr>
				
		</table>
	</div>
</div>

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
        				<th>Aunty gave</th>
        				<td>£25</td>
        			</tr>
        			<tr>
        				<th>For</th>
        				<td>Christmas</td>
        			</tr>
        			<tr/>
        			<tr>
        				<th>Granny gave</th>
        				<td>£50</td>
        			</tr>
        			<tr>
        				<th>For</th>
        				<td>Birthday</td>
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
