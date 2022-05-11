/*
let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

function circleclick() {
  setTimeout(function(){
    circle.style.backgroundColor = 'lightskyblue';
    setTimeout(function(){
      circle.style.backgroundColor = 'white';
    },100);
  },0);
}
*/

var playgametext = document.getElementById('playgame');
var canvas = document.getElementById('canvas');
var lotsofballs = document.getElementById('lotofballs');
const h1title = document.getElementById('h1title');
var count = 1;
var count2 = 1;
var amount = 0;
var amount2 = 0;
var countw = 1;
var count2w = 1;
var amountw = 0;
var amount2w = 0;

/*
var speedx = document.getElementById('speedx');
var speedy = document.getElementById('speedy');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = 1;

canvas.onclick = function() {
  speedx.innerHTML ++;
  speedy.innerHTML ++;
  dx ++;
  dy ++;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "lightskyblue";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}
setInterval(draw, 10);

function canvasclicked() {
  dx += 0.3;
  dy += 0.3;
}
*/
/*
function circle2() {
  const array2 = ['white', 'lightblue', 'aqua', 'brown', 'cornflowerblue'];
  const array = ['lightcoral', 'lightsalmon', 'lightgreen', 'lightpink', 'lightseagreen', 'palevioletred'];
  const randomItem = array[Math.floor(Math.random()*array.length)];
  const randomItem2 = array2[Math.floor(Math.random()*array2.length)];
  const circle = document.getElementById('circle');
  const circle2 = document.getElementById('circle2');

  setTimeout(function() {
    circle2.style.transition = 'all 3.5s';
    circle2.style.width = '1000px';
    circle2.style.height = '200px';
    setTimeout(function() {
      canvas.style.backgroundColor = randomItem;
      circle2.style.display = 'none';
      circle.style.backgroundColor = randomItem2;
      circle.style.display = 'block';
      circle.style.width = '40px';
      circle.style.height = '40px';
    },3500);
  },0);
}
*/

function circle2() {
  //const array = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod" ,"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  const array = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod" ,"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  const randomItem = array[Math.floor(Math.random()*array.length)];
  const randomItem2 = array[Math.floor(Math.random()*array.length)];
  const circle2 = document.getElementById('circle2');
  //const sizechange = document.getElementById('sizechange');
  const levelchange = document.getElementById('levelchange');
  const nextlevel = document.getElementById('nextlevel');

  circle2.style.backgroundColor = randomItem2;

  count2w = countw++;
  circle2.remove();
  amount2w = amountw--;

  circle2.style.width = '10%';
  circle2.style.height = '10%';
  if(amount2w == 0) {
    count2w = countw / 2;
    for(let iw=0; iw<count2w; iw++) {
      taskw(iw);
    }
  } 

  function taskw(iw) {
    setTimeout(function() {
      canvas.appendChild(circle2.cloneNode(true));
      amount2w = amountw++;
    }, 400 * iw);
  }
}

function circle() {

  const array = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod" ,"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  const randomItem = array[Math.floor(Math.random()*array.length)];
  const randomItem2 = array[Math.floor(Math.random()*array.length)];
  const circle = document.getElementById('circle');
  const circle2 = document.getElementById('circle2');
  //const sizechange = document.getElementById('sizechange');
  const levelchange = document.getElementById('levelchange');
  const nextlevel = document.getElementById('nextlevel');


  if(count2 > 15 && count2w > 15) {
    lotsofballs.style.display = 'block';
  }

  //sizechange.innerHTML --;

  //circle.style.width = circle.offsetWidth - 1 + 'px';
  //circle.style.height = circle.offsetHeight - 1 + 'px';

/*
  var currentValue = circle.style.width;
  circle.style.width = (parseInt(currentValue) + 10) + 'px';
  */

/*
  canvas.appendChild(circle.cloneNode(true));
  */

  circle.style.backgroundColor = randomItem;

/*
  setTimeout(function() {
    circle.style.transition = 'all 3.5s';
    circle.style.width = '1000px';
    circle.style.height = '200px';
    setTimeout(function() {
      canvas.style.backgroundColor = randomItem;
      circle2.style.backgroundColor = randomItem2;
      circle2.style.display = 'block';
      circle.style.display = 'none';
      circle2.style.width = '40px';
      circle2.style.height = '40px';
    },3500);
  },0);
  */

  count2 = count++;
  circle.remove();
  amount2 = amount--;

  //playagainn();
  //amountgame();
  //alert(count2);

  circle.style.width = '10%';
  circle.style.height = '10%';
  //sizechange.innerHTML = '10';

  if(amount2 == 0) {
    count2 = count / 2;
    for(let i=0; i<count2; i++) {
      task(i);
    }
  } 

  function task(i) {
    setTimeout(function() {
     // if(count2 == 0) {
      canvas.appendChild(circle.cloneNode(true));
      amount2 = amount++;
        //playagain2();
      //} 
    }, 400 * i);
  }
  
  

/*
    setTimeout(function() {
      circle.style.display = 'block';
      setTimeout(function() {
        canvas.appendChild(circle.cloneNode(true));
      },500);
    },800);
    */
  }

