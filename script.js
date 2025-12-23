const p = document.querySelector('p')
const text = p.innerText
p.addEventListener('mouseenter',function(){
const characters = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
let iteration = 0


function randomText (){
     const str = text.split("").map((char, index)=>{
          if(index < iteration) {
               return char
          }
          return characters.split("")[Math.floor(Math.random()*52)]
     }).join("")
      p.innerText = str

      iteration += 0.5

     
}

setInterval( randomText, 30)

}) 