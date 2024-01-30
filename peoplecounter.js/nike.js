let errorPara = document.getElementById("error")
console.log(errorPara)

function purchase() {
    console.log("button Clicked")
    errorPara.textContent = "Something went wrong, please try again"
}