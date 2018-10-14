
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-black", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

(function($) {
    $('nav li').click(function() {
        if($(this).attr('class') === 'active') {
            if(this.id === "showcase6") {
                $(this).removeClass('active');
                $("#resume").css("display", "none");
            } else {
                $(this).removeClass('active');
                $("#jsMaze").css("display", "none");
                $("#jsMazeDocumentation").css("display", "none");
                $("#cppMazeSolver").css("display", "none");
                $("#cppMazeSolverDocumentation").css("display", "none");
                $("#androidMovies").css("display", "none");
                $("#androidMoviesDocumentation").css("display", "none");
                $("#unityMan").css("display", "none");
                $("#unityManDocumentation").css("display", "none");
                $("#winformGame").css("display", "none");
                $("#winformGameDocumentation").css("display", "none");
            }
        } else {
            $(this).addClass('active').siblings('li').removeClass('active');
            if (this.id === "showcase1") {
                $("#jsMaze").css("display", "block");
                $("#jsMazeDocumentation").css("display", "block");
                $("#cppMazeSolver").css("display", "none");
                $("#cppMazeSolverDocumentation").css("display", "none");
                $("#androidMovies").css("display", "none");
                $("#androidMoviesDocumentation").css("display", "none");
                $("#unityMan").css("display", "none");
                $("#unityManDocumentation").css("display", "none");
                $("#winformGame").css("display", "none");
                $("#winformGameDocumentation").css("display", "none");
            } else if (this.id === "showcase2") {
                $("#jsMaze").css("display", "none");
                $("#jsMazeDocumentation").css("display", "none");
                $("#cppMazeSolver").css("display", "block");
                $("#cppMazeSolverDocumentation").css("display", "block");
                $("#androidMovies").css("display", "none");
                $("#androidMoviesDocumentation").css("display", "none");
                $("#unityMan").css("display", "none");
                $("#unityManDocumentation").css("display", "none");
                $("#winformGame").css("display", "none");
                $("#winformGameDocumentation").css("display", "none");
            } else if (this.id === "showcase3") {
                $("#jsMaze").css("display", "none");
                $("#jsMazeDocumentation").css("display", "none");
                $("#cppMazeSolver").css("display", "none");
                $("#cppMazeSolverDocumentation").css("display", "none");
                $("#androidMovies").css("display", "block");
                $("#androidMoviesDocumentation").css("display", "block");
                $("#unityMan").css("display", "none");
                $("#unityManDocumentation").css("display", "none");
                $("#winformGame").css("display", "none");
                $("#winformGameDocumentation").css("display", "none");
            } else if (this.id === "showcase4") {
                $("#jsMaze").css("display", "none");
                $("#jsMazeDocumentation").css("display", "none");
                $("#cppMazeSolver").css("display", "none");
                $("#cppMazeSolverDocumentation").css("display", "none");
                $("#androidMovies").css("display", "none");
                $("#androidMoviesDocumentation").css("display", "none");
                $("#unityMan").css("display", "none");
                $("#unityManDocumentation").css("display", "none");
                $("#winformGame").css("display", "block");
                $("#winformGameDocumentation").css("display", "block");
            } else if (this.id === "showcase5") {
                $("#jsMaze").css("display", "none");
                $("#jsMazeDocumentation").css("display", "none");
                $("#cppMazeSolver").css("display", "none");
                $("#cppMazeSolverDocumentation").css("display", "none");
                $("#androidMovies").css("display", "none");
                $("#androidMoviesDocumentation").css("display", "none");
                $("#unityMan").css("display", "block");
                $("#unityManDocumentation").css("display", "block");
                $("#winformGame").css("display", "none");
                $("#winformGameDocumentation").css("display", "none");
            } else if (this.id === "showcase6") {
                $("#resume").css("display", "block");
            }
        }
    });
})(jQuery);
