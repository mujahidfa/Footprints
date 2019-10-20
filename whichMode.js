// These are variables used to identify which travel mode is chosen by user
//
// .className returns "section-directions-trip-travel-mode-icon drive"
var isCar = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.drive")
//  .className returns "section-directions-trip-travel-mode-icon transit"
var isBus = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.transit")
//  .className returns "section-directions-trip-travel-mode-icon walk"
var isWalk = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.walk")
//  .className returns "section-directions-trip-travel-mode-icon bike"
var isCycle = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-travel-mode-icon.bike")
//
// END mode-identifying variables  

// default to error, or no mode found  
var mode = {
  'text': 'none',
  'footprint': 0,
  'miles': 0
}

if (isCar != null) {
  mode['text'] = 'car';
  var fullMiles = document.querySelector("#section-directions-trip-0 > div.section-directions-trip-description > div:nth-child(1) > div.section-directions-trip-numbers > div.section-directions-trip-distance.section-directions-trip-secondary-text > div").outerText

  var miles = fullMiles.split(" "); 
  var parsedMiles = miles[0].replace(/\,/g, "");
  mode['miles'] = parseFloat(parsedMiles)

  var url = 'https://cors-anywhere.herokuapp.com/https://api.carbonkit.net/3.6/categories/US_road_transport_by_Greenhouse_Gas_Protocol/calculation?type=passenger+car&fuel=gasoline&emissionStandard=2005-present&uid=2E35U429HR99&values.distance=' + parsedMiles;

  var xhr = new XMLHttpRequest();

  xhr.open("GET", url, false);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Authorization", "Basic <enter your own username and password for CarbonKit API>");
  //xhr.setRequestHeader("Host", "api.carbonkit.net");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // innerText does not let the attacker inject HTML elements.
      var resp = JSON.parse(xhr.responseText);
      //alert(resp)
      console.log(resp.output.amounts[1].value)
      
      mode['footprint'] = resp.output.amounts[1].value
      
    }
  }
  xhr.send();
}


if (isBus != null)
  mode['text'] = 'bus';

if (isWalk != null)
  mode['text'] = 'walk';

if (isCycle != null)
  mode['text'] = 'cycle';

mode // 'return' statement, will be read by hcrome.tabs.executeScript in popup.js
