// establish main DOM elements
let mainButton = document.getElementById('mainButton')
let pingInputOne = document.getElementById('pingInputOne')
let pingInputTwo = document.getElementById('pingInputTwo')
let pingDivOne = document.getElementById('pingDivOne')
let pingDivTwo = document.getElementById('pingDivTwo')

// function to handle ping div colors and receive user input
function handlePingDivOneColor(divTime1) {
    // sets div color to inputfield ping value
    setTimeout(function() {
        pingDivOne.style.backgroundColor = 'lightgreen'
    }
    , divTime1)
    // resets div color to default after delay
    setTimeout(function() {
        pingDivOne.style.backgroundColor='white'
    }
    , 1000)
}

function handlePingDivTwoColor(divTime2) {
    // sets div color to ping value
    setTimeout(function() {
        pingDivTwo.style.backgroundColor = 'lightgreen'
    }
    , divTime2)
    // resets div color to default after delay
    setTimeout(function() {
        pingDivTwo.style.backgroundColor='white'
    }, 
    1000)
}


// main event
mainButton.addEventListener('click', function() {
    timeValueOne = pingInputOne.value
    timeValueTwo = pingInputTwo.value
    handlePingDivOneColor(timeValueOne)
    handlePingDivTwoColor(timeValueTwo)
})

// handle ping explanation
let explanationButton = document.getElementById('explainPing')
let hidePingExplanation = document.getElementById('hidePingDescription')
let pingDescriptionDiv = document.getElementById('contentExplanation')

explanationButton.addEventListener('click', function() {
    explanationButton.hidden = true
    hidePingExplanation.hidden = false
    pingDescriptionDiv.style.display = ''
})

hidePingExplanation.addEventListener('click', function() {
    explanationButton.hidden = false
    hidePingExplanation.hidden = true
    pingDescriptionDiv.style.display = 'none'
})
