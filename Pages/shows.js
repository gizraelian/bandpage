let showsEmptyParent = document.getElementById('showsTable');

const KEY_API = "f7899c41-cb5e-480a-bff1-fe2731d910e4"; 
const url = "https:project-1-api.herokuapp.com"; 
const path="/showdates";
const parameter="?api_key=";

let newPost = function() {
    let request = fetch(url + path + parameter + KEY_API);
    request.then((response) => {
    return response.json();
    }).then((showsData) => {
        showsPopulateTables(showsData);
    console.log(showsData);
    });
}

window.onload = newPost();

function showsPopulateTables(showsData)
{
    for(var i = 0; i < showsData.length; i++)
    {
        let showsTableContainer = document.createElement("tbody");
        let showsSubContainer1 = document.createElement("tr");
        let showsSubContainer2 = document.createElement("tr");
        let showsDate = document.createElement("th");
        let showsPlace = document.createElement("td");
        let showsLocation = document.createElement("td");
        let showsButtonContainer = document.createElement("td");
        let showsButton = document.createElement("button");
        showsButton.innerHTML = "GET TICKETS";

        showsDate.innerHTML = showsData[i].date;
        showsPlace.innerHTML = showsData[i].place;
        showsLocation.innerHTML = showsData[i].location;

        showsTableContainer.setAttribute('class', "showsFirstPage__centralBox--box");
        showsSubContainer1.setAttribute('id', "showsSubContainer1");
        showsSubContainer2.setAttribute('id', "showsSubContainer2");
        showsDate.setAttribute('class', "showsFirstPage__centralBox--box__leftContainer");
        showsPlace.setAttribute('class', "showsFirstPage__centralBox--box__leftContainer");
        showsLocation.setAttribute('class', "showsFirstPage__centralBox--box__centralContainer");
        showsButtonContainer.setAttribute('id', "showsButtonContainer");
        showsButton.setAttribute('class', "showsFirstPage__centralBox--box__rightButton");

        showsEmptyParent.appendChild(showsTableContainer);
        showsTableContainer.appendChild(showsSubContainer1);
        showsSubContainer1.appendChild(showsDate);
        showsSubContainer1.appendChild(showsLocation);
        showsSubContainer1.appendChild(showsButtonContainer);
        showsButtonContainer.appendChild(showsButton);
        showsTableContainer.appendChild(showsSubContainer2);
        showsSubContainer2.appendChild(showsPlace);

    }
}