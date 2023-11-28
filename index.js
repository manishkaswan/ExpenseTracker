let mybtn = document.getElementById("btn")
let expnm = document.getElementById("nminput")
let discrp = document.getElementById("disc")
let catog = document.getElementById("cato")
mybtn.addEventListener("click",()=>{
    let expnm1 = expnm.value;
    let dics1 = discrp.value;
    let catog1 = catog.value;
    let mdata = expnm1+"-"+dics1+"-"+catog1
    let newlist = document.createElement('li')
    let nbtn = document.createElement('button')
    newlist.textContent = mdata
    nbtn.appendChild(document.createTextNode("Delete Item"))
    newlist.appendChild(nbtn)
    let exlist = document.getElementById("myul")
    exlist.appendChild(newlist)
    expnm.value = ""
    discrp.value = ""
    catog.value = ""
    localStorage.setItem('savedData', mdata);
})