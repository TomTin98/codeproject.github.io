document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='hjem.html'>Hjem</a></li>" +
"<li><a href='omvårbedrift.html'>Om vår bedrift</a></li>" + "<li><a href='verktøy.html'>Verktøy</a></li>" + "<li><a href='forskjelligt.html'>Forskjelligt</a></li>" + "<li><a href='embeds.html'>Embeds</a></li>";

function sayHello(name) {
alert("Dette virker som det " + name);
}

$(window).load(function() {
    $(".loader").fadeOut("slow");
})

Skype.ui({
    "name": "call",
    "element": "SkypeButton_Call__1",
    "participants": [""],
    "imageSize": 32
        });

$("li").click(function(){
 $(this).toggleClass("active") 
});

// Test kommentar