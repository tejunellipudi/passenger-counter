let countin=document.getElementById("counttext")
let prevcount=document.getElementById("prev")
let count=0
function countinc(){
    count = count + 1
    countin.textContent = count
}
function savecount(){
    let countStr = count + " - "
    prevcount.textContent += countStr
    countin.textContent = 0
}

