// MIT License
// Copyright (c) 2025 Kevin Secaida

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
    else if (location == "C") return "UP";
    else if (location == "D") return "DOWN";
}

function test(states, visitedStates) {
    var location = states[0];
    var state = states[1][location];
    
    visitedStates.add(location + "-" + state);
    
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    
    if (action_result == "CLEAN") {
        states[1][location] = "CLEAN";
    } else {
        if (action_result == "RIGHT") states[0] = "B";
        else if (action_result == "LEFT") states[0] = "A";
        else if (action_result == "UP") states[0] = "C";
        else if (action_result == "DOWN") states[0] = "D";
    }
    
    if (visitedStates.size < 8) {
        setTimeout(function() { test(states, visitedStates); }, 2000);
    } else {
        document.getElementById("log").innerHTML += "<br>All states visited. Stopping simulation.";
    }
}

var states = ["A", {"A": "DIRTY", "B": "DIRTY", "C": "DIRTY", "D": "DIRTY"}];
var visitedStates = new Set();
test(states, visitedStates);
