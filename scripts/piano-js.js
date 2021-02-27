// managing screen orientation
window.addEventListener("orientationchange", function(event) {
	if (event.target.screen.orientation.angle == 0 || event.target.screen.orientation.angle == 180) {
		$('body').hide()
		$('controlDiv').remove()
	}
	else {
		$('body').show()
		$('controlDiv').remove()
	}
});



$("body").click(function() {
	$(".sound").show('400');
});
$(".dropselect").click(function() {
	if ($(".sound").is(":hidden")) {
		$(".sound").show('400');
	}
	else {
		$(".sound").hide('400');
	}
});
(function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);


var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) { 
	$('controlDiv').hide()
	$('body').hide()
}

var Auds = new Array();
var Sources = new Array('audio/w1.mp3','audio/w2.mp3','audio/w3.mp3','audio/w4.mp3','audio/w5.mp3','audio/w6.mp3','audio/w7.mp3','audio/w8.mp3','audio/w9.mp3','audio/w10.mp3','audio/w11.mp3','audio/w12.mp3','audio/w13.mp3','audio/w14.mp3','audio/w15.mp3','audio/w16.mp3','audio/w17.mp3','audio/w18.mp3','audio/w19.mp3','audio/w20.mp3','audio/w21.mp3','audio/w22.mp3','audio/w23.mp3','audio/w24.mp3','audio/w25.mp3','audio/w26.mp3','audio/w27.mp3','audio/w28.mp3','audio/w29.mp3','audio/w30.mp3','audio/w31.mp3','audio/w32.mp3','audio/w33.mp3','audio/w34.mp3','audio/w35.mp3','audio/w36.mp3','audio/b37.mp3','audio/b38.mp3','audio/b39.mp3','audio/b40.mp3','audio/b41.mp3','audio/b42.mp3','audio/b43.mp3','audio/b44.mp3','audio/b45.mp3','audio/b46.mp3','audio/b47.mp3','audio/b48.mp3','audio/b49.mp3','audio/b50.mp3','audio/b51.mp3','audio/b52.mp3','audio/b53.mp3','audio/b54.mp3','audio/b55.mp3','audio/b56.mp3','audio/b57.mp3','audio/b58.mp3','audio/b59.mp3','audio/b60.mp3','audio/b61.mp3');
for (var i = 0; i < Sources.length; i++) {
	Auds[i] = new Audio(Sources[i]);
	Auds[i].muted = true;
	Auds[i].load();
}


var kick = new Audio('audio/big2.wav');
kick.load();
kick.muted = true;

$( "#big2" ).click(function() {
	kick.src = "audio/big2.wav";
	kick.load();
	kick.muted = true;
  });

$( "#big808" ).click(function() {
	kick.src = "audio/big808.wav";
	kick.load();
	kick.muted = true;
  });

$( "#longdist808" ).click(function() {
	kick.src = "audio/longdist808.wav";
	kick.load();
	kick.muted = true;
  });

$( "#ramenpedal" ).click(function() {
	kick.src = "audio/ramenpedal.wav";
	kick.load();
	kick.muted = true;
  });  

$( "#8bit" ).click(function() {
	kick.src = "audio/8bit.wav";
	kick.load();
	kick.muted = true;
  });

$( "#kickButton" ).click(function() {
  kick.currentTime = 0;
  kick.muted = false;
  kick.play();
});

var snare = new Audio('audio/snare1.wav');
snare.load();
snare.muted = true;
$( "#snare1" ).click(function() {
	snare.src = "audio/snare1.wav";
	snare.load();
	snare.muted = true;
  });
$( "#snare2" ).click(function() {
	snare.src = "audio/snare2.wav";
	snare.load();
	snare.muted = true;
  });
$( "#snare3" ).click(function() {
	snare.src = "audio/snare3.wav";
	snare.load();
	snare.muted = true;
  });
$( "#snare4" ).click(function() {
	snare.src = "audio/snare4.wav";
	snare.load();
	snare.muted = true;
  });
$( "#snare5" ).click(function() {
	snare.src = "audio/snare5.wav";
	snare.load();
	snare.muted = true;
  });
  $( "#snareButton" ).click(function() {
	snare.currentTime = 0;
	snare.muted = false;
	snare.play();
  });



var hihat = new Audio('audio/hihat1.wav');
hihat.load();
hihat.muted = true;
$( "#hihat1" ).click(function() {
	hihat.src = "audio/hihat1.wav";
	hihat.load();
	hihat.muted = true;
  });
