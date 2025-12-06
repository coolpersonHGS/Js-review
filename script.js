let body = document.body;

let subtractbutton = document.getElementById("counter-dec");
let additionbutton = document.getElementById("counter-inc");
let resetbutton = document.getElementById("counter-reset");
let displaytext = document.getElementById("counter-value");
let numberdisplayval = 0;

let darkmodebutton = document.getElementById("dark-toggle");

function darkmodetoggle()
{
    if(body.style.color == "white")
    {
        body.style.color = "black"
        body.style.backgroundColor = "white"
    }
    else
    {
        body.style.color = "white"
        body.style.backgroundColor = "black"
       
    }
}
function updatenumberdisplay()
{
    displaytext.textContent = String(numberdisplayval) ;
}

subtractbutton.addEventListener("click", function(){
numberdisplayval-=1;
updatenumberdisplay();
});

additionbutton.addEventListener("click", function(){
numberdisplayval+=1;
updatenumberdisplay();
});

resetbutton.addEventListener("click", function(){
numberdisplayval = 0;
updatenumberdisplay();
});

darkmodebutton.addEventListener("click", function(){
darkmodetoggle();
});

let eventlist = document.getElementById("event-list");
let selectiontext = document.getElementById("selected-output");
let item1 = eventlist.children[0];
let item2 = eventlist.children[1];
let item3 = eventlist.children[2];

function selectionlogic (itemNum = 0)
{
    for ( const item of eventlist.children)
    {
        item.style.backgroundColor = "white";
    }

    if (itemNum == 1)
    {
        item1.style.backgroundColor = "gray";
        selectiontext.textContent = "Selected: Item 1";
    }
    else if (itemNum == 2)
    {
        item2.style.backgroundColor = "gray";
        selectiontext.textContent = "Selected: Item 2";
    }
     else if (itemNum == 3) 
    {
        item3.style.backgroundColor = "gray";
        selectiontext.textContent = "Selected: Item 3";
    }
    
    //more code
}
selectionlogic();


item1.addEventListener("click", function(){ selectionlogic(1);});

item2.addEventListener("click", function(){ selectionlogic(2);});

item3.addEventListener("click", function(){ selectionlogic(3);});


let form = document.getElementById("sample-form");
let formbtn = document.getElementById("submitbtn");

function submitForm ()
{
let forminfo = new FormData(form);

const nameinput = forminfo.get("name");
if(nameinput != "")
{const formOutput = document.getElementById("formmsg");
formOutput.textContent = "name: "+String(nameinput);
}
form.reset();
}

form.addEventListener("submit", function(event){
   event.preventDefault(); 
  //submitForm();
  
});

formbtn.addEventListener("click", function()
{
    
    submitForm();
});

const modalbtn = document.getElementById("openmodalbtn");
const modal = document.getElementById("demoModal");
const modalclose = document.getElementById("mdlclose");



document.addEventListener("keydown", function(input){
    if (input.key == "Escape")
    {
        modal.style.display = "none";
    }

});


document.addEventListener("click", function(event){
    if(event.target != modalbtn && modal.style.display  === "inline-block")
    {
        modal.style.display = "none";
    }
    

});

modalclose.addEventListener("click",function(){
    modal.style.display = "none";
});

modalbtn.addEventListener("click", function(){
 modal.style.display = "inline-block";

});
/*
  Genius Script (pseudo-code): Combined exercises with comment-based steps

  This file intentionally contains pseudo-code and commented guidance rather
  than full implementations. Geniuses should use the comments AS A REFERENCE to implement
  the behaviours in the classroom. The file is safe to include in a page
  — it won't throw if elements are missing.
*/

/* ---------------- Exercise #1 Counter (pseudo + small hints) ----------------
   1) Get the elements by id:
      var valueEl = document.getElementById('counter-value');
      var incBtn = document.getElementById('counter-inc');
      var decBtn = document.getElementById('counter-dec');
      var resetBtn = document.getElementById('counter-reset');

   2) Read the number:
      var n = Number(valueEl.textContent || '0');

   3) Add click listeners:
      incBtn.addEventListener('click', function () { // set new value });

   4) Update the DOM:
      valueEl.textContent = String(n);
*/


/* ---------------- Exercise #2 Dark Mode (pseudo + small hints) ----------------
   1) Find the toggle: var toggle = document.getElementById('dark-toggle');
   2) On click: if (document.documentElement.classList.contains('dark')) { remove } else { add }
   3) Save preference: localStorage.setItem('edu_dark_mode', '1');
   4) On load: read localStorage and set class accordingly
*/

/* ---------------- Exercise #3 Event Handling (pseudo + hints) ----------------
   1) var list = document.getElementById('event-list');
   2) list.addEventListener('click', function (ev) { ... });
   3) Inside handler: use a loop to walk up from ev.target to find an element with class 'item'
   4) Read attribute: var id = item.getAttribute('data-item-id');
   5) Update an output element, e.g., document.getElementById('selected-output').textContent = 'Selected: ' + id;
*/

/* ---------------- Exercise #4 Form Submission (pseudo + hints) ----------------
   1) var form = document.getElementById('sample-form');
   2) form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var name = form.elements['name'].value.trim();
        if (!name) { show message; return; }
        console.log('send', name);
        form.reset();
      });
*/

/* ---------------- Exercise #5 Modal (pseudo + hints) ----------------
   1) Add buttons like <button data-open-modal="demoModal">Open</button>
   2) On click: var id = btn.getAttribute('data-open-modal'); var modal = document.getElementById(id);
   3) To open: modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false');
   4) To close: modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true');
 5) Close on ESC: document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') { // close } });
*/