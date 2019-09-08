const custDestination = () => {
    const v = document.getElementById("definedID").select.value
    if(v === "other"){
        console.log('other')
    }
}

const gather = () => {
    const firstNm = document.getElementById("firstNm").value;
    const lastNm = document.getElementById("lastNm").value;
    const pickup = document.getElementById("address").value;
    //const dropoff = document.getElementById("definedID").option;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value; 
    const time = document.getElementById('time').value;
    const mednum = document.getElementById('medNum').value;

    console.log(`First Name: ${firstNm}`);
    console.log(`Last Name: ${lastNm}`);
    console.log(`Pick-Up Location: ${pickup}`);
    console.log(`Email: ${email}`);
    console.log(`Medicade Number: ${mednum}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    //console.log(`Destination: ${definedID}`)
    //console.log(`Drop Off Location: ${dropoff}`);
}

$(document).ready(function () {
    /**
     * Show regulations given an address string
     * @param {string} input 
     */


      // SETUP AUTOCOMPLETE
  // for options see here: http://api.jqueryui.com/autocomplete/
  $("#address").autocomplete({
    source: function (request, response) {
      arcgisRest.suggest(request.term, {
        params: {
          location: '-90.18,38.62' // origin point location that is used to sort geocoding candidates based on their proximity to the location
        }
      }).then(function (data) {
        response(data.suggestions.map(function (suggestionObject) {
          return {
            label: suggestionObject.text,
            value: suggestionObject.text
          };
        }));
      }.bind(this));

    },
    minLength: 2,

  });
    
});