$( "#hihat2" ).click(function() {
	hihat.src = "audio/hihat2.wav";
	hihat.load();
	hihat.muted = true;
  });
$( "#hihat3" ).click(function() {
	hihat.src = "audio/hihat3.wav";
	hihat.load();
	hihat.muted = true;
  });
$( "#hihat4" ).click(function() {
	hihat.src = "audio/hihat4.wav";
	hihat.load();
	hihat.muted = true;
  });
$( "#hihat5" ).click(function() {
	hihat.src = "audio/hihat5.wav";
	hihat.load();
	hihat.muted = true;
  });
  $( "#hihatButton" ).click(function() {
	hihat.currentTime = 0;
	hihat.muted = false;
	hihat.play();
  });

var precussion = new Audio('audio/precussion1.wav');
  precussion.load();
  precussion.muted = true;
  $( "#precussion1" ).click(function() {
	  precussion.src = "audio/precussion1.wav";
	  precussion.load();
	  precussion.muted = true;
	});
  $( "#precussion2" ).click(function() {
	  precussion.src = "audio/precussion2.wav";
	  precussion.load();
	  precussion.muted = true;
	});
  $( "#precussion3" ).click(function() {
	  precussion.src = "audio/precussion3.wav";
	  precussion.load();
	  precussion.muted = true;
	});
  $( "#precussion4" ).click(function() {
	  precussion.src = "audio/precussion4.wav";
	  precussion.load();
	  precussion.muted = true;
	});
  $( "#precussion5" ).click(function() {
	  precussion.src = "audio/precussion5.wav";
	  precussion.load();
	  precussion.muted = true;
	});
	$( "#precussionButton" ).click(function() {
	  precussion.currentTime = 0;
	  precussion.muted = false;
	  precussion.play();
	});

$(".white-key,.black-key").click(function playAudio() {
	Auds[($(this).attr('id'))-1].currentTime = 0;
	Auds[($(this).attr('id'))-1].muted = false;
	Auds[($(this).attr('id'))-1].play();
});
$('body').keypress(function(e) {
	var code = e.keyCode || e.which;
	switch(code)  {
		case 113:
		case 81:
		Auds[8].muted = false; Auds[8].currentTime = 0; Auds[8].play();
		break;

		case 119:
		case 87:
		Auds[9].muted = false; Auds[9].currentTime = 0; Auds[9].play();
		break;

		case 101:
		case 69:
		Auds[10].muted = false; Auds[10].currentTime = 0; Auds[10].play();
		break;

		case 114:
		case 82:
		Auds[11].muted = false; Auds[11].currentTime = 0; Auds[11].play();
		break;

		case 116:
		case 84:
		Auds[12].muted = false; Auds[12].currentTime = 0; Auds[12].play();
		break;

		case 121:
		case 89:
		Auds[13].muted = false; Auds[13].currentTime = 0; Auds[13].play();
		break;

		case 117:
		case 85:
		Auds[14].muted = false; Auds[14].currentTime = 0; Auds[14].play();
		break;

		case 105:
		case 73:
		Auds[15].muted = false; Auds[15].currentTime = 0; Auds[15].play();
		break;

		case 111:
		case 79:
		Auds[16].muted = false; Auds[16].currentTime = 0; Auds[16].play();
		break;

		case 112:
		case 80:
		Auds[17].muted = false; Auds[17].currentTime = 0; Auds[17].play();
		break;

		case 122:
		case 90:
		Auds[18].muted = false; Auds[18].currentTime = 0; Auds[18].play();
		break;

		case 120:
		case 88:
		Auds[19].muted = false; Auds[19].currentTime = 0; Auds[19].play();
		break;

		case 99:
		case 67:
		Auds[20].muted = false; Auds[20].currentTime = 0; Auds[20].play();
		break;

		case 118:
		case 86:
		Auds[21].muted = false; Auds[21].currentTime = 0; Auds[21].play();
		break;

		case 98:
		case 66:
		Auds[22].muted = false; Auds[22].currentTime = 0; Auds[22].play();
		break;

		case 110:
		case 78:
		Auds[23].muted = false; Auds[23].currentTime = 0; Auds[23].play();
		break;

		case 109:
		case 77:
		Auds[24].muted = false; Auds[24].currentTime = 0; Auds[24].play();
		break;

		case 44:
		case 60:
		Auds[25].muted = false; Auds[25].currentTime = 0; Auds[25].play();
		break;

		case 46:
		case 62:
		Auds[26].muted = false; Auds[26].currentTime = 0; Auds[26].play();
		break;

		case 47:
		case 63:
		Auds[27].muted = false; Auds[27].currentTime = 0; Auds[27].play();
		break;

		case 50:
		case 64:
		Auds[42].muted = false; Auds[42].currentTime = 0; Auds[42].play();
		break;

		case 51:
		case 35:
		Auds[43].muted = false; Auds[43].currentTime = 0; Auds[43].play();
		break;

		case 53:
		case 37:
		Auds[44].muted = false; Auds[44].currentTime = 0; Auds[44].play();
		break;

		case 54:
		case 94:
		Auds[45].muted = false; Auds[45].currentTime = 0; Auds[45].play();
		break;

		case 55:
		case 38:
		Auds[46].muted = false; Auds[46].currentTime = 0; Auds[46].play();
		break;

		case 57:
		case 40:
		Auds[47].muted = false; Auds[47].currentTime = 0; Auds[47].play();
		break;

		case 48:
		Auds[48].muted = false; Auds[48].currentTime = 0; Auds[48].play();
		break;

		case 115:
		case 83:
		Auds[49].muted = false; Auds[49].currentTime = 0; Auds[49].play();
		break;

		case 100:
		case 68:
		Auds[50].muted = false; Auds[50].currentTime = 0; Auds[50].play();
		break;

		case 102:
		case 70:
		Auds[51].muted = false; Auds[51].currentTime = 0; Auds[51].play();
		break;

		case 104:
		case 72:
		Auds[52].muted = false; Auds[52].currentTime = 0; Auds[52].play();
		break;

		case 106:
		case 74:
		Auds[53].muted = false; Auds[53].currentTime = 0; Auds[53].play();
		break;

		case 108:
		case 76:
		Auds[54].muted = false; Auds[54].currentTime = 0; Auds[54].play();
		break;

		case 59:
		Auds[55].muted = false; Auds[55].currentTime = 0; Auds[55].play();
		break;

		case 39:
		Auds[56].muted = false; Auds[56].currentTime = 0; Auds[56].play();
		break;

		case 32:
		kick.muted = false; kick.currentTime = 0; kick.play();
		break;

		default:
		break;
	}
});


