function tally(plyr){
  tallies = {1:"images/chalk1.png",2:"images/chalk2.png",3:"images/chalk3.png",4:"images/chalk4.png",5:"images/chalk5.png"}
  var x = document.querySelector("#"+plyr+"_score")
  var last_tally = x.lastElementChild.getAttribute("src")
  if (!last_tally || last_tally == tallies[5]) {
      i = document.createElement("img")
      i.src="images/chalk1.png"
      i.alt = "chalk mark"
      x.appendChild(i)
    } else {
      for (t in tallies) {
        if (last_tally == tallies[t]){
          x.lastChild.setAttribute("src",tallies[parseInt(t)+1])
          return tallies[newT]
        }
      }
    }
}



function erase(plyr) {
  var x = document.querySelector("#"+plyr+"_score")
  return x.lastElementChild.remove(0)
}