/*
  function playagainn() {
    count2 = count ++;
  }

  function playagain2() {
    count2 = count --;
  }

  function amountgame() {
    amount2 = amount--;
  }
  */

  function playgame() {
  /*
  playgametext.style.display = 'block';
  nextlevel.style.display = 'none';
  */
  var timeleft = 3;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      playgame2();
    } else {
      playgametext.innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}
//const audio1 = document.getElementById('loadaudio');
function playgame2() {
  //audio1.play();

  var sectionbottom = document.getElementById('sectionbottom');
  var title = document.getElementById('title');
  var theme = document.getElementById('theme');

  showsong.style.display = 'block';
  playgametext.style.display = 'none';
  title.style.display = 'block';
  canvas.style.display = 'block';
  sectionbottom.style.display = 'block';
  theme.style.display = 'block';
}

var firstaudio = document.getElementById('loadaudio');
var firstaudio2 = document.getElementById('loadaudio2');
var firstaudio3 = document.getElementById('loadaudio3');
var firstaudio4 = document.getElementById('loadaudio4');

function playfirstaudio() {
  if(firstaudio2.play() || firstaudio3.play() || firstaudio4.play()) {
    firstaudio2.pause();
    firstaudio3.pause();
    firstaudio4.pause();
    firstaudio.play();
  }
}

function playsecondaudio() {
  if(firstaudio.play() || firstaudio3.play() || firstaudio4.play()) {
    firstaudio.pause();
    firstaudio4.pause();
    firstaudio3.pause();
    firstaudio2.play();
  }
}

function playthirdaudio() {
  if(firstaudio2.play() || firstaudio.play() || firstaudio4.play()) {
    firstaudio2.pause();
    firstaudio4.pause();
    firstaudio.pause();
    firstaudio3.play();
  }
}

function playfourthaudio() {
  if(firstaudio.play() || firstaudio2.play() || firstaudio3.play()) {
    firstaudio.pause();
    firstaudio2.pause();
    firstaudio3.pause();
    firstaudio4.play();
  }
}

var showsong = document.getElementById('songs');

function showsongs() {
  if(showsong.style.height == '245px') {
    showsong.style.animation = 'zoom2 3s ease infinite';
    showsong.style.height = '0px';
    showsong.style.opacity = '0.6';
  } else {
    showsong.style.animation = 'none';
    showsong.style.height = '245px';
    showsong.style.opacity = '1';
  }
}

function noremove() {
  lotsofballs.style.display = 'none';
}

function yesremove() {
  const circle = document.getElementById('circle');
  const circle2 = document.getElementById('circle2');
}

function inspotheme() {
  function changeinspo() {
    h1title.innerHTML = inspoarray[counterinspo];
    counterinspo++;
    if (counterinspo >= inspoarray.length) {
      counterinspo = 0;
    }
  }

  var counterinspo = 0;
  var inspoarray = ['Live your truth', 'Struggle up the hill', "Take aim even badly", "An obstacle is often a stepping stone", "Be a voice not an echo", "Peace is its own reward"];
  var instinspo = setInterval(changeinspo, 1000);
}

function standardtheme() {
  function change() {
    h1title.innerHTML = quotearray[counter];
    counter++;
    if (counter >= quotearray.length) {
      counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

var counter = 0;
var quotearray = ['This is pretty cool', 'Can you count those discs?', "Can your device keep up?", "Have you got a song playing?"];
var inst = setInterval(change, 1000);
}

function animalstheme() {
  const circle = document.getElementById('circle');

  circle.style.border = '2px solid white';
  circle.style.backgroundColor = 'transparent';
  circle.style.backgroundImage = 'url(../images/animals/snake.png)';
}