$(document).keydown(function (e) {
    if (e.keyCode == 16) {
		e.preventDefault();
        snare.muted = false; snare.currentTime = 0; snare.play();
    }
});
$(document).keydown(function (e) {
    if (e.keyCode == 18) {
		e.preventDefault();
        hihat.muted = false; hihat.currentTime = 0; hihat.play();
    }
});

$(document).keydown(function (e) {
    if (e.keyCode == 17) {
		e.preventDefault();
        precussion.muted = false; precussion.currentTime = 0; precussion.play();
    }
});


$('#login').click(function(event) {
	$('#loginform').show("slow");
});

$('#signup').click(function(event) {
	$('#signupform').show("slow");
});


$('.cross').click(function(event) {
	$('#loginform').hide(400);
	$('#signupform').hide(400);
});
// Dark Mode section
function lightMode() {
	$('body').css("background-color","white");
	$('.controlDiv').css("background-color","white");
	$('.nav_custom').css("background-color","white");
	$('b').css("color","black");
	$('.dark').css("color","black");
	$('#mode_text').css("color","black");
	$('.controlDiv').css("border-top-color","black");
	$('.additionalSounds').css("background-color","white");
	$('.additionalSounds').css("border-top-color","black");
}


function darkMode() {
	$('body').css("background-color","black");
	$('.controlDiv').css("background-color","black");
	$('.nav_custom').css("background-color","black");
	$('b').css("color","white");
	$('.dark').css("color","white");
	$('#mode_text').css("color","white");
	$('.controlDiv').css("border-top-color","white");
	$('.additionalSounds').css("background-color","black");
	$('.additionalSounds').css("border-top-color","white");
}
// darkMode();

//Toggle switch section

$('#toggle-trigger').bootstrapToggle();

function changeMode(a) {


	if (a === true) 
		{
			darkMode();
		}
	else if (a === false)
	{
		lightMode();
	}
}
$(function() {
    $('#toggle-trigger').change(function() {
      changeMode($(this).prop('checked'));
    })
  })

// Label hide/show

$('#labels').click(function(event) {
	labels();
});

function labels() {
	if ($('#labels').text() === "Hide Labels") 
	{
	$('p').hide('400');
	$('#labels').text("Show Labels");
	}
	else if ($('#labels').text() === "Show Labels") {
	$('p').show('400');
	$('#labels').text("Hide Labels");	}
}
