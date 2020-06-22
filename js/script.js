console.log("Siemaaaaa!");

let changePhotoButton = document.querySelector(".js-changePhotoButton");
let examplePhoto = document.querySelector(".js-examplePhoto");


changePhotoButton.addEventListener("click", () => {
    switch (changePhotoButton.innerText) {
        case "Pokaż pierwsze przykładowe zdjęcie":
            examplePhoto.innerHTML = '<img width="600" src="https://i.ibb.co/WBmDz6S/islandia-47.jpg" alt="Owce na Islandii">';
            changePhotoButton.innerText = "Pokaż drugie przykładowe zdjęcie";
            break;
        case "Pokaż drugie przykładowe zdjęcie":
            examplePhoto.innerHTML = '<img height="600" src="https://i.ibb.co/sWcLJpq/islandia-64.jpg" alt="Gorące źródła na Islandii">';
            changePhotoButton.innerText = "Pokaż trzecie przykładowe zdjęcie";
            break;
        case "Pokaż trzecie przykładowe zdjęcie":
            examplePhoto.innerHTML = '<img width="600" src="https://i.ibb.co/xSMNtkk/USA-ANALOG-005.jpg" alt="Rzeźba Picassa i wieżowce w Chicago">';
            changePhotoButton.innerText = "Pokaż czwarte przykładowe zdjęcie";
            break;
        case "Pokaż czwarte przykładowe zdjęcie":
            examplePhoto.innerHTML = '<img width="600" src="https://i.ibb.co/172jC0K/USA-ANALOG-060.jpg" alt="Góry w parku narodowym Yellowstone">';
            changePhotoButton.innerText = "Pokaż pierwsze przykładowe zdjęcie";
            break;
    }
});



// window.onbeforeunload = function(){
//     return "Jesteś pewna?";
// // };

// <a href="https://ibb.co/QfWyNyh"><img src="https://i.ibb.co/s2T8w8c/100796774-645031086092962-1206782035176194048-n.jpg" alt="100796774-645031086092962-1206782035176194048-n" border="0"></a>
// <a href="https://ibb.co/ss8512L"><img src="https://i.ibb.co/WBmDz6S/islandia-47.jpg" alt="islandia-47" border="0"></a>
// <a href="https://ibb.co/5KCqxXL"><img src="https://i.ibb.co/sWcLJpq/islandia-64.jpg" alt="islandia-64" border="0"></a>
// <a href="https://ibb.co/LzC3XFF"><img src="https://i.ibb.co/xSMNtkk/USA-ANALOG-005.jpg" alt="USA-ANALOG-005" border="0"></a>
// <a href="https://ibb.co/jb4sC8G"><img src="https://i.ibb.co/172jC0K/USA-ANALOG-060.jpg" alt="USA-ANALOG-060" border="0"></a>
