
function init(){

    window.addEventListener("load", () => {
        let nbVisits = localStorage.getItem('nbvisits') || 0;
        nbVisits ++;
        localStorage.setItem('nbVisits', nbVisits);

        document.getElementById('visit-count').innerHTML = nbVisits;
    })

    let form = document.getElementById('name-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //toggleForm();
        hideFirstAndShowSecondForm();
    });

    Notification.requestPermission(function (permission) {
        if (!('permission' in Notification)){
            Notification.permission = permission;

            if (permission === "granted") {
                var notification = new Notification("Oh loooooooooooooooooo");
            }

            
        }
    })

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(writePosition, ()=> {}, () =>{});
    } else {
        
    }

    setTimeout(toggleForm, 2000);
    //setInterval(toggleForm, 2000)

    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue= '';
    });

}

function showPreview (e){
    console.log(e)
    console.log(e.files);

    let reader = new FileReader();

    reader.readAsDataURL(e.files[0])

    reader.onload = function() {
        var output = document.getElementById('preview');
        output.src = reader.result; 
    }

    var myAudio = new Audio ("allumer-le-feu.mp3");
    myAudio.play();

}

function writePosition(position){
    console.info(position);
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    let el = document.createElement('div');
    let text = '<h1>t lo a ' + lat + ' ' + lng;
    el.innerHTML = text;

    document.body.appendChild(el);
}

function toggleForm(){
    
    let registerPopup = document.getElementById('register-popup');
    registerPopup.classList.toggle('hidden');

}

function hideFirstAndShowSecondForm(){
    let form = document.getElementById('name-form');
    let secondForm = document.getElementById('second-form');

    form.classList.add('hidden');
    secondForm.classList.remove('hidden');
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted orange';
  enterEventCount++;
  addListItem("johnny in");
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem("johnny out");
});

function addListItem(text) {
  // On crée un nouveau noeud text avec le texte fourni
  var newTextNode = document.createTextNode(text);

  // On crée un élément li
  var newListItem = document.createElement("li");

  // On ajoute le noeud texte à l'élément li
  newListItem.appendChild(newTextNode);

  // On ajoute l'élément de liste à la liste
  unorderedList.appendChild(newListItem);  
}

var clignotement = function(){ 
    if (document.getElementById('chat-popup').style.visibility=='visible'){ 
       document.getElementById('chat-popup').style.visibility='hidden'; 
    } 
    else{ 
    document.getElementById('chat-popup').style.visibility='visible'; 
    } 

    periode = setInterval(clignotement, 800); 
 }; 


init();