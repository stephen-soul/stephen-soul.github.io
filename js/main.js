
// Array of project ids
var projectNames = ["#jsMaze", "#jsMazeDocumentation", "#cppMazeSolver", "#cppMazeSolverDocumentation", "#androidMovies", "#androidMoviesDocumentation", "#unityMan", "#unityManDocumentation", "#winformGame", "#winformGameDocumentation", "#godot", "#godotDocumentation", "#taskApp", "#taskAppDocumentation"]
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

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

(function($) {
    $('nav li').click(function() {
        $('nav li').css("background", "white");
        if($(this).attr('class') === 'active') {
            $(this).removeClass('active');
            for (let x = 0; x < projectNames.length; x++) {
                $(projectNames[x]).css("display", "none");
                //$(projectNames[x]).css("background", "white");
            }
        } else {
            $(this).css("background", "green");
            $(this).addClass('active').siblings('li').removeClass('active');
            var idToShow
            switch(this.id) {
                case "showcase1":
                    idToShow = "jsMaze";
                    break;
                case "showcase2":
                    idToShow = "cppMaze";
                    break;
                case "showcase3":
                    idToShow = "androidMovies";
                    break;
                case "showcase4":
                    idToShow = "winform";
                    break;
                case "showcase5":
                    idToShow = "unityMan";
                    break;
                case "showcase6":
                    idToShow = "godot";
                    break;
                case "showcase7":
                    idToShow = "taskApp";
                    break;
                default:
                    break;
            }
            var re = new RegExp(idToShow);
            for (let x = 0; x < projectNames.length; x++) {
                re.test(""+projectNames[x]) ? $(projectNames[x]).css("display", "block") : $(projectNames[x]).css("display", "none");
                console.log(projectNames[x]);
            }
        }
    });
})(jQuery);
