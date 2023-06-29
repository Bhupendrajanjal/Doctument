var cl = console.log;

const para=document.createElement('p');
cl(para)
para.className='alert alert-info'
para.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odit id ut magnam necessitatibus illum dolorum praesentium ipsa, libero amet quos veritatis minus nam quam quasi autem beatae enim quibusdam voluptate nulla tempora at. Suscipit in odio adipisci rem repudiandae.'

const idcontainer=document.getElementById('container')

idcontainer.prepend(para)

const headding=document.createElement('h1')
headding.className='display-3 bg-info'
headding.innerHTML='headding one  '
idcontainer.prepend(headding)


//////////////////////////////////////InsertBefore /////////////////////////////////////////////////////////////////

// li chya agodar nav hav tr tya veles kay karave 

const oxygen= document.getElementById('oxygen');

const Flexandsass= document.createElement('li')
Flexandsass.className='list-group-item bg-primary text-white'
const FlexText=document.createTextNode('FlexAndSass')
Flexandsass.append(FlexText)
skills.insertBefore(Flexandsass , oxygen)
















const mymomwish=document.createElement('li')
mymomwish.className='list-group-item bg-warning'
let Mymomtext=document.createTextNode('My MoM Wish')

mymomwish.append(Mymomtext)

skills.insertBefore(mymomwish , bootstrap4)











