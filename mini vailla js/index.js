//App area
var appArea = document.body.appendChild(document.createElement("div"));
//Registered routes
var routes = [
    {
        url: '', callback: function () {
            appArea.innerHTML = "<h1>Home</h1><a href=\"#todo\">To-Do</a><br/><a href=\"#calendar\">Calendar</a>";
        }
    }
];
//Routing function
function Routing() {
    var hash = window.location.hash.substr(1).replace(/\//ig, '/');
    //Default route is first registered route
    var route = routes[0];
    //Find matching route
    for (var index = 0; index < routes.length; index++) {
        var testRoute = routes[index];
        if (hash === testRoute.url) {
            route = testRoute;
        }
    }
    //Fire route
    route.callback();
}
//Listener
window.addEventListener('popstate', Routing);
//Initial call
setTimeout(Routing, 0);
//Add other routes
routes.push({ url: "todo", callback: function () { appArea.innerHTML = "<h1>To-Do</h1><a href=\"#\">Home</a><br/><a href=\"#calendar\">Calendar</a>"; } });
routes.push({ url: "calendar", callback: function () { appArea.innerHTML = "<h1>Calendar</h1><a href=\"#\">Home</a></br><a href=\"#todo\">To-Do</a>"; } });