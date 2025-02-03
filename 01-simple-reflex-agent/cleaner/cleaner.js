// MIT License
// Copyright (c) 2025 Kevin Secaida

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states, visitedStates) {
    var location = states[0];
    var state = location == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    
    // Guardar estado actual
    var stateKey = states.join();
    visitedStates.add(stateKey);
    
    // Aplicar acción
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    
    // Verificar si ya visitamos los 8 estados
    if (visitedStates.size >= 8) {
        document.getElementById("log").innerHTML += "<br><strong>Se han visitado los 8 estados, finalizando.</strong>";
        return;
    }
    
    setTimeout(function () { test(states, visitedStates); }, 1000);
}

var states = ["A", "DIRTY", "DIRTY"];
var visitedStates = new Set();
test(states, visitedStates);
