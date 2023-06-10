var c = document.createElement("canvas");
var ctx = c.getContext("2d");

// Append the canvas to the document body
document.body.appendChild(c);

// Set the canvas styles to position it fixed and cover the whole viewport
c.style.position = "fixed";
c.style.top = "0";
c.style.left = "0";
c.style.width = "100%";
c.style.height = "100%";
c.style.zIndex = "-1";
c.style.pointerEvents = "none";

// Set the canvas dimensions based on the document body
c.width = document.body.scrollWidth;
c.height = document.body.scrollHeight;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅ}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 13;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#54b854";//green text
    ctx.font = font_size + "px VT323";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 50);
