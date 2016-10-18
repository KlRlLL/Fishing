'use strict'
    var id = 0;
	var things = Elements.Thing();
  var out  
var inventory = document.getElementById('inventory');
var createzone = document.getElementById('createzone');
var createBut = document.getElementById('createBut')
var out = document.getElementById('out');

function reboot ()
{
		things = Elements.Thing();
		id = 0;

		clean();

		for (var i = 0; i < things.length; i++)
        {
			put(things[i]);
		}
}

function clean ()
{
    inventory.innerHTML = '';
    createzone.innerHTML = '';
}

reboot();

createBut.addEventListener('click', create);
inventory.addEventListener('drop',drop);
inventory.addEventListener('dragover',dragOver);
createzone.addEventListener('drop',drop);
createzone.addEventListener('dragover',dragOver);

function put (Name)
    {
        var img = document.createElement('img');
        var n;
        n=Name;
        img.id = 'thing' + id;
        img.setAttribute('src', Name);
        img.className = Name;
        img.setAttribute('draggable', true);
        img.ondragstart =drag;
        img.innerHTML = n;
        img.setAttribute('width','100px')
        img.setAttribute('height','70px')
        inventory.appendChild(img);
		id++;
	}

function create ()
{

		var worcsThing = createzone.querySelectorAll('img');
		if (worcsThing.length)
        {
			var arrayItems = [];

			for (var i = 0; i < worcsThing.length; i++) {
				arrayItems.push(worcsThing[i].className);
			}

			var Result = Elements.Creator(arrayItems);

            
			if (Result !== 0) {
				alert('Получилось');
				
				Elements.setThing(Result);
				reboot();
                
			}
            else
            {
				alert('Не верное сочитание');
			}

		}
    else
    {
			alert('Нужно больше чем есть сейчас');
    }
	}

function drag (event)
    {
		event.dataTransfer.setData('text', event.target.id);
	}

	function dragOver (event)
    {
		event.preventDefault();
	}

	function drop (event)
    {
		event.preventDefault();
		var id = event.dataTransfer.getData("text");
		
		if (event.target.id === 'createzone' ||
			event.target.id === 'inventory') {
			event.target.appendChild(document.getElementById(id));
		}
	}
/*function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
}var mas =['fish.png','fish-eaten.png','shark.png'];
    var save='',a='2',b='',c='',to=0;
	var out=[a,b,c];
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    out[to]=data;
    save += out[to];
	opsss();
to++;}
    function opsss() {
        if(save==12||save==21){
            a=out[0];
    var obj = document.getElementById(a);
     obj.src = mas[0];
            obj.width = 500;
            obj.height = 450;
        alert('You caught a fish, mission accomplished!');}
		if(save==13||save==31){
            a=out[0];
    var obj = document.getElementById(a);
     obj.src = mas[2];
            obj.width = 500;
            obj.height = 450;
        alert('You caught a shark, run run run !!!');}
		if(save==23||save==32){
            a=out[0];
    var obj = document.getElementById(a);
     obj.src = mas[1];
            obj.width = 500;
            obj.height = 450;
        alert('You caught a fish, Greenpeace says thanks)');}
    }*/